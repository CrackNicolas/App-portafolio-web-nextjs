import ComponentItem from "../partials/services/item";
import ComponentLayout from "./layout";

export default function ComponentServices() {
    return (
        <ComponentLayout id="services" padding="pb-[80px]" children={
            <article className={` mt-3 grid lg:grid-cols-3 md:grid-cols-2 gap-[15px]`}>
                <ComponentItem name="design" number={1} />
                <ComponentItem name="code" number={2} />
                <ComponentItem name="db" number={3} />
            </article>
        } />
    )
}