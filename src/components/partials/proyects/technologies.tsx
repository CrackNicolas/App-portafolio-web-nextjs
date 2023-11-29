import { Fragment } from "react";

import ComponentIcon from "../icon";
import ComponentImage from "../image";

type Props = {
    number: number
}

export default function ComponentTechnologies({ number }: Props) {
    return (
        <Fragment>
            {
                (number === 1) &&
                <div className="flex mt-1 lg:mt-3 mb-10 mg:mb-3 lg:mb-9 gap-4 items-center">
                    <ComponentIcon name="next.js" size={30} description_class="border-[0.1px] rounded-full dark:border-secondary w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px]" view_box="0 0 180 180" />
                    <ComponentIcon name="react" size={30} description_class="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px] text-blue-500" view_box='-10.5 -9.45 21 18.9' />
                    <ComponentImage name="TypeScript" size={26} description_class="w-[21px] h-[21px] lg:w-[26px] lg:h-[26px] hover:translate-y-[-3px]" />
                    <ComponentImage name="JavaScript" size={33} description_class="w-[28px] h-[28px] lg:w-[33px] lg:h-[33px] hover:translate-y-[-3px]" />
                    <ComponentImage name="CSS" size={32} description_class="w-[27px] h-[27px] lg:w-[32px] lg:h-[32px] hover:translate-y-[-3px]" />
                    <ComponentImage name="Tailwind" size={35} description_class="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] hover:translate-y-[-3px]" />
                    <ComponentImage name="HTML" size={32} description_class="w-[27px] h-[27px] lg:w-[32px] lg:h-[32px] hover:translate-y-[-3px]" />
                </div>
            }
            {
                (number === 2) &&
                <div className="flex mt-1 lg:mt-3 mb-10 mg:mb-3 lg:mb-9 gap-4 items-center">
                    <ComponentIcon name="next.js" size={30} description_class="border-[0.1px] rounded-full dark:border-secondary w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px]" view_box="0 0 180 180" />
                    <ComponentIcon name="react" size={30} description_class="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px] text-blue-500" view_box='-10.5 -9.45 21 18.9' />
                    <ComponentImage name="TypeScript" size={26} description_class="w-[21px] h-[21px] lg:w-[26px] lg:h-[26px] hover:translate-y-[-3px]" />
                    <ComponentImage name="JavaScript" size={33} description_class="w-[28px] h-[28px] lg:w-[33px] lg:h-[33px] hover:translate-y-[-3px]" />
                    <ComponentImage name="CSS" size={32} description_class="w-[27px] h-[27px] lg:w-[32px] lg:h-[32px] hover:translate-y-[-3px]" />
                    <ComponentImage name="Tailwind" size={35} description_class="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] hover:translate-y-[-3px]" />
                    <ComponentImage name="HTML" size={32} description_class="w-[27px] h-[27px] lg:w-[32px] lg:h-[32px] hover:translate-y-[-3px]" />
                </div>
            }
            {
                (number === 3) &&
                <div className="flex mt-1 lg:mt-3 mb-10 mg:mb-3 lg:mb-9 gap-4 items-center">
                    <ComponentIcon name="next.js" size={30} description_class="border-[0.1px] rounded-full dark:border-secondary w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px]" view_box="0 0 180 180" />
                    <ComponentIcon name="react" size={30} description_class="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px] text-blue-500" view_box='-10.5 -9.45 21 18.9' />
                    <ComponentImage name="TypeScript" size={26} description_class="w-[21px] h-[21px] lg:w-[26px] lg:h-[26px] hover:translate-y-[-3px]" />
                    <ComponentImage name="JavaScript" size={33} description_class="w-[28px] h-[28px] lg:w-[33px] lg:h-[33px] hover:translate-y-[-3px]" />
                    <ComponentImage name="CSS" size={32} description_class="w-[27px] h-[27px] lg:w-[32px] lg:h-[32px] hover:translate-y-[-3px]" />
                    <ComponentImage name="Tailwind" size={35} description_class="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] hover:translate-y-[-3px]" />
                    <ComponentImage name="HTML" size={32} description_class="w-[27px] h-[27px] lg:w-[32px] lg:h-[32px] hover:translate-y-[-3px]" />
                </div>
            }
            {
                (number === 4) &&
                <div className="flex mt-1 lg:mt-3 mb-10 mg:mb-3 lg:mb-9 gap-4 items-center">
                    <ComponentIcon name="next.js" size={30} description_class="border-[0.1px] rounded-full dark:border-secondary w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px]" view_box="0 0 180 180" />
                    <ComponentIcon name="react" size={30} description_class="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px] text-blue-500" view_box='-10.5 -9.45 21 18.9' />
                    <ComponentImage name="TypeScript" size={26} description_class="w-[21px] h-[21px] lg:w-[26px] lg:h-[26px] hover:translate-y-[-3px]" />
                    <ComponentImage name="JavaScript" size={33} description_class="w-[28px] h-[28px] lg:w-[33px] lg:h-[33px] hover:translate-y-[-3px]" />
                    <ComponentImage name="CSS" size={32} description_class="w-[27px] h-[27px] lg:w-[32px] lg:h-[32px] hover:translate-y-[-3px]" />
                    <ComponentImage name="Tailwind" size={35} description_class="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] hover:translate-y-[-3px]" />
                    <ComponentImage name="HTML" size={32} description_class="w-[27px] h-[27px] lg:w-[32px] lg:h-[32px] hover:translate-y-[-3px]" />
                </div>
            }
        </Fragment>
    )
}