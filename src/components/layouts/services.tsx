import ComponentItem from "../partials/services/item";
import ComponentLayout from "./layout";

import { Props_section } from '@/types/props';

export default function ComponentServices({ animate }: Props_section) {
    return (
        <ComponentLayout animate={animate} id="services" padding="pb-[80px]" children={
            <article className={`${animate ? 'animate-[presentationBottom_1s_ease-in-out]' : 'opacity-0'} mt-3 grid lg:grid-cols-3 md:grid-cols-2 gap-[15px]`}>
                <ComponentItem name="design" number={1} />
                <ComponentItem name="code" number={2} />
                <ComponentItem name="db" number={3} />
            </article>
        } />
    )
}