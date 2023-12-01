type Props = {
    width: string
}

export default function ComponentLine({ width }: Props) {
    return (
        <span className={` bg-gradient-to-r from-primary to-secondary via-red-secondary ${width} h-[3px] bg-secondary transition duration-600 rounded-full`}></span>
    )
}