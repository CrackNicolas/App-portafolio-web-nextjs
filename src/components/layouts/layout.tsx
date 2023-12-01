import { Fragment, ReactNode } from "react"

import ComponentLine from "../partials/line";
import ComponentNameSection from "../partials/name_section"

import { Media_query } from "@/logic/page/media_query";

type Props = {
    id: string,
    padding?: string,
    children: ReactNode
}

export default function ComponentLayout(props: Props) {
    const { id, children, padding = "" } = props;

    const isWidth = Media_query("1300");

    const view_line = (id: string) => {
        switch (id) {
            case 'about':
            case 'education':
            case 'services':
                return true;
            default: return false;
        }
    }

    return (
        <section id={id} className={`${padding} ${isWidth ? 'px-[10px] sm:px-[22px]' : 'pl-[10px] sm:pl-[22px]'} lg:pl-[80px] flex flex-col gap-[20px] m-auto max-w-[1275px] pt-0 mb-16`}>
            <ComponentNameSection name={`${id}.title`} icon={id} />
            {children}
            {
                view_line(id) &&
                <article className="flex flex-col gap-y-6 mt-[25px]">
                    <ComponentLine width="w-[20px]" />
                    <ComponentLine width="w-[50px]" />
                    {
                        (id !== "about") &&
                        <Fragment>
                            <ComponentLine width="w-[100px]" />
                            <ComponentLine width="w-[150px]" />
                            {
                                (id !== "services" && id !== "about") &&
                                <Fragment>
                                    <ComponentLine width="w-[200px]" />
                                    <ComponentLine width="w-[250px]" />
                                </Fragment>
                            }
                        </Fragment>
                    }
                </article>
            }
        </section>
    )
}