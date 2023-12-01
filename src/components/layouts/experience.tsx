import { Fragment, useState } from "react";

import ComponentItem from "../partials/experience/item";
import ComponentLayout from "./layout";

export default function ComponentExperience() {
    const [view_datails, setView_datails] = useState<boolean>(true);

    return (
        <ComponentLayout id="experience" padding="pb-[80px]">
            <article className="mt-4 grid grid-cols-1 xl:gap-0 gap-y-3 sm:gap-y-5">
                <ComponentItem number={1} />
                <ComponentItem number={2} view_datails={view_datails} setView_datails={setView_datails} />
                {
                    !view_datails &&
                    <Fragment>
                        <ComponentItem number={3} />
                        <ComponentItem number={4} view_datails={view_datails} setView_datails={setView_datails} />
                    </Fragment>
                }
            </article>
        </ComponentLayout>
    )
}