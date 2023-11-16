import { Use_translation } from "@/i18n/logic/use_translation";

type Props = {
    number: number
}

export default function ComponentItem(props: Props) {
    const { number } = props;

    const t = Use_translation(1);

    return (
        <div className="relative hover:bg-gradient-to-r from-primary to-secondary col-span-1 bg-tertiary text-primary hover:text-tertiary flex flex-col items-center rounded-md border-[1px] gap-y-1 hover:border-transparent hover:shadow-2xl border-secondary cursor-pointer transition duration-500 py-5 px-3 ml:px-5">
            <span className="absolute right-[2px] top-0">⭐</span>
            <span className="font-bold text-[15px] ml:text-[20px] tracking-wider">
                {t(`education.data.item_${number}.institution`)}
            </span>
            <span className="font-normal text-[14px] opacity-70 ">
                <i>
                    {t(`education.data.item_${number}.date`)}
                </i>
            </span>
            <span className="font-normal text-[15px]">
                {t(`education.data.item_${number}.title`)}
            </span>
        </div>
    )
}