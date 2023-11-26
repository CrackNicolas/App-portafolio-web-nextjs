import ComponentItem from "../partials/education/item";
import ComponentLayout from "./layout";

import { Props_section } from '@/types/props';

export default function ComponentEducacion({ animate }: Props_section) {
    return (
        <ComponentLayout animate={animate} id="education" padding="pb-[95px]" children={
            <article className={`${animate ? 'animate-[presentationBottom_1s_ease-in-out]' : 'opacity-0'} mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 ml:gap-5`}>
                <ComponentItem number={1} />
                <ComponentItem number={2} />
                <ComponentItem number={3} />
            </article>
        } />
    )
}