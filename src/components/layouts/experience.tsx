import ComponentItem from "../partials/experience/item";
import ComponentLayout from "./layout";

type Props = {
    animate: boolean
}

export default function ComponentExperience(props: Props) {
    const { animate } = props;

    return (
        <ComponentLayout {...props} id="experience" padding="pb-[80px]" children={
            <article className="mt-4 grid grid-cols-1 xl:gap-0 gap-y-3 sm:gap-y-5">
                <ComponentItem animate={animate} number={1} />
                <ComponentItem animate={animate} number={2} />
                <ComponentItem animate={animate} number={3} />
                <ComponentItem animate={animate} number={4} />
            </article>
        } />
    )
}