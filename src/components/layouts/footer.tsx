import ComponentIcon from "../partials/icon";

import { Use_translation } from "@/i18n/logic/use_translation";

export default function ComponentFooter() {
    const t = Use_translation(1);

    return (
        <section id="contact" className="px-[10px] sm:px-[30px] lg:pl-[70px] flex flex-col gap-[10px] py-12 m-auto max-w-[1200px] pt-[80px]">
            <div className="animate-bounce w-6 h-6 mx-auto">
                <ComponentIcon name="footer" size={24} description_class="bi bi-chat-square-quote-fill text-text-secondary" />
            </div>
            <article className="mx-auto leading-6 flex flex-col">
                <span className="text-[13px] mx-auto text-center text-text-secondary">
                    {t('footer.title')}
                </span>
                <span className="text-[13px] mx-auto w-[180px] text-text-secondary cursor-pointer">beltrannicolasalejo@gmail.com</span>
            </article>
        </section>
    )
}