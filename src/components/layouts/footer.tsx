import { useRef, useState } from "react";

import ComponentIcon from "../partials/icon";
import ComponentMessageCopyText from "../partials/messages/alerts/copy_text";

import { Use_translation } from "@/i18n/logic/use_translation";

type Props = {
    animate: boolean
}

export default function ComponentFooter(props: Props) {
    const { animate } = props;

    const t = Use_translation(1);

    const [visible, setVisible] = useState<boolean>(false);

    const ref_text = useRef<any>(null);

    const copyToClipboard = () => {
        if (ref_text.current) {
            const copied_text = ref_text.current.innerText;
            navigator.clipboard.writeText(copied_text).then(() => {
                setVisible(true);
                setTimeout(() => {
                    setVisible(false);
                }, 1500);
            })
        }
    }

    return (
        <section id="contact" className={`px-[10px] sm:px-[30px] lg:pl-[70px] flex flex-col gap-[10px] py-12 m-auto max-w-[1200px] pt-[80px]`}>
            <div className="animate-bounce w-6 h-6 mx-auto">
                <ComponentIcon name="footer" size={24} description_class="bi bi-chat-square-quote-fill text-secondary" />
            </div>
            <article className="mx-auto leading-6 flex flex-col">
                <span className={`${animate ? 'animate-[presentationLeft_1.7s_ease-in-out]' : 'opacity-0'} text-[13px] mx-auto text-center dark:text-tertiary text-secondary`}>
                    {t('footer.title')}
                </span>
                <div className={`${animate ? 'animate-[presentationRight_1.7s_ease-in-out]' : 'opacity-0'} relative flex justify-between mx-auto w-[205px]`}>
                    <span ref={ref_text} className="w-full text-[13px] mx-auto w-[180px] text-secondary dark:text-tertiary" title={t("focus.email")}>
                        beltrannicolasalejo@gmail.com
                    </span>
                    <button onClick={copyToClipboard} className="min-w-[20px] max-w-[20px] outline-none" title={t("focus.copy")}>
                        <ComponentIcon name="copy" size={15} description_class="text-secondary mx-auto" />
                    </button>
                </div>
                <ComponentMessageCopyText open={visible} setOpen={setVisible} />
            </article>
        </section>
    )
}