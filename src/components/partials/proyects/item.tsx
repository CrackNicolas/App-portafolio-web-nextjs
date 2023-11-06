import Link from "next/link";

import ComponentIcon from "../icon";
import ComponentImage from "../image";
import ComponentTechnologies from "./technologies";

import { Use_translation } from "@/i18n/logic/use_translation";

type Props = {
    number: number,
    imagen: string,
    direction: string,
    links: {
        git: string,
        linkedin: string
    }
}

export default function ComponentItem(props: Props) {
    const { number, imagen, direction, links } = props;

    const t = Use_translation(1);

    return (
        <div className="grid grid-cols-1 mg:grid-cols-2 gap-3 lg:gap-5 rounded-sm">
            <div className={`relative ${(direction === "right") ? 'order-1' : "order-2"} flex items-center`}>
                <ComponentImage name={imagen} />
                <div className="break-before absolute w-full h-full hover:bg-none bg-gradient-to-tr from-text-secondary cursor-pointer"></div>
            </div>
            <div className={`group relative ${(direction === "right") ? 'order-2 items-end' : "order-1 items-start"} flex flex-col gap-1 lg:gap-2 cursor-pointer`}>
                <span className="font-bold text-[20px] lg:text-[25px] text-text-secondary">
                    {t(`proyects.data.p_${number}.title`)}
                </span>
                <span className="text-[13px] lg:text-[15px] hover:bg-bg-primary hover:text-text-secondary transition duration-500 cursor-pointer border-[0.1px] border-text-secondary text-bg-primary bg-text-secondary rounded-sm px-3 py-2">
                    {t(`proyects.data.p_${number}.description`)}
                </span>
                <ComponentTechnologies number={number} />
                <div className="absolute px-[3px] bottom-0 w-full flex justify-between items-center">
                    <ComponentImage name={imagen.replace("App ", "")} description_class={`${(direction === "right") ? 'order-1' : "order-3"} w-[25px] h-[25px]`} />
                    <span className="invisible group-hover:visible w-[250px] h-[0.5px] order-2 bg-text-secondary opacity-40"></span>
                    <div className={`flex gap-5 ${(direction === "right") ? 'order-3' : "order-1"}  `}>
                        <Link href={links.git} rel="noopener noreferrer" className={`${(direction === "right") ? 'order-1' : "order-2"} `}>
                            <ComponentIcon name="git" size={20} description_class="hover:text-text-secondary" />
                        </Link>
                        <Link href={links.linkedin} rel="noopener noreferrer" className={`${(direction === "right") ? 'order-2' : "order-1"} `}>
                            <ComponentIcon name="link" size={20} description_class="hover:text-text-secondary" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}