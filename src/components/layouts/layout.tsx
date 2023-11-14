import { ReactNode } from "react"

import ComponentNameSection from "../partials/name_section"

import { Media_query } from "@/logic/page/media_query";

type Props = {
    id: string,
    animate: boolean,
    padding?: string,
    children: ReactNode
}

export default function ComponentLayout(props: Props) {
    const { id, children, animate, padding = "" } = props;

    const isWidth = Media_query("1300");

    return (
        <section id={id} className={`${padding} ${isWidth ? 'px-[10px] sm:px-[22px]' : 'pl-[10px] sm:pl-[22px]'} lg:pl-[80px] flex flex-col gap-[20px] m-auto max-w-[1275px] pt-[65px] lg:pt-[80px]`}>
            <ComponentNameSection animate={animate} name={`${id}.title`} icon={id} />
            {children}
        </section>
    )
}