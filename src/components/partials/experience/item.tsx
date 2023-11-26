import { Link } from "react-scroll";

import Use_translation from "@/context/translation/use";

import ComponentIcon from "../icon";

import { Media_query } from "@/logic/page/media_query";

type Props = {
    animate: boolean,
    number: number,
    view_datails?: boolean,
    setView_datails?: any
}

export default function ComponentItem(props: Props) {
    const { animate, number, view_datails, setView_datails } = props;

    const { translate } = Use_translation();

    const isWidth = Media_query('700');

    return (
        <div className="relative grid xl:grid-cols-5 gap-x-[40px] gap-y-[10px] sm:gap-y-[15px]">
            <span className={`${animate ? 'animate-[presentationLeft_1.2s_ease-in-out]' : 'opacity-0'} text-primary dark:text-tertiary transition duration-500 xl:col-span-1 text-end tracking-wider my-auto font-semibold text-[15px]`}>
                {translate(`experience.data.item_${number}.title`)}
            </span>
            <div className={`${animate ? 'animate-[presentationBottom_1s_ease-in-out]' : 'opacity-0'} transition duration-500 xl:col-span-4 xl:border-l-[3px] border-secondary xl:pt-[20px] xl:pr-[5px] xl:pb-[10px] xl:pl-[50px]`}>
                <div className="break-before-auto absolute rounded-full w-[12px] h-[12px] bg-secondary translate-x-[-57.5px] top-[-5px] "></div>
                <div className="break-before-auto absolute rounded-full w-[12px] h-[12px] bg-secondary translate-x-[-57.5px] bottom-[-7px]"></div>
                <div className={`hover:bg-gradient-to-r from-primary to-secondary ${animate ? 'animate-opacity' : 'opacity-0'} invisible xl:visible break-before-auto cursor-pointer transition duration-700 absolute w-[40px] h-[40px] bg-tertiary dark:bg-primary font-semibold text-primary dark:text-tertiary hover:text-tertiary rounded-full border-[3px] border-secondary inset-y-1 my-auto translate-x-[-71.5px] text-[22px] grid place-items-center`}>
                    {
                        "0" + number
                    }
                </div>
                <div className={`hover:bg-gradient-to-r from-primary to-secondary ${animate ? 'animate-[presentationRight_1.2s_ease-in-out]' : 'opacity-0'} text-primary dark:text-tertiary xl:mt-[-10px] group cursor-pointer hover:bg-secondary hover:text-tertiary hover:shadow-none transition duration-700 shadow-3xl shadow-primary dark:shadow-secondary pt-[5px] pb-[10px] px-[10px] sm:px-[15px] rounded-md leading-6 sm:leading-8 border-[1px] border-secondary`}>
                    <div className="flex justify-between items-center">
                        <span className="font-bold">
                            {translate(`experience.data.item_${number}.description.title`)}
                        </span>
                        <span className="text-[13.5px]">
                            <i>
                                {
                                    translate((isWidth ? `experience.data.item_${number}.description.date_2` : `experience.data.item_${number}.description.date_1`))
                                }
                            </i>
                        </span>
                        <div className="group-hover:animate-bounce w-5 h-5">
                            <ComponentIcon name="isi" description_class="w-[17px] h-[17px] sm:w-[20px] sm:h-[20px] text-blue-500" />
                        </div>
                    </div>
                    <span>
                        {translate(`experience.data.item_${number}.description.datails`)}
                    </span>
                </div>
                {
                    ((number === 2 && view_datails) || (number === 4)) &&
                    <Link to={view_datails ? '' : 'experience'} onClick={() => setView_datails(!view_datails)} spy={true} smooth={true} offset={0} duration={500} rel="noopener noreferrer" className={`${animate ? 'animate-[presentationLeft_1.2s_ease-in-out]' : 'opacity-0'} bg-gradient-to-r from-primary to-secondary hover:from-secondary grid place-items-center xl:flex xl:justify-center hover:to-primary group break-before-auto absolute inset-x-1 xl:inset-auto xl:translate-x-[-134px] translate-y-[30px] xl:translate-y-[10px] pl-[20px] pr-[18px] py-0 xl:py-[5px] xl:min-w-[158px] xl:max-w-[158px] gap-x-2 rounded-md cursor-pointer text-tertiary border-[0.1px] border-secondary`}>
                        <span className="text-[18px] font-semibold">
                            {
                                translate((view_datails) ? 'proyects.buttons.b_1' : 'proyects.buttons.b_2')
                            }
                        </span>
                        <ComponentIcon name={(view_datails) ? 'see-moore' : 'see-less'} size={22} description_class="text-tertiary" />
                    </Link>
                }
            </div>
        </div>
    )
}