import { useLayoutEffect, useState } from "react";

export function Use_window_width() {
    const [window_width, setWindow_width] = useState(0);

    useLayoutEffect(() => {
        const update_window_width = () => {
            setWindow_width(window.innerWidth);
        }
        window.addEventListener("resize", update_window_width);

        return () => {
            window.removeEventListener("resize", update_window_width);
        }
    }, []);

    return window_width;
}