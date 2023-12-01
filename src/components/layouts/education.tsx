import ComponentItem from "../partials/education/item";
import ComponentLayout from "./layout";

export default function ComponentEducacion() {
    return (
        <ComponentLayout id="education" padding="pb-[95px]">
            <article className={` mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 ml:gap-5`}>
                <ComponentItem number={1} />
                <ComponentItem number={2} />
                <ComponentItem number={3} />
            </article>
        </ComponentLayout>
    )
}