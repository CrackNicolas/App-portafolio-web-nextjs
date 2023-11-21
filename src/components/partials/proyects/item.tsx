import Link from "next/link";

import ComponentIcon from "../icon";
import ComponentImage from "../image";
import ComponentTechnologies from "./technologies";

import { Use_translation } from "@/i18n/logic/use_translation";

type Props = {
    animate: boolean,
    number: number,
    image: string,
    links: {
        git: string,
        linkedin: string
    }
}

export default function ComponentItem(props: Props) {
    const { animate, number, image, links } = props;

    const t = Use_translation(1);

    const logo = image.split(' ')[image.split(' ').length - 1]

    return (
        <div className={`${animate ? 'animate-[presentationBottom_1s_ease-in-out]' : 'opacity-0'}  group grid grid-cols-1 mg:grid-cols-2 gap-3 lg:gap-5`}>
            <div className={`relative ${(number % 2 !== 0) ? 'order-1' : "order-1 mg:order-2"} flex items-center`}>
                <ComponentImage layout="responsive" name={image} alt={`proyects.data.p_${number}.images.main`} />
                <div className="break-before absolute w-full h-full group-hover:bg-none bg-gradient-to-tr from-primary dark:from-secondary cursor-pointer"></div>
            </div>
            <div className={`group relative ${(number % 2 !== 0) ? 'order-2 items-end' : "order-1 items-start"} flex flex-col gap-1 lg:gap-2 cursor-pointer`}>
                <span className="font-bold text-[20px] lg:text-[25px] text-secondary">
                    {t(`proyects.data.p_${number}.title`)}
                </span>
                <span className="bg-gradient-to-r from-primary to-secondary group-hover:from-secondary group-hover:to-primary text-[13px] lg:text-[15px] shadow-2xl shadow-primary group-hover:shadow-none transition duration-500 cursor-pointer text-tertiary bg-secondary rounded-sm px-3 py-2">
                    {t(`proyects.data.p_${number}.description`)}
                </span>
                <ComponentTechnologies number={number} />
                <div className="absolute px-[3px] bottom-0 w-full flex justify-between items-center">
                    <ComponentImage name={logo} alt={`proyects.data.p_${number}.images.logo`} description_class={`${(number % 2 !== 0) ? 'order-1' : "order-3"} w-[25px] h-[25px]`} />
                    <span className="invisible group-hover:visible w-[250px] h-[0.5px] order-2 bg-secondary opacity-40"></span>
                    <div className={`flex gap-5 ${(number % 2 !== 0) ? 'order-3' : "order-1"} dark:text-tertiary `}>
                        <Link href={links.git} rel="noopener noreferrer" className={`${(number % 2 !== 0) ? 'order-1' : "order-2"} `}>
                            <ComponentIcon name="git" size={20} description_class="hover:text-secondary" />
                        </Link>
                        <Link href={links.linkedin} rel="noopener noreferrer" className={`${(number % 2 !== 0) ? 'order-2' : "order-1"} `}>
                            <ComponentIcon name="link" size={20} description_class="hover:text-secondary" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}