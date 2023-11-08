export function Style_icon(active: boolean, input: any) {
    if (active) {
        return `absolute right-0 pb-0 px-[6px] ${(input == "required" || input == "minLength" || input == "maxLength" || input == "pattern") ? 'text-red-500' : 'text-text-secondary'}`
    }
    return 'hidden';

}