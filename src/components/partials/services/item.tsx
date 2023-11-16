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
        <div className="group transition duration-500 p-[10px] sm:p-[20px] col-span-full lg:col-span-1 rounded-md border-[0.1px] border-primary dark:border-secondary hover:border-transparent bg-tertiary dark:bg-primary cursor-pointer hover:shadow-3xl hover:shadow-primary dark:hover:shadow-secondary">
            <div className="bg-gradient-to-r from-primary to-secondary group-hover:from-secondary group-hover:to-primary w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] grid place-items-center mx-auto mb-[10px] sm:mb-[15px] transition duration-500 text-bg-primary rounded-tr-[50%] rounded-bl-[50%] border-[1px] border-secondary">
                <ComponentIcon name={name} size={50} description_class="text-tertiary" />
            </div>
            <h3 className="group-hover:text-secondary transition duration-500 text-primary dark:text-tertiary font-bold text-[20px] sm:text-[22px] mb-[5px] sm:mb-[15px] tracking-wider">
                {t(`services.item_${number}.txt_1`)}
            </h3>
            <p className="group-hover:opacity-100 transition duration-500 text-[15px] sm:text-[17px] opacity-70 text-primary dark:text-tertiary">
                {t(`services.item_${number}.txt_2`)}
            </p>
        </div>
    )
}