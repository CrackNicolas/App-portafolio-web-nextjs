import { forwardRef, useContext } from "react";

import ReCAPTCHA from "react-google-recaptcha";

import Context_translation from "@/context/translation/instance";

type Props = {
    state_captcha: boolean,
    onChange: any
}

const ComponentRecaptcha = forwardRef((props: Props, ref: any) => {
    const { state_captcha, onChange } = props;

    const { language, t } = useContext(Context_translation);

    return (
        <div className="grid place-items-center">
            <ReCAPTCHA
                ref={ref}
                hl={language}
                sitekey={`${process.env.KEY_RECAPTCHA}`}
                onChange={onChange}
            />
            {
                (state_captcha === false) &&
                <p className='text-[13.7px] mg:text-[15px] font-normal text-red-500'>
                    {
                        t("contact.validations.recaptcha.title")
                    }
                </p>
            }
        </div>
    )
})
ComponentRecaptcha.displayName = "ComponentRecaptcha";
export default ComponentRecaptcha;