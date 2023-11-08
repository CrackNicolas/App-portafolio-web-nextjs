import ComponentIcon from "../icon";

import { Use_translation } from "@/i18n/logic/use_translation";

type Props = {
    name: string,
    number: number
}

export default function ComponentItem(props: Props) {
    const { name, number } = props;

    const t = Use_translation(1);

    return (
        <div className="group transition duration-500 p-[10px] sm:p-[20px] col-span-full lg:col-span-1 rounded-md border-[0.1px] border-text-secondary cursor-pointer hover:shadow-3xl hover:shadow-text-primary">
            <div className="bg-gradient-to-r from-bg-secondary to-blue-500 group-hover:from-blue-500 group-hover:to-bg-secondary w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] grid place-items-center mx-auto mb-[10px] sm:mb-[15px] transition duration-700 text-bg-primary rounded-tr-[50%] rounded-bl-[50%] border-[1px] border-text-secondary">
                <ComponentIcon name={name} size={50} description_class="text-font-primary" />
            </div>
            <h3 className="group-hover:text-text-secondary transition duration-700 text-text-primary font-bold text-[20px] sm:text-[22px] mb-[5px] sm:mb-[15px] tracking-wider">
                {t(`services.item_${number}.txt_1`)}
            </h3>
            <p className="group-hover:opacity-100 transition duration-700 text-[15px] sm:text-[17px] opacity-70 text-text-primary">
                {t(`services.item_${number}.txt_2`)}
            </p>
        </div>
    )
}