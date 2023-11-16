import ComponentIcon from "./icon";

import { Use_translation } from "@/i18n/logic/use_translation";

type Props = {
    animate: boolean,
    name: string,
    icon?: string
}

export default function ComponentNameSection(props: Props) {
    const { animate, name, icon = name.split(".")[0] } = props;

    const t = Use_translation(1);

    return (
        <h2 className={`flex items-center justify-between py-[5px] ${animate ? 'animate-opacity' : 'opacity-0'} border-b-[1px] border-secondary transition duration-500`}>
            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary dark:from-tertiary dark:to-tertiary dark:via-secondary ${animate ? 'animate-[presentationLeft_0.9s_ease-in-out]' : 'opacity-0'} font-bold text-[20px] tracking-wider text-secondary`}>
                {t(name)}
            </span>
            <ComponentIcon name={icon + "-fill"} size={24} description_class={`${animate ? 'animate-[presentationRight_0.9s_ease-in-out]' : 'opacity-0'} hover:translate-y-[-3px] transition duration-500 text-secondary`} />
        </h2>
    )
}