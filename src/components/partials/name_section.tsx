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
        <h2 className={`flex items-center justify-between py-[5px] ${animate ? 'animate-opacity' : 'opacity-0'} border-b-[1px] border-text-secondary transition duration-500`}>
            <span className={`gradiente-text ${animate ? 'animate-[presentationLeft_0.9s_ease-in-out]' : 'opacity-0'}  font-bold text-[20px] tracking-wider text-text-secondary transition duration-500`}>
                {t(name)}
            </span>
            <ComponentIcon name={icon} size={24} description_class={`${animate ? 'animate-[presentationRight_0.9s_ease-in-out]' : 'opacity-0'} hover:translate-y-[-3px] transition duration-500 text-text-secondary`} />
        </h2>
    )
}