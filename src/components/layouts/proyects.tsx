import { Link } from "react-scroll";
import { Fragment, useState } from "react";

import ComponentIcon from '../partials/icon';
import ComponentItem from "../partials/proyects/item";
import ComponentLayout from "./layout";

import { Use_translation } from "@/i18n/logic/use_translation";
import { Media_query } from "@/logic/page/media_query";

type Props = {
    animate: boolean
}

export default function ComponentProyects(props: Props) {
    const { animate } = props;

    const t = Use_translation(1);

    const [view_datails, setView_datails] = useState<boolean>(true);

    const isWidth = Media_query("800");

    return (
        <ComponentLayout {...props} id="proyects" children={
            <Fragment>
                <article className="mt-3 mb-[20px] gap-8 flex flex-col transition duration-500">
                    <ComponentItem animate={animate} number={1} image="Aplicacion YouTube" links={{
                        git: "a",
                        linkedin: "b"
                    }} />
                    {
                        (view_datails && !isWidth) &&
                        <Fragment>
                            <span className={`${animate ? 'animate-[presentationBottom_1s_ease-in-out]' : 'opacity-0'} w-full h-[0.1px] bg-secondary opacity-50`}></span>
                            <ComponentItem animate={animate} number={2} image="Aplicacion YouTube" links={{
                                git: "aa",
                                linkedin: "bb"
                            }} />
                        </Fragment>
                    }
                    {
                        !view_datails &&
                        <Fragment>
                            <span className={`${animate ? 'animate-[presentationBottom_1s_ease-in-out]' : 'opacity-0'} w-full h-[0.1px] bg-secondary opacity-50`}></span>
                            <ComponentItem animate={animate} number={2} image="Aplicacion YouTube" links={{
                                git: "aa",
                                linkedin: "bb"
                            }} />
                            <span className={`${animate ? 'animate-[presentationBottom_1s_ease-in-out]' : 'opacity-0'} w-full h-[0.1px] bg-secondary opacity-50`}></span>
                            <ComponentItem animate={animate} number={3} image="Aplicacion YouTube" links={{
                                git: "a",
                                linkedin: "b"
                            }} />
                            <span className={`${animate ? 'animate-[presentationBottom_1s_ease-in-out]' : 'opacity-0'} w-full h-[0.1px] bg-secondary opacity-50`}></span>
                            <ComponentItem animate={animate} number={4} image="Aplicacion YouTube" links={{
                                git: "aa",
                                linkedin: "bb"
                            }} />
                        </Fragment>
                    }
                </article>
                <Link to={view_datails ? '' : 'proyects'} onClick={() => setView_datails(!view_datails)} spy={true} smooth={true} offset={0} duration={500} rel="noopener noreferrer" className={` ${animate ? 'animate-[presentationLeft_1.2s_ease-in-out]' : 'opacity-0'} bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary group grid place-items-center xl:flex xl:justify-center py-0 xl:py-[5px] w-full xl:w-auto xl:min-w-[158px] xl:max-w-[158px] mx-auto pl-[20px] pr-[18px] gap-x-2 rounded-md cursor-pointer text-tertiary border-[0.1px] border-secondary`}>
                    <span className="text-[18px] font-semibold">
                        {
                            t((view_datails) ? 'proyects.buttons.b_1' : 'proyects.buttons.b_2')
                        }
                    </span>
                    <ComponentIcon name={(view_datails) ? 'see-moore' : 'see-less'} size={22} description_class="text-tertiary" />
                </Link>
            </Fragment>
        } />
    )
}