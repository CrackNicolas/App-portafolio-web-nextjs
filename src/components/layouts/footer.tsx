import { Use_translation } from "@/i18n/logic/use_translation";

export default function ComponentFooter() {
    const t = Use_translation(1);

    return (
        <section id="footer" className="px-[10px] sm:px-[30px] lg:pl-[70px] flex flex-col gap-[10px] py-12 m-auto max-w-[1200px] pt-[80px]">
            <div className="animate-bounce w-6 h-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chat-square-quote-fill text-text-secondary" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm7.194 2.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z" />
                </svg>
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