import ComponentItem from "../partials/services/item";
import ComponentLayout from "./layout";

type Props = {
    animate: boolean
}

export default function ComponentServices(props: Props) {
    const { animate } = props;

    return (
        <ComponentLayout {...props} id="services" padding="pb-[80px]" children={
            <article className={`${animate ? 'animate-[presentationBottom_1s_ease-in-out]' : 'opacity-0'} transition duration-500 mt-3 grid md:grid-cols-2 lg:grid-cols-3 gap-[15px]`}>
                <ComponentItem name="design" number={1} />
                <ComponentItem name="code" number={2} />
                <ComponentItem name="db" number={3} />
            </article>
        } />
    )
}