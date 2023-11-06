import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

import { useForm } from 'react-hook-form';
import { useRef, useState } from "react";

import { key_global_emailjs, key_service_emailjs, key_template_emaijs, key_recaptcha } from '../../config/credentials';

import ComponentIcon from '../partials/icon';
import ComponentMessage from '../partials/message';
import ComponentNameSection from '../partials/name_section';

import { Use_translation } from "@/i18n/logic/use_translation";

type Props = {
    animate: boolean,
    lenguaje: boolean
}

export default function ComponentContact(props: Props) {
    const { animate, lenguaje } = props;

    const t = Use_translation(1);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [active_validation, setActive_validation] = useState<boolean>(false)
    const [send_email, setSend_email] = useState<boolean>(false);
    const [state_captcha, setState_captcha] = useState<any>(null);

    const ref_form = useRef<any>(null);
    const recaptcha = useRef<any>(null);

    const onSubmit = () => {
        if (recaptcha.current.getValue()) {
            setState_captcha(true);
            ref_form.current.reset();
            recaptcha.current.reset();
            setSend_email(true);
            setActive_validation(false);

            /*emailjs.sendForm(
                key_service_emailjs,
                key_template_emaijs,
                ref_form.current,
                key_global_emailjs
            ).then(result => console.log(result.text)).catch(error => console.log(error))
            */
        } else {
            setState_captcha(false);
        }
    }

    const onChange = () => {
        setState_captcha(recaptcha.current.getValue() ? true : false);
    }

    const get_icon = (value: boolean) => {
        return <ComponentIcon name={value ? 'check' : 'error'} size={22} />
    }

    const style_input = (input: any) => {
        if (active_validation) {
            return {
                boxShadow: (input == "required" || input == "maxLength" || input == "pattern") ? '0 0 4px 0.1px red' : '0 0 4px 0.1px var(--text-primary)'
            }
        }
    }

    const style_icon = (input: any) => {
        if (active_validation) {
            return `absolute right-0 pb-0 px-[6px] ${(input == "required" || input == "maxLength" || input == "pattern") ? 'text-red-500' : 'text-text-secondary'}`
        }
        return 'hidden';
    }

    return (
        <section id="contact" className="px-[10px] sm:px-[30px] lg:pl-[70px] flex flex-col gap-[20px] m-auto max-w-[1200px] pt-[65px] lg:pt-[80px]">
            <ComponentNameSection animate={animate} name="start.txt_3" icon="contact" />
            <form className="grid gap-[40px] px-[5px] mt-[35px]" action="" method="POST" ref={ref_form} onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-[40px] sm:gap-[10px]'>
                    <div className={`${animate ? 'animate-[presentationLeft_1.1s_ease-in-out]' : 'opacity-0'} transition duration-500 relative grid grid-cols-1 items-center gap-[5px]`}>
                        {errors.name?.type === "required" && <p className="absolute top-[-27px] text-[15px] font-semibold tracking-widest text-red-500">{t("contact.validations.inputs.j_1.text_1")}</p>}
                        {errors.name?.type === "maxLength" && <p className="absolute top-[-27px] text-[15px] font-semibold tracking-widest text-red-500">{t("contact.validations.inputs.j_1.text_2")}</p>}
                        <input className='outline-0 shadow-1xl shadow-text-primary max-h-[20px] min-h-[20px] py-[20px] pr-[35px] pl-[10px] overflow-auto text-[18px] border-none rounded-sm' type="text" style={style_input(errors.name?.type)} placeholder={t('contact.inputs.j_1')} {...register('name', {
                            required: true,
                            maxLength: 10
                        })} />
                        <div className={`${style_icon(errors.name?.type)} `}>
                            {
                                get_icon(errors.name?.type == undefined)
                            }
                        </div>
                    </div>
                    <div className={`${animate ? 'animate-[presentationRight_1.1s_ease-in-out]' : 'opacity-0'} transition duration-500 relative grid grid-cols-1 items-center gap-[5px]`}>
                        {errors.last_name?.type === "required" && <p className="absolute top-[-27px] text-[15px] font-semibold tracking-widest text-red-500">{t("contact.validations.inputs.j_2.text_1")}</p>}
                        {errors.last_name?.type === "maxLength" && <p className="absolute top-[-27px] text-[15px] font-semibold tracking-widest text-red-500">{t("contact.validations.inputs.j_2.text_2")}</p>}
                        <input className='outline-0 shadow-1xl shadow-text-primary max-h-[20px] min-h-[20px] py-[20px] pr-[35px] pl-[10px] overflow-auto text-[18px] border-none rounded-sm' type="text" style={style_input(errors.last_name?.type)} placeholder={t('contact.inputs.j_2')} {...register('last_name', {
                            required: true,
                            maxLength: 10
                        })} />
                        <div className={`${style_icon(errors.last_name?.type)} `}>
                            {
                                get_icon(errors.last_name?.type == undefined)
                            }
                        </div>
                    </div>
                </div>
                <div className={`${animate ? 'animate-[presentationLeft_1.3s_ease-in-out]' : 'opacity-0'} transition duration-500 relative grid grid-cols-1 items-center gap-[5px]`}>
                    {errors.email?.type === "required" && <p className="absolute top-[-27px] text-[15px] font-semibold tracking-widest text-red-500">{t("contact.validations.inputs.j_3.text_1")}</p>}
                    {errors.email?.type === "pattern" && <p className="absolute top-[-27px] text-[15px] font-semibold tracking-widest text-red-500">{t("contact.validations.inputs.j_3.text_2")}</p>}
                    <input className='outline-0 shadow-1xl shadow-text-primary max-h-[20px] min-h-[20px] py-[20px] pr-[35px] pl-[10px] overflow-auto text-[18px] border-none rounded-sm' type="email" style={style_input(errors.email?.type)} placeholder={t('contact.inputs.j_3')} {...register('email', {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                    })} />
                    <div className={`${style_icon(errors.email?.type)} `}>
                        {
                            get_icon(errors.email?.type == undefined)
                        }
                    </div>
                </div>
                <div className={`${animate ? 'animate-[presentationRight_1.4s_ease-in-out]' : 'opacity-0'} transition duration-500 relative grid grid-cols-1 items-center gap-[5px]`}>
                    {errors.message?.type === "required" && <p className="absolute top-[-27px] text-[15px] font-semibold tracking-widest text-red-500">{t("contact.validations.inputs.j_4.text_1")}</p>}
                    {errors.message?.type === "maxLength" && <p className="absolute top-[-27px] text-[15px] font-semibold tracking-widest text-red-500">{t("contact.validations.inputs.j_4.text_2")}</p>}
                    <textarea className='outline-0 shadow-1xl shadow-text-primary min-h-[50px] max-h-[100px] resize-none py-[10px] pr-[35px] pl-[10px] text-[19.5px]' style={style_input(errors.message?.type)} placeholder={t('contact.inputs.j_4')} {...register('message', {
                        required: true
                    })} />
                    <div className={`${style_icon(errors.message?.type)} top-[10px] pb-5 `}>
                        {
                            get_icon(errors.message?.type == undefined)
                        }
                    </div>
                </div>
                <aside className={`${animate ? 'animate-[presentationBottom_1.5s_ease-in-out]' : 'opacity-0'} transition duration-500 overflow-hidden overflow-auto py-0`}>
                    <div className="grid place-items-center">
                        <ReCAPTCHA
                            ref={recaptcha}
                            hl={lenguaje ? 'es' : 'en'}
                            sitekey={key_recaptcha}
                            onChange={onChange}
                        />
                        {state_captcha === false && <p className='text-[15px] font-semibold tracking-widest text-red-500'>{t("contact.validations.recaptcha.title")}</p>}
                    </div>
                </aside>
                <button className={`${animate ? 'animate-[presentationBottom_1.5s_ease-in-out]' : 'opacity-0'} outline-none group hover:bg-bg-primary flex justify-center items-center transition duration-700 mx-auto mt-[-10px] px-[20px] w-full py-[5px] gap-x-3 rounded-sm bg-text-secondary border-[0.1px] border-text-secondary`} type="submit" onClick={() => setActive_validation(true)}>
                    <ComponentIcon name="send" size={16} description_class="group-hover:rotate-45 group-hover:text-text-secondary text-bg-primary" />
                    <span className='group-hover:text-text-secondary text-bg-primary text-[18px] font-bold'>
                        {t('menu.i_6')}
                    </span>
                </button>
                <ComponentMessage open={send_email} setOpen={setSend_email} />
            </form>
        </section>
    )
}