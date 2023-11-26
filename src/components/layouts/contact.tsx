import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from "react";

import Use_translation from '@/context/translation/use';

import ComponentIcon from '../partials/icon';
import ComponentLayout from './layout';
import ComponentRecaptcha from '../partials/recaptcha';
import ComponentMessageWait from '../partials/messages/alerts/wait';
import ComponentMessageError from '../partials/messages/alerts/error';
import ComponentMessageWarning from '../partials/messages/alerts/warning';
import ComponentMessageErrorInput from '../partials/messages/validations/error';
import ComponentMessageConfirmation from '../partials/messages/alerts/confirmation';

import { Send_email } from '@/logic/services/email';
import { Use_window_width } from '@/logic/page/size';
import { Insulting_message } from '@/logic/restrictions/insulting_message';
import { Amount_lines_input } from '@/logic/style/amount_lines_input';

import { Props_section } from '@/types/props';

export default function ComponentContact({animate}: Props_section) {
    const { translate } = Use_translation();

    const width = Use_window_width();

    const { register, formState: { errors }, handleSubmit, watch } = useForm();

    const [active_validation, setActive_validation] = useState<boolean>(false)
    const [send_email, setSend_email] = useState<boolean>(false);
    const [wait_email, setWait_email] = useState<boolean>(false);
    const [warning_email, setWarning_email] = useState<boolean>(false);
    const [error_email, setError_email] = useState<boolean>(false);
    const [state_captcha, setState_captcha] = useState<any>(null);

    const ref_form = useRef<any>(null);
    const recaptcha = useRef<any>(null);

    const onSubmit = () => {
        if (Insulting_message(ref_form.current.message.value)) {
            setWarning_email(true);
        }
        if (!recaptcha.current.getValue()) {
            setState_captcha(false);
        }
        if (recaptcha.current.getValue() && !Insulting_message(ref_form.current.message.value)) {
            post_email();
        }
    }

    const post_email = async () => {
        setWait_email(true);
        try {
            const { data } = await Send_email(ref_form.current);
            setWait_email(false);
            setSend_email(data);
        } catch (error) {
            setError_email(true);
        } finally {
            data_reset();
        }
    }

    const data_reset = () => {
        ref_form.current.reset();
        recaptcha.current.reset();
        setState_captcha(true);
        setActive_validation(false);
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

    const style_icon = (input: any) => {
        if (active_validation) {
            return `absolute right-0 pb-0 px-[6px] ${(input == "required" || input == "minLength" || input == "maxLength" || input == "pattern") ? 'text-red-500' : 'text-secondary'}`
        }
        return 'hidden';
    }

    const style_input = (input: any) => {
        return (input == "required" || input == "minLength" || input == "maxLength" || input == "pattern") ? 'border-red-500' : 'border-secondary'
    }

    const get_icon = (value: boolean) => {
        return <ComponentIcon name={value ? 'check' : 'error'} size={22} />
    }

    return (
        <ComponentLayout id="contact" animate={animate} children={
            <form className="grid gap-[35px] sm:gap-[40px] px-[5px] mt-[35px]" method="POST" ref={ref_form} onSubmit={handleSubmit(onSubmit)}>
                <div className={`${animate ? 'animate-[presentationLeft_1.1s_ease-in-out]' : 'opacity-0'} transition duration-500 relative grid grid-cols-1 items-center gap-[5px]`}>
                    <ComponentMessageErrorInput order={1} type={errors.name?.type} />
                    <input className={`outline-0 border-[1px] bg-tertiary dark:bg-primary text-primary dark:text-tertiary max-h-[20px] min-h-[20px] py-[20px] ${active_validation ? `${style_input(errors.name?.type)} pr-[35px]` : 'border-primary dark:border-secondary pr-[10px]'} pl-[10px] overflow-auto text-[18px] rounded-sm`} type="text" placeholder={translate('contact.inputs.j_1')} {...register('name', {
                        required: true,
                        minLength: 3,
                        maxLength: 15,
                        pattern: /^[A-Za-z]+$/i
                    })}
                        onInput={() => {
                            const maxLength = 15;
                            if (ref_form.current.name.value.length > maxLength) {
                                ref_form.current.name.value = ref_form.current.name.value.substring(0, maxLength);
                            }
                        }}
                    />
                    <div className={`dark:opacity-70 ${style_icon(errors.name?.type)} `}>
                        {
                            get_icon(errors.name?.type === undefined)
                        }
                    </div>
                </div>
                <div className={`${animate ? 'animate-[presentationLeft_1.3s_ease-in-out]' : 'opacity-0'} transition duration-500 relative grid grid-cols-1 items-center gap-[5px]`}>
                    <ComponentMessageErrorInput order={2} type={errors.email?.type} />
                    <input className={`outline-0 border-[1px] bg-tertiary dark:bg-primary text-primary dark:text-tertiary max-h-[20px] min-h-[20px] py-[20px] ${active_validation ? `${style_input(errors.email?.type)} pr-[35px]` : 'border-primary dark:border-secondary pr-[10px]'} pl-[10px] overflow-auto text-[18px] rounded-sm`} type="email" placeholder={translate('contact.inputs.j_3')} {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9]+[\w\.-]*@[a-zA-Z0-9]+(\.[a-zA-Z]+)+$/i
                    })} />
                    <div className={`dark:opacity-70 ${style_icon(errors.email?.type)} `}>
                        {
                            get_icon(errors.email?.type === undefined)
                        }
                    </div>
                </div>
                <div className={`${animate ? 'animate-[presentationRight_1.4s_ease-in-out]' : 'opacity-0'} transition duration-500 relative grid grid-cols-1 items-center gap-[5px]`}>
                    <ComponentMessageErrorInput order={3} type={errors.message?.type} />
                    <textarea rows={2} className={`outline-0 border-[1px] bg-tertiary dark:bg-primary text-primary dark:text-tertiary overflow-hidden resize-none py-[8px] ${active_validation ? `${style_input(errors.message?.type)} pr-[35px]` : 'border-primary dark:border-secondary pr-[10px]'} pl-[10px] text-[19.5px] rounded-sm`} placeholder={translate('contact.inputs.j_4')} {...register('message', {
                        required: true,
                        minLength: 10,
                        maxLength: 500,
                        pattern: /^[A-Za-z0-9$()+\-*/%=?¿!¡,.:;@" "]+$/i
                    })}
                        onInput={() => {
                            const maxLength = 500;
                            if (ref_form.current.message.value.length > maxLength) {
                                ref_form.current.message.value = ref_form.current.message.value.substring(0, maxLength);
                            }
                        }}
                    />
                    <div className={`dark:opacity-70 ${style_icon(errors.message?.type)} top-[10px] pb-5 `}>
                        {
                            get_icon(errors.message?.type === undefined)
                        }
                    </div>
                </div>
                <aside className={`${animate ? 'animate-[presentationBottom_1.5s_ease-in-out]' : 'opacity-0'} transition duration-500 overflow-hidden overflow-auto py-0`}>
                    <ComponentRecaptcha ref={recaptcha} onChange={onChange} state_captcha={state_captcha} />
                </aside>
                <button className={`bg-gradient-to-r dark:from-secondary dark:to-secondary from-primary to-secondary hover:from-secondary hover:to-primary ${animate ? 'animate-[presentationBottom_1.5s_ease-in-out]' : 'opacity-0'} outline-none group flex justify-center items-center transition duration-700 mx-auto mt-[-10px] px-[20px] w-full py-[5px] gap-x-3 rounded-sm`} type="submit" onClick={() => setActive_validation(true)}>
                    <ComponentIcon name="send" size={16} description_class="group-hover:rotate-45 text-tertiary" />
                    <span className='text-tertiary text-[18px] font-bold'>
                        {translate('menu.button_6')}
                    </span>
                </button>
                <ComponentMessageError open={error_email} setOpen={setError_email} />
                <ComponentMessageWait open={wait_email} setOpen={setWait_email} />
                <ComponentMessageWarning open={warning_email} setOpen={setWarning_email} />
                <ComponentMessageConfirmation open={send_email} setOpen={setSend_email} />
            </form>
        } />
    )
}