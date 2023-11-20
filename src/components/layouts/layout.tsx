import { Fragment, ReactNode } from "react"

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
        <section id={id} className={`${padding} ${isWidth ? 'px-[10px] sm:px-[22px]' : 'pl-[10px] sm:pl-[22px]'} lg:pl-[80px] flex flex-col gap-[20px] m-auto max-w-[1275px] pt-0`}>
            <ComponentNameSection animate={animate} name={`${id}.title`} icon={id} />
            {children}
            {
                view_line(id) &&
                <article className={` ${(id !== "about") ? 'mt-[50px]' : 'mt-[20px]'} flex flex-col gap-y-6`}>
                    <span className={` ${animate ? 'animate-[presentationLeft_0.9s_ease-in-out]' : 'opacity-0'}  bg-gradient-to-r from-primary to-secondary via-red-secondary w-[20px] h-[3px] bg-secondary transition duration-600 rounded-full`}></span>
                    <span className={` ${animate ? 'animate-[presentationLeft_1.1s_ease-in-out]' : 'opacity-0'}  bg-gradient-to-r from-primary to-secondary via-red-secondary w-[50px] h-[3px] bg-secondary transition duration-600 rounded-full`}></span>
                    {
                        (id !== "about") &&
                        <Fragment>
                            <span className={` ${animate ? 'animate-[presentationLeft_1.3s_ease-in-out]' : 'opacity-0'}  bg-gradient-to-r from-primary to-secondary via-red-secondary w-[100px] h-[3px] bg-secondary transition duration-600 rounded-full`}></span>
                            <span className={` ${animate ? 'animate-[presentationLeft_1.5s_ease-in-out]' : 'opacity-0'}  bg-gradient-to-r from-primary to-secondary via-red-secondary w-[150px] h-[3px] bg-secondary transition duration-600 rounded-full`}></span>
                            {
                                (id !== "services" && id !== "about") &&
                                <Fragment>
                                    <span className={` ${animate ? 'animate-[presentationLeft_1.7s_ease-in-out]' : 'opacity-0'}  bg-gradient-to-r from-primary to-secondary via-red-secondary w-[200px] h-[3px] bg-secondary transition duration-600 rounded-full`}></span>
                                    <span className={` ${animate ? 'animate-[presentationLeft_1.9s_ease-in-out]' : 'opacity-0'}  bg-gradient-to-r from-primary to-secondary via-red-secondary w-[250px] h-[3px] bg-secondary transition duration-600 rounded-full`}></span>
                                </Fragment>
                            }
                        </Fragment>
                    }
                </article>
            }
        </section>
    )
}