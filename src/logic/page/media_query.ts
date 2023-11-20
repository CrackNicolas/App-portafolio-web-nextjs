import { useMediaQuery } from "react-responsive";

export function Media_query(size: string) {
    return useMediaQuery({ query: `(max-width: ${size}px)` });
}