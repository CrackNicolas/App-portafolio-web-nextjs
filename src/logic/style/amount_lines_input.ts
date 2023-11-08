export function Amount_lines_input(input: any) {
    const line_height = getComputedStyle(input).lineHeight; // Altura de línea en píxeles
    const altura_textarea = input.scrollHeight; // Altura total del textarea en píxeles
    return Math.floor(altura_textarea / parseFloat(line_height));
}