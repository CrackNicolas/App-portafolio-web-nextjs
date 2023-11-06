import ComponentItem from "../partials/education/item";
import ComponentNameSection from "../partials/name_section";

type Props = {
    animate: boolean
}

export default function ComponentEducacion(props: Props) {
    const { animate } = props;

    return (
        <section id="education" className="pb-[95px] px-[10px] sm:px-[30px] lg:pl-[70px] flex flex-col gap-[20px] m-auto max-w-[1200px] pt-[65px] lg:pt-[80px]">
            <ComponentNameSection animate={animate} name="education.title" />
            <article className={`${animate ? 'animate-[presentationBottom_1s_ease-in-out]' : 'opacity-0'} transition duration-500 mt-4 grid grid-cols-1 lg:grid-cols-2 gap-2 ml:gap-5`}>
                <ComponentItem number={1} />
                <ComponentItem number={2} />
                <ComponentItem number={3} />
            </article>
        </section>
    )
}