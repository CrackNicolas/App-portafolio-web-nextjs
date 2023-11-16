import ComponentItem from "../partials/education/item";
import ComponentLayout from "./layout";

type Props = {
    animate: boolean
}

export default function ComponentEducacion(props: Props) {
    const { animate } = props;

    return (
        <ComponentLayout {...props} id="education" padding="pb-[95px]" children={
            <article className={`${animate ? 'animate-[presentationBottom_1s_ease-in-out]' : 'opacity-0'} mt-4 grid grid-cols-1 lg:grid-cols-2 gap-2 ml:gap-5`}>
                <ComponentItem number={1} />
                <ComponentItem number={2} />
                <ComponentItem number={3} />
            </article>
        } />
    )
}