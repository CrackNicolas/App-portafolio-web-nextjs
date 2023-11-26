import Use_translation from "@/context/translation/use";

import ComponentIcon from "./icon";

type Props = {
    animate: boolean,
    name: string,
    icon?: string
}

export default function ComponentNameSection(props: Props) {
    const { animate, name, icon = name.split(".")[0] } = props;

    const { translate } = Use_translation();

    return (
        <h2 className={`relative flex items-center justify-between pt-[50px] pb-[5px] ${animate ? 'animate-opacity' : 'opacity-0'} border-b-[1px] border-secondary transition duration-500`}>
            <div className={` ${animate ? 'animate-[presentationTop_2s_ease-in-out]' : 'opacity-0'} z-10 break-before-column absolute min-w-[1px] min-h-[50px] max-w-[1px] max-h-[50px] translate-y-[-42px] inset-x-0 mx-auto bg-secondary`} />
            <div className={` ${animate ? 'animate-[presentationTop_2s_ease-in-out]' : 'opacity-0'} z-20 break-before-column absolute rounded-t-full min-w-[25px] min-h-[20px] max-w-[25px] max-h-[20px] translate-y-[-30px] inset-x-0 mx-auto bg-secondary`} />
            <div className={` ${animate ? 'animate-[presentationTop_2s_ease-in-out]' : 'opacity-0'} z-10 break-before-column absolute rounded-b-full min-w-[11px] min-h-[5px] max-w-[11px] max-h-[5px] translate-y-[-18.1px] inset-x-0 mx-auto dark:bg-tertiary bg-secondary dark:shadow-4xl shadow-secondary dark:shadow-tertiary`} />
            <span className={`pr-6 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary dark:from-secondary dark:via-tertiary ${animate ? 'animate-[presentationLeft_0.9s_ease-in-out]' : 'opacity-0'} font-bold text-[20px] tracking-wider text-secondary`}>
                {translate(name)}
            </span>
            <ComponentIcon name={icon} size={24} description_class={`${animate ? 'animate-[presentationRight_0.9s_ease-in-out]' : 'opacity-0'} hover:translate-y-[-3px] transition duration-500 text-secondary dark:text-tertiary`} />
        </h2>
    )
}