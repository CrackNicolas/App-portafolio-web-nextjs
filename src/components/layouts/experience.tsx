import { Fragment, useState } from "react";

import ComponentItem from "../partials/experience/item";
import ComponentLayout from "./layout";

import { Use_translation } from "@/i18n/logic/use_translation";

import { type Props } from '@/types/props';

export default function ComponentExperience(props: Props) {
    const { animate } = props;

    const t = Use_translation(1);

    const [view_datails, setView_datails] = useState<boolean>(true);

    return (
        <ComponentLayout {...props} id="experience" padding="pb-[80px]" children={
            <article className="mt-4 grid grid-cols-1 xl:gap-0 gap-y-3 sm:gap-y-5">
                <ComponentItem animate={animate} number={1} />
                <ComponentItem animate={animate} number={2} view_datails={view_datails} setView_datails={setView_datails} />
                {
                    !view_datails &&
                    <Fragment>
                        <ComponentItem animate={animate} number={3} />
                        <ComponentItem animate={animate} number={4} view_datails={view_datails} setView_datails={setView_datails} />
                    </Fragment>
                }
            </article>
        } />
    )
}