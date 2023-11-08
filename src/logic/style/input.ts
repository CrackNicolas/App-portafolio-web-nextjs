export function Style_input(active: boolean, input: any) {
    if (active) {
        return {
            boxShadow: (input == "required" || input == "minLength" || input == "maxLength" || input == "pattern") ? '0 0 4px 0.1px red' : '0 0 4px 0.1px var(--text-primary)'
        }
    }
}