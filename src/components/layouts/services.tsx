import ComponentIcon from "../partials/icon";

import { Use_translation } from "@/i18n/logic/use_translation";

type Props = {
    animate: boolean
}

export default function ComponentServices(props: Props) {
    const { animate } = props;

    const t = Use_translation(1);

    return (
        <section id="services" className="pb-[80px] px-[10px] sm:px-[30px] lg:pl-[70px] flex flex-col gap-[20px] m-auto max-w-[1200px] pt-[65px] lg:pt-[80px]">
            <h2 className="flex items-center justify-between py-[5px] border-b-[1px] border-text-secondary">
                <span className={`${animate && 'animate-[presentationLeft_0.9s_ease-in-out]'} font-bold text-[20px] tracking-wider text-text-secondary`}>
                    {t('servicios.title')}
                </span>
                <ComponentIcon name="service" size={24} description_class={`${animate && 'animate-[presentationRight_0.9s_ease-in-out]'} text-text-secondary`} />
            </h2>
            <article className={`${animate && 'animate-[presentationBottom_1s_ease-in-out]'} mt-3 grid md:grid-cols-2 lg:grid-cols-3 gap-[15px]`}>
                <div className="group transition duration-500 p-[10px] sm:p-[20px] rounded-md border-[0.1px] border-text-secondary cursor-pointer hover:shadow-3xl hover:shadow-text-primary">
                    <div className="group-hover:bg-bg-primary group-hover:text-bg-secondary w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] grid place-items-center bg-text-secondary mx-auto mb-[10px] sm:mb-[15px] transition duration-700 text-bg-primary rounded-tr-[50%] rounded-bl-[50%] border-[1px] border-text-secondary">
                        <ComponentIcon name="design" size={50} description_class="text-font-primary" />
                    </div>
                    <h3 className="group-hover:text-text-secondary transition duration-700 text-text-primary font-bold text-[20px] sm:text-[22px] mb-[5px] sm:mb-[15px] tracking-wider">
                        {t('servicios.item_1.txt_1')}
                    </h3>
                    <p className="group-hover:opacity-100 transition duration-700 text-[15px] sm:text-[17px] opacity-70 text-text-primary">
                        {t('servicios.item_1.txt_2')}
                    </p>
                </div>
                <div className="group transition duration-500 p-[10px] sm:p-[20px] rounded-md border-[0.1px] border-text-secondary cursor-pointer hover:shadow-3xl hover:shadow-text-primary">
                    <div className="group-hover:bg-bg-primary group-hover:text-bg-secondary w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] grid place-items-center bg-text-secondary mx-auto mb-[10px] sm:mb-[15px] transition duration-700 text-bg-primary rounded-tr-[50%] rounded-bl-[50%] border-[1px] border-text-secondary">
                        <ComponentIcon name="code" size={50} description_class="text-font-primary" />
                    </div>
                    <h3 className="group-hover:text-text-secondary transition duration-700 text-text-primary font-bold text-[20px] sm:text-[22px] mb-[5px] sm:mb-[15px] tracking-wider">
                        {t('servicios.item_2.txt_1')}
                    </h3>
                    <p className="group-hover:opacity-100 transition duration-700 text-[15px] sm:text-[17px] opacity-70 text-text-primary">
                        {t('servicios.item_2.txt_2')}
                    </p>
                </div>
                <div className="group transition duration-500 p-[10px] sm:p-[20px] col-span-full lg:col-span-1 rounded-md border-[0.1px] border-text-secondary cursor-pointer hover:shadow-3xl hover:shadow-text-primary">
                    <div className="group-hover:bg-bg-primary group-hover:text-bg-secondary w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] grid place-items-center bg-text-secondary mx-auto mb-[10px] sm:mb-[15px] transition duration-700 text-bg-primary rounded-tr-[50%] rounded-bl-[50%] border-[1px] border-text-secondary">
                        <ComponentIcon name="db" size={50} description_class="text-font-primary" />
                    </div>
                    <h3 className="group-hover:text-text-secondary transition duration-700 text-text-primary font-bold text-[20px] sm:text-[22px] mb-[5px] sm:mb-[15px] tracking-wider">
                        {t('servicios.item_3.txt_1')}
                    </h3>
                    <p className="group-hover:opacity-100 transition duration-700 text-[15px] sm:text-[17px] opacity-70 text-text-primary">
                        {t('servicios.item_3.txt_2')}
                    </p>
                </div>
            </article>
        </section>
    )
}