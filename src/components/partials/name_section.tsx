import Use_translation from "@/context/translation/use";

import ComponentIcon from "./icon";

type Props = {
    name: string,
    icon?: string
}

export default function ComponentNameSection(props: Props) {
    const { name, icon = name.split(".")[0] } = props;

    const { translate } = Use_translation();

    return (
        <h2 className={`relative flex items-center justify-between pt-[50px] pb-[5px] border-b-[1px] border-secondary transition duration-500`}>
            <span className={`pr-6 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary dark:from-secondary dark:via-tertiary font-bold text-[20px] tracking-wider text-secondary`}>
                {translate(name)}
            </span>
            <ComponentIcon name={icon} size={24} description_class={` hover:translate-y-[-3px] transition duration-500 text-secondary dark:text-tertiary`} />
        </h2>
    )
}