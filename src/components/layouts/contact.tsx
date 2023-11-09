import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from "react";

import ComponentIcon from '../partials/icon';
import ComponentRecaptcha from '../partials/recaptcha';
import ComponentNameSection from '../partials/name_section';
import ComponentMessageError from '../partials/messages/error';
import ComponentMessageWarning from '../partials/messages/warning';
import ComponentMessageConfirmation from '../partials/messages/confirmation';

import { Use_translation } from "@/i18n/logic/use_translation";
import { Use_window_width } from '@/logic/page/size';
import { Style_icon } from '@/components/partials/contact/icon';
import { Style_input } from '@/logic/style/input';
import { Insulting_message } from '@/logic/restrictions/insulting_message';
import { Send_email } from '@/logic/services/send_email';
import { Amount_lines_input } from '@/logic/style/amount_lines_input';

type Props = {
    animate: boolean,
    lenguaje: boolean
}

export default function ComponentContact(props: Props) {
    const { animate, lenguaje } = props;

    const t = Use_translation(1);
    const width = Use_window_width();

    const { register, formState: { errors }, handleSubmit, watch } = useForm();

    const [active_validation, setActive_validation] = useState<boolean>(false)
    const [send_email, setSend_email] = useState<boolean>(false);
    const [error_email, setError_email] = useState<boolean>(false);
    const [state_captcha, setState_captcha] = useState<any>(null);

    const ref_form = useRef<any>(null);
    const recaptcha = useRef<any>(null);

    const onSubmit = () => {
        if (Insulting_message(ref_form.current.message.value)) {
            setError_email(true);
        }
        if (!recaptcha.current.getValue()) {
            setState_captcha(false);
        }
        if (recaptcha.current.getValue() && !Insulting_message(ref_form.current.message.value)) {
            setState_captcha(true);
            ref_form.current.reset();
            recaptcha.current.reset();
            setSend_email(true);
            setActive_validation(false);
            //Send_email(ref_form.current);
        }
    }

    useEffect(() => {
        ref_form.current.message.rows = Amount_lines_input(ref_form.current.message);
    }, [watch("message"), width])

    useEffect(() => {
        if (width >= 1100) {
            ref_form.current.message.rows = 5;
        }
    }, [width]);

    const onChange = () => {
        setState_captcha(recaptcha.current.getValue());
    }

    const get_icon = (value: boolean) => {
        return <ComponentIcon name={value ? 'check' : 'error'} size={22} />
    }

    return (
        <section id="contact" className="px-[10px] sm:px-[30px] lg:pl-[70px] flex flex-col gap-[20px] m-auto max-w-[1200px] pt-[65px] lg:pt-[80px]">
            <ComponentNameSection animate={animate} name="start.txt_3" icon="contact" />
            <form className="grid gap-[40px] px-[5px] mt-[35px]" action="" method="POST" ref={ref_form} onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-[40px] sm:gap-[10px]'>
                    <div className={`${animate ? 'animate-[presentationLeft_1.1s_ease-in-out]' : 'opacity-0'} transition duration-500 relative grid grid-cols-1 items-center gap-[5px]`}>
                        <ComponentMessageError order={1} type={errors.name?.type} />
                        <input className={`outline-0 shadow-1xl shadow-text-primary max-h-[20px] min-h-[20px] py-[20px] ${active_validation ? 'pr-[35px]' : 'pr-[10px]'} pl-[10px] overflow-auto text-[18px] border-none rounded-sm`} type="text" style={Style_input(active_validation, errors.name?.type)} placeholder={t('contact.inputs.j_1')} {...register('name', {
                            required: true,
                            minLength: 3,
                            maxLength: 15,
                            pattern: /^[A-Za-z]+$/i
                        })}
                            onInput={() => {
                                const maxLength = 15;
                                if (ref_form.current.name.value.length > maxLength + 1) {
                                    ref_form.current.name.value = ref_form.current.name.value.substring(0, maxLength);
                                }
                            }}
                        />
                        <div className={`${Style_icon(active_validation, errors.name?.type)} `}>
                            {
                                get_icon(errors.name?.type === undefined)
                            }
                        </div>
                    </div>
                    <div className={`${animate ? 'animate-[presentationRight_1.1s_ease-in-out]' : 'opacity-0'} transition duration-500 relative grid grid-cols-1 items-center gap-[5px]`}>
                        <ComponentMessageError order={2} type={errors.last_name?.type} />
                        <input className={`outline-0 shadow-1xl shadow-text-primary max-h-[20px] min-h-[20px] py-[20px] ${active_validation ? 'pr-[35px]' : 'pr-[10px]'} pl-[10px] overflow-auto text-[18px] border-none rounded-sm`} type="text" style={Style_input(active_validation, errors.last_name?.type)} placeholder={t('contact.inputs.j_2')} {...register('last_name', {
                            required: true,
                            minLength: 3,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i
                        })}
                            onInput={() => {
                                const maxLength = 20;
                                if (ref_form.current.last_name.value.length > maxLength + 1) {
                                    ref_form.current.last_name.value = ref_form.current.last_name.value.substring(0, maxLength);
                                }
                            }}
                        />
                        <div className={`${Style_icon(active_validation, errors.last_name?.type)} `}>
                            {
                                get_icon(errors.last_name?.type === undefined)
                            }
                        </div>
                    </div>
                </div>
                <div className={`${animate ? 'animate-[presentationLeft_1.3s_ease-in-out]' : 'opacity-0'} transition duration-500 relative grid grid-cols-1 items-center gap-[5px]`}>
                    <ComponentMessageError order={3} type={errors.email?.type} />
                    <input className={`outline-0 shadow-1xl shadow-text-primary max-h-[20px] min-h-[20px] py-[20px] ${active_validation ? 'pr-[35px]' : 'pr-[10px]'} pl-[10px] overflow-auto text-[18px] border-none rounded-sm`} type="email" style={Style_input(active_validation, errors.email?.type)} placeholder={t('contact.inputs.j_3')} {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9]+[\w\.-]*@[a-zA-Z0-9]+(\.[a-zA-Z]+)+$/i
                    })} />
                    <div className={`${Style_icon(active_validation, errors.email?.type)} `}>
                        {
                            get_icon(errors.email?.type === undefined)
                        }
                    </div>
                </div>
                <div className={`${animate ? 'animate-[presentationRight_1.4s_ease-in-out]' : 'opacity-0'} transition duration-500 relative grid grid-cols-1 items-center gap-[5px]`}>
                    <ComponentMessageError order={4} type={errors.message?.type} />
                    <textarea rows={2} className={`outline-0 shadow-1xl overflow-hidden shadow-text-primary resize-none py-[10px] ${active_validation ? 'pr-[35px]' : 'pr-[10px]'} pl-[10px] text-[19.5px] rounded-sm`} style={Style_input(active_validation, errors.message?.type)} placeholder={t('contact.inputs.j_4')} {...register('message', {
                        required: true,
                        minLength: 10,
                        maxLength: 500,
                        pattern: /^[A-Za-z0-9$()+\-*/%=?¿!¡,.:;@" "]+$/i
                    })}
                        onInput={() => {
                            const maxLength = 500;
                            if (ref_form.current.message.value.length > maxLength + 1) {
                                ref_form.current.message.value = ref_form.current.message.value.substring(0, maxLength);
                            }
                        }}
                    />
                    <div className={`${Style_icon(active_validation, errors.message?.type)} top-[10px] pb-5 `}>
                        {
                            get_icon(errors.message?.type === undefined)
                        }
                    </div>
                </div>
                <aside className={`${animate ? 'animate-[presentationBottom_1.5s_ease-in-out]' : 'opacity-0'} transition duration-500 overflow-hidden overflow-auto py-0`}>
                    <ComponentRecaptcha ref={recaptcha} lenguaje={lenguaje} onChange={onChange} state_captcha={state_captcha} />
                </aside>
                <button className={`${animate ? 'animate-[presentationBottom_1.5s_ease-in-out]' : 'opacity-0'} outline-none group hover:bg-bg-primary flex justify-center items-center transition duration-700 mx-auto mt-[-10px] px-[20px] w-full py-[5px] gap-x-3 rounded-sm bg-text-secondary border-[0.1px] border-text-secondary`} type="submit" onClick={() => setActive_validation(true)}>
                    <ComponentIcon name="send" size={16} description_class="group-hover:rotate-45 group-hover:text-text-secondary text-bg-primary" />
                    <span className='group-hover:text-text-secondary text-bg-primary text-[18px] font-bold'>
                        {t('menu.i_6')}
                    </span>
                </button>
                <ComponentMessageWarning open={error_email} setOpen={setError_email}/>
                <ComponentMessageConfirmation open={send_email} setOpen={setSend_email} />
            </form>
        </section>
    )
}