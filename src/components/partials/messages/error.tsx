import { Use_translation } from "@/i18n/logic/use_translation";

type Props = {
    order: number,
    type: any
}

export default function ComponentMessageError(props: Props) {
    const { order, type } = props;

    const t = Use_translation(1);

    const get_error = (type: string) => {
        switch (type) {
            case "required": return 1;
            case "minLength": return 2;
            case "maxLength": return 3;
            case "pattern": return 4;
        }
    }

    return (type === undefined) ? '' : (
        <p className="absolute top-[-27px] text-[15px] font-semibold tracking-widest text-red-500">
            {
                t(`contact.validations.inputs.j_${order}.text_${get_error(type)}`)
            }
        </p>
    )
}