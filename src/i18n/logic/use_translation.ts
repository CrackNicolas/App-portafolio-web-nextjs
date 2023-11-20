import { useTranslation } from "react-i18next";

export function Use_translation(value: number): any {
    const [t, i18n] = useTranslation("global");

    return value === 1 ? t : i18n;
}