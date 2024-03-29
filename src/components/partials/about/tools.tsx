import ComponentIcon from "../icon";
import ComponentImage from "../image";

type Props = {
    type: string,
    name: string,
    size: number,
    view_box?: string,
    color?: string,
    description_image?: string,
    description_text?: string
}

export default function ComponentTools(props: Props) {
    const { type, name, size, view_box, color, description_image, description_text } = props;

    return (
        <div className="cursor-default w-full max-h-[60px] min-h-[60px] w-full grid place-items-center flex-col transition duration-700">
            {
                (type === "icon") &&
                <ComponentIcon name={name.toLocaleLowerCase()} size={size} description_class={` ${(name === "Next.js") && 'border-[0.1px] rounded-full dark:border-secondary'} hover:translate-y-[-3px] ${color}`} view_box={view_box} />
            }
            {
                (type === "image") &&
                <ComponentImage name={name} size={size} description_class={`hover:translate-y-[-3px] ${description_image}`} />
            }
            <span className={`hover:text-secondary hover:font-semibold font-normal cursor-pointer text-primary dark:text-tertiary text-[14px] ${description_text} `}>
                {name}
            </span>
        </div>
    )
}