import { Use_translation } from "@/i18n/logic/use_translation";

type Props = {
    number: number
}

export default function ComponentItem(props: Props) {
    const { number } = props;

    const t = Use_translation(1);

    return (
        <div className="col-span-1 bg-bg-primary hover:bg-text-secondary text-text-primary hover:text-bg-primary flex flex-col items-center rounded-md border-[1px] gap-y-1 border-text-secondary cursor-pointer transition duration-500 p-5">
            <span className="font-bold text-[20px] tracking-wider">
                {t(`education.data.item_${number}.institution`)}
            </span>
            <span className="font-normal opacity-70 ">
                <i>
                    {t(`education.data.item_${number}.date`)}
                </i>
            </span>
            <span className="font-normal ">
                {t(`education.data.item_${number}.title`)}
            </span>
        </div>
    )
}