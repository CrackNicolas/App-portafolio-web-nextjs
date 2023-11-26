import Use_translation from "@/context/translation/use";

type Props = {
    order: number,
    type: any
}

export default function ComponentMessageError(props: Props) {
    const { order, type } = props;

    const { translate } = Use_translation();

    const get_error = (type: string) => {
        switch (type) {
            case "required": return 1;
            case "minLength": return 2;
            case "pattern": return 4;
        }
    }

    return (type === undefined) ? '' : (
        <p className="absolute top-[-27px] dark:opacity-70 text-[13.7px] mg:text-[15px] font-normal tracking-wide text-red-500 max-line">
            {
                translate(`contact.validations.inputs.j_${order}.text_${get_error(type)}`)
            }
        </p>
    )
}