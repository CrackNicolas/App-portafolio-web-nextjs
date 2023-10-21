import ComponentIcon from "../partials/icon";

import { Use_translation } from "@/i18n/logic/use_translation";

import { Media_query } from "@/logic/media_query";

type Props = {
    animate: boolean
}

export default function ComponentExperience(props: Props) {
    const { animate } = props;

    const isWidth = Media_query('700');

    const t = Use_translation(1);

    return (
        <section id="experience" className="pb-[80px] px-[10px] sm:px-[30px] lg:pl-[70px] flex flex-col gap-[20px] m-auto max-w-[1200px] pt-[65px] lg:pt-[80px]">
            <h2 className="flex items-center justify-between py-[5px] border-b-[1px] border-text-secondary">
                <span className={`${animate && 'animate-[presentationLeft_0.9s_ease-in-out]'} font-bold text-[20px] tracking-wider text-text-secondary`}>
                    {t('experience.title')}
                </span>
                <ComponentIcon name="experience" size={24} description_class={`${animate && 'animate-[presentationRight_0.9s_ease-in-out]'} text-text-secondary`} />
            </h2>
            <article className="mt-4 grid grid-cols-1 xl:gap-0 gap-y-3 sm:gap-y-5">
                <div className="relative grid xl:grid-cols-4 gap-x-[40px] gap-y-[10px] sm:gap-y-[15px]">
                    <span className={`${animate && 'animate-[presentationLeft_1.2s_ease-in-out]'} xl:col-span-1 text-end tracking-wider my-auto font-semibold text-[18px]`}>
                        {t('experience.data.item_1.title')}
                    </span>
                    <div className="xl:col-span-3 xl:border-l-[3px] border-text-secondary xl:pt-[20px] xl:pr-[5px] xl:pb-[10px] xl:pl-[50px]">
                        <div className="invisible xl:visible break-before-auto cursor-pointer hover:bg-text-secondary hover:text-bg-primary transition duration-700 absolute w-[40px] h-[40px] bg-bg-primary font-semibold text-text-primary rounded-full border-[3px] border-text-secondary inset-y-1 my-auto translate-x-[-71px] text-[22px] grid place-items-center">
                            01
                        </div>
                        <div className={`${animate && 'animate-[presentationRight_1.2s_ease-in-out]'} xl:mt-[-10px] group cursor-pointer hover:bg-text-secondary hover:text-bg-primary hover:shadow-none transition duration-700 shadow-3xl shadow-text-primary pt-[5px] pb-[10px] px-[10px] sm:px-[15px] rounded-md leading-7 sm:leading-8 border-[1px] border-text-secondary`}>
                            <div className="flex justify-between items-center">
                                <span className="font-bold">
                                    {t('experience.data.item_1.description.title')}
                                </span>
                                <span className="text-[13.5px]">
                                    <i>
                                        {
                                            t((isWidth ? 'experience.data.item_1.description.date_2' : 'experience.data.item_1.description.date_1'))
                                        }
                                    </i>
                                </span>
                                <div className="group-hover:animate-bounce w-5 h-5">
                                    <ComponentIcon name="isi" description_class="w-[17px] h-[17px] sm:w-[20px] sm:h-[20px] text-blue-500" />
                                </div>
                            </div>
                            {t('experience.data.item_1.description.datails')}
                        </div>
                    </div>
                </div>
                <div className="relative grid xl:grid-cols-4 gap-x-[40px] gap-y-[10px] sm:gap-y-[15px]">
                    <span className={`${animate && 'animate-[presentationLeft_1.2s_ease-in-out]'} xl:col-span-1 tracking-wider my-auto text-end font-semibold text-[18px]`}>
                        {t('experience.data.item_2.title')}
                    </span>
                    <div className="xl:col-span-3 xl:border-l-[3px] border-text-secondary xl:pt-[20px] xl:pr-[5px] xl:pb-[10px] xl:pl-[50px]">
                        <div className="invisible xl:visible break-before-auto cursor-pointer hover:bg-text-secondary hover:text-bg-primary transition duration-700 absolute w-[40px] h-[40px] bg-bg-primary font-semibold text-text-primary rounded-full border-[3px] border-text-secondary inset-y-1 my-auto translate-x-[-71px] text-[22px] grid place-items-center">
                            02
                        </div>
                        <div className={`${animate && 'animate-[presentationRight_1.2s_ease-in-out]'} xl:mt-[-10px] group cursor-pointer hover:bg-text-secondary hover:text-bg-primary hover:shadow-none transition duration-700 shadow-3xl shadow-text-primary pt-[5px] pb-[10px] px-[10px] sm:px-[15px] rounded-md leading-7 sm:leading-8 border-[1px] border-text-secondary`}>
                            <div className="flex justify-between items-center">
                                <span className="font-bold">
                                    {t('experience.data.item_2.description.title')}
                                </span>
                                <span className="text-[13.5px]">
                                    <i>
                                        {
                                            t((isWidth ? 'experience.data.item_2.description.date_2' : 'experience.data.item_2.description.date_1'))
                                        }
                                    </i>
                                </span>
                                <div className="group-hover:animate-bounce w-5 h-5">
                                    <ComponentIcon name="isi" description_class="w-[17px] h-[17px] sm:w-[20px] sm:h-[20px] text-blue-500" />
                                </div>
                            </div>
                            {t('experience.data.item_2.description.datails')}
                        </div>
                    </div>
                </div>
                <div className="relative grid xl:grid-cols-4 gap-x-[40px] gap-y-[10px] sm:gap-y-[15px]">
                    <span className={`${animate && 'animate-[presentationLeft_1.2s_ease-in-out]'} xl:col-span-1 tracking-wider my-auto text-end font-semibold text-[18px]`}>
                        {t('experience.data.item_3.title')}
                    </span>
                    <div className="xl:col-span-3 xl:border-l-[3px] border-text-secondary xl:pt-[20px] xl:pr-[5px] xl:pb-[10px] xl:pl-[50px]">
                        <div className="invisible xl:visible break-before-auto cursor-pointer hover:bg-text-secondary hover:text-bg-primary transition duration-700 absolute w-[40px] h-[40px] bg-bg-primary font-semibold text-text-primary rounded-full border-[3px] border-text-secondary inset-y-1 my-auto translate-x-[-71px] text-[22px] grid place-items-center">
                            03
                        </div>
                        <div className={`${animate && 'animate-[presentationRight_1.2s_ease-in-out]'} xl:mt-[-10px] group cursor-pointer hover:bg-text-secondary hover:text-bg-primary hover:shadow-none transition duration-700 shadow-3xl shadow-text-primary pt-[5px] pb-[10px] px-[10px] sm:px-[15px] rounded-md leading-7 sm:leading-8 border-[1px] border-text-secondary`}>
                            <div className="flex justify-between items-center">
                                <span className="font-bold">
                                    {t('experience.data.item_3.description.title')}
                                </span>
                                <span className="text-[13.5px]">
                                    <i>
                                        {
                                            t((isWidth ? 'experience.data.item_3.description.date_2' : 'experience.data.item_3.description.date_1'))
                                        }
                                    </i>
                                </span>
                                <div className="group-hover:animate-bounce w-5 h-5">
                                    <ComponentIcon name="isi" description_class="w-[17px] h-[17px] sm:w-[20px] sm:h-[20px] text-blue-500" />
                                </div>
                            </div>
                            {t('experience.data.item_3.description.datails')}
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}