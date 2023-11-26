import Use_translation from "@/context/translation/use";

type Props = {
    number: number
}

export default function ComponentItem({ number }: Props) {
    const { translate } = Use_translation();

    return (
        <div className={`relative ${(number === 1) && 'col-span-full'} hover:bg-gradient-to-r from-primary to-secondary col-span-1 bg-tertiary dark:bg-primary text-primary dark:text-tertiary hover:text-tertiary flex flex-col items-center rounded-md border-[1px] gap-y-1 hover:border-transparent dark:hover:border-secondary border-secondary cursor-pointer transition duration-500 py-5 px-3 ml:px-5`}>
            <span className="absolute right-[2px] top-0">⭐</span>
            <span className="font-bold text-[15px] ml:text-[20px] tracking-wider">
                {translate(`education.data.item_${number}.institution`)}
            </span>
            <span className="font-normal text-[14px] opacity-70 ">
                <i>
                    {translate(`education.data.item_${number}.date`)}
                </i>
            </span>
            <span className="font-normal text-[15px]">
                {translate(`education.data.item_${number}.title`)}
            </span>
        </div>
    )
}