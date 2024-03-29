import { Link } from "react-scroll";
import { Fragment, useState } from "react";

import Use_translation from "@/context/translation/use";

import ComponentIcon from '../partials/icon';
import ComponentItem from "../partials/proyects/item";
import ComponentLayout from "./layout";

export default function ComponentProyects() {
    const { translate } = Use_translation();

    const [view_datails, setView_datails] = useState<boolean>(true);

    return (
        <ComponentLayout id="proyects">
            <article className="mt-3 mb-[20px] gap-8 flex flex-col transition duration-500">
                <ComponentItem number={1} image="Aplicacion YouTube" links={{
                    git: "a",
                    linkedin: "b"
                }} />
                <span className={` w-full h-[0.1px] bg-secondary opacity-50`}></span>
                <ComponentItem number={2} image="Aplicacion YouTube" links={{
                    git: "aa",
                    linkedin: "bb"
                }} />
                {
                    !view_datails &&
                    <Fragment>
                        <span className={` w-full h-[0.1px] bg-secondary opacity-50`}></span>
                        <ComponentItem number={3} image="Aplicacion YouTube" links={{
                            git: "a",
                            linkedin: "b"
                        }} />
                        <span className={` w-full h-[0.1px] bg-secondary opacity-50`}></span>
                        <ComponentItem number={4} image="Aplicacion YouTube" links={{
                            git: "aa",
                            linkedin: "bb"
                        }} />
                    </Fragment>
                }
            </article>
            <Link to={view_datails ? '' : 'proyects'} href="#proyects" onClick={() => setView_datails(!view_datails)} spy={true} smooth={true} offset={0} duration={500} rel="noopener noreferrer" className={` bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary group grid place-items-center xl:flex xl:justify-center py-0 xl:py-[5px] w-full xl:w-auto xl:min-w-[158px] xl:max-w-[158px] mx-auto pl-[20px] pr-[18px] gap-x-2 rounded-md cursor-pointer text-tertiary border-[0.1px] border-secondary`}>
                <span className="text-[18px] font-semibold">
                    {
                        translate((view_datails) ? 'proyects.buttons.b_1' : 'proyects.buttons.b_2')
                    }
                </span>
                <ComponentIcon name={(view_datails) ? 'see-moore' : 'see-less'} size={22} description_class="text-tertiary" />
            </Link>
        </ComponentLayout>
    )
}