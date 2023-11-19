import { Fragment } from "react";

import ComponentIcon from "../icon";
import ComponentImage from "../image";

type Props = {
    number: number
}

export default function ComponentTechnologies(props: Props) {
    const { number } = props;

    return (
        <Fragment>
            {
                (number === 1) &&
                <div className="flex mt-1 lg:mt-3 mb-10 mg:mb-3 lg:mb-9 gap-4 items-center">
                    <ComponentIcon name="Next.js" size={30} description_class="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px]" view_box='0 0 180 180' />
                    <ComponentIcon name="React" size={30} description_class="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px] text-blue-500" view_box='-10.5 -9.45 21 18.9' />
                    <ComponentImage name="TypeScript" description_class="w-[18px] h-[18px] lg:w-[28px] lg:h-[28px] hover:translate-y-[-3px]" />
                    <ComponentImage name="JavaScript" description_class="w-[26.2px] h-[26.2px] lg:w-[36.2px] lg:h-[36.2px] hover:translate-y-[-3px]" />
                    <ComponentImage name="CSS" description_class="w-[25.5px] h-[25.5px] lg:w-[35.5px] lg:h-[35.5px] hover:translate-y-[-3px]" />
                    <ComponentImage name="Tailwind" description_class="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] hover:translate-y-[-3px]" />
                    <ComponentImage name="HTML" description_class="w-[25px] h-[25px] lg:w-[35.5px] lg:h-[35.5px] hover:translate-y-[-3px]" />
                </div>
            }
            {
                (number === 2) &&
                <div className="flex mt-1 lg:mt-3 mb-10 mg:mb-3 lg:mb-9 gap-4 items-center">
                    <ComponentIcon name="Next.js" size={30} description_class="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px]" view_box='0 0 180 180' />
                    <ComponentIcon name="React" size={30} description_class="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px] text-blue-500" view_box='-10.5 -9.45 21 18.9' />
                    <ComponentImage name="TypeScript" description_class="w-[18px] h-[18px] lg:w-[28px] lg:h-[28px] hover:translate-y-[-3px]" />
                    <ComponentImage name="JavaScript" description_class="w-[26.2px] h-[26.2px] lg:w-[36.2px] lg:h-[36.2px] hover:translate-y-[-3px]" />
                    <ComponentImage name="CSS" description_class="w-[25.5px] h-[25.5px] lg:w-[35.5px] lg:h-[35.5px] hover:translate-y-[-3px]" />
                    <ComponentImage name="Tailwind" description_class="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] hover:translate-y-[-3px]" />
                </div>
            }
            {
                (number === 3) &&
                <div className="flex mt-1 lg:mt-3 mb-10 mg:mb-3 lg:mb-9 gap-4 items-center">
                    <ComponentIcon name="Next.js" size={30} description_class="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px]" view_box='0 0 180 180' />
                    <ComponentIcon name="React" size={30} description_class="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px] text-blue-500" view_box='-10.5 -9.45 21 18.9' />
                    <ComponentImage name="TypeScript" description_class="w-[18px] h-[18px] lg:w-[28px] lg:h-[28px] hover:translate-y-[-3px]" />
                    <ComponentImage name="JavaScript" description_class="w-[26.2px] h-[26.2px] lg:w-[36.2px] lg:h-[36.2px] hover:translate-y-[-3px]" />
                    <ComponentImage name="CSS" description_class="w-[25.5px] h-[25.5px] lg:w-[35.5px] lg:h-[35.5px] hover:translate-y-[-3px]" />
                    <ComponentImage name="Tailwind" description_class="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] hover:translate-y-[-3px]" />
                    <ComponentImage name="HTML" description_class="w-[25px] h-[25px] lg:w-[35.5px] lg:h-[35.5px] hover:translate-y-[-3px]" />
                </div>
            }
            {
                (number === 4) &&
                <div className="flex mt-1 lg:mt-3 mb-10 mg:mb-3 lg:mb-9 gap-4 items-center">
                    <ComponentIcon name="Next.js" size={30} description_class="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px]" view_box='0 0 180 180' />
                    <ComponentIcon name="React" size={30} description_class="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px] text-blue-500" view_box='-10.5 -9.45 21 18.9' />
                    <ComponentImage name="TypeScript" description_class="w-[18px] h-[18px] lg:w-[28px] lg:h-[28px] hover:translate-y-[-3px]" />
                    <ComponentImage name="JavaScript" description_class="w-[26.2px] h-[26.2px] lg:w-[36.2px] lg:h-[36.2px] hover:translate-y-[-3px]" />
                    <ComponentImage name="CSS" description_class="w-[25.5px] h-[25.5px] lg:w-[35.5px] lg:h-[35.5px] hover:translate-y-[-3px]" />
                    <ComponentImage name="Tailwind" description_class="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] hover:translate-y-[-3px]" />
                </div>
            }
        </Fragment>
    )
}