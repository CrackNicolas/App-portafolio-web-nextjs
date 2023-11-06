import ComponentItem from "./item";
import ComponentIcon from "../icon";

import { Use_translation } from "@/i18n/logic/use_translation";
import { Media_query } from "@/logic/media_query";

type Props = {
    paint: string,
    lenguaje: boolean,
    setLenguaje: any
}

export default function ComponentNav(props: Props) {
    const { paint, lenguaje, setLenguaje } = props;

    const i18n = Use_translation(2);

    const isWidth = Media_query('1024');

    const update_lenguaje = (value: boolean) => {
        i18n.changeLanguage((value) ? 'es' : 'en');
        setLenguaje(value);
    }

    return (
        <section id="nav" className={`fixed animate-[presentationLeft_1.5s_ease-in-out] z-30 left-0 bg-bg-primary ${isWidth ? 'h-[40px] w-full' : 'w-[58px] h-screen pt-[20px] pb-[15px]'}`}>
            <article className={`grid h-full ${isWidth ? 'grid-cols-7 border-b-[0.1px] border-text-secondary pl-[10px]' : 'grid-rows-7'}`}>
                <article className={`flex h-full ${isWidth ? 'col-span-6 gap-x-6 sm:gap-x-4 md:gap-x-6 items-center' : 'row-span-6 flex-col gap-y-6'}`}>
                    <ComponentItem name="init" number={1} icon={(paint === 'init') ? 'init-fill' : 'init'} />
                    <ComponentItem name="about" number={2} icon={(paint === 'about') ? 'user-fill' : 'user'} />
                    <ComponentItem name="services" number={3} icon={(paint === 'services') ? 'service-fill' : 'service'} />
                    <ComponentItem name="experience" number={4} icon={(paint === 'experience') ? 'experience-fill' : 'experience'} />
                    <ComponentItem name="proyects" number={5} icon={(paint === 'proyects') ? 'proyects-fill' : 'proyects'} />
                    <ComponentItem name="education" size={17} number={6} icon={(paint === 'education') ? 'education-fill' : 'education'} />
                    <ComponentItem name="contact" number={7} icon={(paint === 'contact') ? 'contact-fill' : 'contact'} />
                </article>
                <article className={`grid place-items-center pr-2 sm:pr-[10px] h-full ${isWidth ? 'col-span-1 justify-end' : ' row-span-1 items-end'}`}>
                    <button type="button" onClick={() => update_lenguaje(!lenguaje)} className="outline-none grid place-items-center ml:min-w-[45px] ml:max-w-[45px] cursor-pointer rounded-sm" title="Traductor">
                        <ComponentIcon name="language" size={18} description_class={`${isWidth ? 'w-[15.1px] h-[15.1px]' : 'w-auto h-auto'} ${!lenguaje && 'text-text-secondary'}`} />
                        <span className={` hidden sm:grid place-items-center font-semibold rounded-sm transition duration-700 w-full h-[13px] text-[10.2px]`}>
                            {
                                lenguaje ? 'Inglés' : 'Spanish'
                            }
                        </span>
                    </button>
                </article>
            </article>
        </section>
    )
}