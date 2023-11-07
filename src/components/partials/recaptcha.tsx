import { forwardRef } from "react";

import ReCAPTCHA from "react-google-recaptcha";

import { Use_translation } from "@/i18n/logic/use_translation";

import { key_recaptcha } from '../../config/credentials';

type Props = {
    lenguaje: boolean,
    state_captcha: boolean,
    onChange: any
}

const ComponentRecaptcha = forwardRef((props: Props, ref: any) => {
    const { lenguaje, state_captcha, onChange } = props;

    const t = Use_translation(1);

    return (
        <div className="grid place-items-center">
            <ReCAPTCHA
                ref={ref}
                hl={lenguaje ? 'es' : 'en'}
                sitekey={key_recaptcha}
                onChange={onChange}
            />
            {
                (state_captcha === false) &&
                <p className='text-[15px] font-semibold tracking-widest text-red-500'>
                    {t("contact.validations.recaptcha.title")}
                </p>
            }
        </div>
    )
})
ComponentRecaptcha.displayName = "ComponentRecaptcha";
export default ComponentRecaptcha;