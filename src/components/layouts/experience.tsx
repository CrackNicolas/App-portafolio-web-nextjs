import ComponentItem from "../partials/experience/item";
import ComponentNameSection from "../partials/name_section";

type Props = {
    animate: boolean
}

export default function ComponentExperience(props: Props) {
    const { animate } = props;

    return (
        <section id="experience" className="pb-[80px] px-[10px] sm:px-[30px] lg:pl-[70px] flex flex-col gap-[20px] m-auto max-w-[1200px] pt-[65px] lg:pt-[80px]">
            <ComponentNameSection animate={animate} name="experience.title" />
            <article className="mt-4 grid grid-cols-1 xl:gap-0 gap-y-3 sm:gap-y-5">
                <ComponentItem animate={animate} number={1} />
                <ComponentItem animate={animate} number={2} />
                <ComponentItem animate={animate} number={3} />
                <ComponentItem animate={animate} number={4} />
            </article>
        </section>
    )
}