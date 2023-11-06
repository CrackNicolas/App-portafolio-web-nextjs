import ComponentItem from "../partials/services/item";
import ComponentNameSection from "../partials/name_section";

type Props = {
    animate: boolean
}

export default function ComponentServices(props: Props) {
    const { animate } = props;

    return (
        <section id="services" className="pb-[80px] px-[10px] sm:px-[30px] lg:pl-[70px] flex flex-col gap-[20px] m-auto max-w-[1200px] pt-[65px] lg:pt-[80px]">
            <ComponentNameSection animate={animate} name="services.title" icon="service" />
            <article className={`${animate ? 'animate-[presentationBottom_1s_ease-in-out]' : 'opacity-0'} transition duration-500 mt-3 grid md:grid-cols-2 lg:grid-cols-3 gap-[15px]`}>
                <ComponentItem name="design" number={1} />
                <ComponentItem name="code" number={2} />
                <ComponentItem name="db" number={3} />
            </article>
        </section>
    )
}