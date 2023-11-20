import ComponentItem from "../partials/services/item";
import ComponentLayout from "./layout";

import { type Props } from '@/types/props';

export default function ComponentServices(props: Props) {
    const { animate } = props;

    return (
        <ComponentLayout {...props} id="services" padding="pb-[80px]" children={
            <article className={`${animate ? 'animate-[presentationBottom_1s_ease-in-out]' : 'opacity-0'} mt-3 grid lg:grid-cols-3 md:grid-cols-2 gap-[15px]`}>
                <ComponentItem name="design" number={1} />
                <ComponentItem name="code" number={2} />
                <ComponentItem name="db" number={3} />
            </article>
        } />
    )
}