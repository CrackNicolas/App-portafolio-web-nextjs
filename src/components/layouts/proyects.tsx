import { Link } from "react-scroll";
import { useState } from "react";

import ComponentIcon from '../partials/icon';
import ComponentItem from "../partials/proyects/item";
import ComponentNameSection from "../partials/name_section";

import { Use_translation } from "@/i18n/logic/use_translation";

type Props = {
    animate: boolean
}

export default function ComponentProyects(props: Props) {
    const { animate } = props;

    const t = Use_translation(1);

    const [view_datails, setView_datails] = useState<boolean>(true);

    return (
        <section id="proyects" className="px-[10px] sm:px-[30px] lg:pl-[70px] flex flex-col gap-[20px] m-auto max-w-[1200px] pt-[65px] lg:pt-[80px]">
            <ComponentNameSection animate={animate} name="proyects.title" />
            <article className={`${animate ? 'animate-[presentationBottom_1s_ease-in-out]' : 'opacity-0'} ${view_datails && 'h-[400px] ml:h-[470px] sm:h-[520px] md:h-[530px] mg:h-[520px] lg:h-[582px] overflow-hidden'} mt-3 mb-[20px] gap-8 flex flex-col transition duration-500`}>
                <ComponentItem number={1} imagen="App YouTube" direction="right" links={{
                    git: "a",
                    linkedin: "b"
                }} />
                <span className="w-full h-[0.1px] bg-text-secondary opacity-40"></span>
                <ComponentItem number={2} imagen="App YouTube" direction="left" links={{
                    git: "aa",
                    linkedin: "bb"
                }} />
            </article>
            <Link to={view_datails ? '' : 'proyects'} onClick={() => setView_datails(!view_datails)} spy={true} smooth={true} offset={0} duration={500} rel="noopener noreferrer" className={` ${animate ? 'animate-[presentationLeft_1.2s_ease-in-out]' : 'opacity-0'} bg-gradient-to-r from-bg-secondary to-blue-500 hover:from-blue-500 hover:to-bg-secondary group flex items-center mx-auto pl-[20px] pr-[18px] py-[5px] gap-x-2 rounded-sm cursor-pointer text-bg-primary border-[0.1px] border-text-secondary`}>
                <span className="text-[18px] font-semibold">
                    {
                        t((view_datails) ? 'proyects.buttons.b_1' : 'proyects.buttons.b_2')
                    }
                </span>
                <ComponentIcon name={(view_datails) ? 'see-moore' : 'see-less'} size={22} description_class="text-bg-primary" />
            </Link>
        </section>
    )
}