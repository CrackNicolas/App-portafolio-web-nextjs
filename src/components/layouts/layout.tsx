import { ReactNode } from "react"

import ComponentNameSection from "../partials/name_section"

type Props = {
    id: string,
    animate: boolean,
    padding?: string,
    children: ReactNode
}

export default function ComponentLayout(props: Props) {
    const { id, children, animate, padding = "" } = props;

    return (
        <section id={id} className={`${padding} px-[10px] sm:px-[30px] lg:pl-[70px] flex flex-col gap-[20px] m-auto max-w-[1200px] pt-[65px] lg:pt-[80px]`}>
            <ComponentNameSection animate={animate} name={`${id}.title`} icon={id} />
            {children}
        </section>
    )
}