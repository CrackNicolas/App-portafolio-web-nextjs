export function Insulting_message(message: string) {
    const forbidden_words = ['gay', 'trola', 'insulto3'];
    const contains_insult = forbidden_words.some((word: string) => message.toLowerCase().includes(word));

    return contains_insult;
}