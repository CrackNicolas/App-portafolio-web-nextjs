import { Link } from "react-scroll";

import ComponentIcon from "../icon";

import { Use_translation } from "@/i18n/logic/use_translation";
import { Media_query } from "@/logic/page/media_query";

type Props = {
    name: string,
    size?: number,
    number: number,
    icon: string
}

export default function ComponentItem(props: Props) {
    const { name, size = 16, number, icon } = props;

    const t = Use_translation(1);

    const isWidth = Media_query('1024');

    return (
        <Link to={name} spy={true} smooth={true} offset={0} duration={500} rel="noopener noreferrer" className={`group ${(number === 2 || number === 3) && 'ml-[-2px] sm:ml-0'} h-[35px] grid place-items-center cursor-pointer ${isWidth && 'sm:min-w-[47px] sm:max-w-[47px]'}`}>
            <div className="grid place-items-center">
                <ComponentIcon name={icon} size={size} description_class={`${(number === 7) && 'w-[14px] h-[14px] sm:w-auto h-auto'} text-text-secondary`} />
            </div>
            <span className={` ${(icon.includes("fill")) && 'text-text-secondary'} hidden group-hover:text-text-secondary sm:grid place-items-center font-semibold rounded-sm transition duration-700 w-full h-[13px] text-[10.2px]`}>
                {
                    t(`menu.i_${number}`)
                }
            </span>
        </Link>
    )
}