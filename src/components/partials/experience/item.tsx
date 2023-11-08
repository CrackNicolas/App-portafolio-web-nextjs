import ComponentIcon from "../icon";

import { Use_translation } from "@/i18n/logic/use_translation";

import { Media_query } from "@/logic/page/media_query";

type Props = {
    animate: boolean,
    number: number
}

export default function ComponentItem(props: Props) {
    const { animate, number } = props;

    const isWidth = Media_query('700');

    const t = Use_translation(1);

    return (
        <div className="relative grid xl:grid-cols-5 gap-x-[40px] gap-y-[10px] sm:gap-y-[15px]">
            <span className={`${animate ? 'animate-[presentationLeft_1.2s_ease-in-out]' : 'opacity-0'} transition duration-500 xl:col-span-1 text-end tracking-wider my-auto font-semibold text-[15px]`}>
                {t(`experience.data.item_${number}.title`)}
            </span>
            <div className={`${animate ? 'animate-[presentationBottom_1s_ease-in-out]' : 'opacity-0'} transition duration-500 xl:col-span-4 xl:border-l-[3px] border-text-secondary xl:pt-[20px] xl:pr-[5px] xl:pb-[10px] xl:pl-[50px]`}>
                <div className={`${animate ? 'animate-opacity' : 'opacity-0'} invisible xl:visible break-before-auto cursor-pointer hover:bg-text-secondary hover:text-bg-primary transition duration-700 absolute w-[40px] h-[40px] bg-bg-primary font-semibold text-text-primary rounded-full border-[3px] border-text-secondary inset-y-1 my-auto translate-x-[-71px] text-[22px] grid place-items-center`}>
                    {
                        "0" + number
                    }
                </div>
                <div className={` ${animate ? 'animate-[presentationRight_1.2s_ease-in-out]' : 'opacity-0'} xl:mt-[-10px] group cursor-pointer hover:bg-text-secondary hover:text-bg-primary hover:shadow-none transition duration-700 shadow-3xl shadow-text-primary pt-[5px] pb-[10px] px-[10px] sm:px-[15px] rounded-md leading-7 sm:leading-8 border-[1px] border-text-secondary`}>
                    <div className="flex justify-between items-center">
                        <span className="font-bold">
                            {t(`experience.data.item_${number}.description.title`)}
                        </span>
                        <span className="text-[13.5px]">
                            <i>
                                {
                                    t((isWidth ? `experience.data.item_${number}.description.date_2` : `experience.data.item_${number}.description.date_1`))
                                }
                            </i>
                        </span>
                        <div className="group-hover:animate-bounce w-5 h-5">
                            <ComponentIcon name="isi" description_class="w-[17px] h-[17px] sm:w-[20px] sm:h-[20px] text-blue-500" />
                        </div>
                    </div>
                    {t(`experience.data.item_${number}.description.datails`)}
                </div>
            </div>
        </div>
    )
}