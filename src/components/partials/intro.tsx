import { useEffect, useRef } from "react";

type Props = {
    setView: any
}

export default function ComponentIntro(props: Props) {
    const { setView } = props;

    const ref_intro = useRef<any>(null);
    const ref_logo = useRef<any>(null);

    useEffect(() => {
        setTimeout(() => {
            let index = 0;
            for (let span of ref_logo.current.children) {
                setTimeout(() => {
                    span.style.opacity = "1";
                    span.style.transition = "ease-in-out 0.7s";
                }, (index + 1) * 50);
                index++;
            }

            setTimeout(() => {
                ref_intro.current.style.top = "-100vh";
                setView(true);
            }, 1700);
        })
    }, [])

    return (
        <section ref={ref_intro} className="fixed top-0 left-0 w-full h-screen z-40 transition">
            <article className="grid place-items-center gap-0">
                <img src="/images/Logo.png" className="animate-opacity mt-[70px] w-[240px] h-[240px]" alt="My Logo personal" />
                <h1 ref={ref_logo} className="mt-[-50px] text-[2.5rem] font-semibold tracking-widest">
                    <span className="relative bottom-[-20px] opacity-0 text-primary dark:text-tertiary">F</span>
                    <span className="relative bottom-[-20px] opacity-0 text-primary dark:text-tertiary">U</span>
                    <span className="relative bottom-[-20px] opacity-0 text-primary dark:text-tertiary">L</span>
                    <span className="relative bottom-[-20px] opacity-0 text-primary dark:text-tertiary">L</span>
                    <span className="relative bottom-[-20px] opacity-0 text-primary dark:text-tertiary">&nbsp;</span>
                    <span className="relative bottom-[-20px] opacity-0 text-primary dark:text-tertiary">S</span>
                    <span className="relative bottom-[-20px] opacity-0 text-primary dark:text-tertiary">T</span>
                    <span className="relative bottom-[-20px] opacity-0 text-primary dark:text-tertiary">A</span>
                    <span className="relative bottom-[-20px] opacity-0 text-primary dark:text-tertiary">C</span>
                    <span className="relative bottom-[-20px] opacity-0 text-primary dark:text-tertiary">K</span>
                </h1>
                <p className="animate-translateY font-semibold text-secondary opacity-70 mt-[10px] text-[1.4rem] tracking-wider">
                    Developer
                </p>
            </article>
        </section>
    )
}