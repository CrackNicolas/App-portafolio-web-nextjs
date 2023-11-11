import { forwardRef } from "react";

import ReCAPTCHA from "react-google-recaptcha";

import { Use_translation } from "@/i18n/logic/use_translation";

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
                sitekey={`${process.env.KEY_RECAPTCHA}`}
                onChange={onChange}
            />
            {
                (state_captcha === false) &&
                <p className='text-[13.7px] mg:text-[15px] font-normal text-red-500'>
                    {t("contact.validations.recaptcha.title")}
                </p>
            }
        </div>
    )
})
ComponentRecaptcha.displayName = "ComponentRecaptcha";
export default ComponentRecaptcha;