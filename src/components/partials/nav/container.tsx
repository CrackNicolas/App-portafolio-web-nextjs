import { useState } from "react";

import ComponentItem from "./item";
import ComponentIcon from "../icon";
import ComponentToggle from "./toggle";

import { Use_translation } from "@/i18n/logic/use_translation";
import { Media_query } from "@/logic/page/media_query";

type Props = {
    paint: string,
    lenguaje: boolean,
    setLenguaje: any,
    theme: string,
    setTheme: any
}

export default function ComponentNav(props: Props) {
    const { paint, lenguaje, setLenguaje, theme, setTheme } = props;

    const [visible_options, setVisible_options] = useState<boolean>(false);

    const i18n = Use_translation(2);
    const t = Use_translation(1);

    const isWidth = Media_query('1024');

    const update_lenguaje = (value: boolean) => {
        i18n.changeLanguage((value) ? 'es' : 'en');
        setLenguaje(value);
    }

    const update_theme = (theme: string) => {
        setTheme((theme === 'dark') ? 'light' : 'dark');
    }

    return (
        <section id="nav" className={`fixed animate-[presentationLeft_1.5s_ease-in-out] z-30 left-0 bg-tertiary dark:bg-primary ${isWidth ? 'h-[40px] w-full' : 'w-[58px] h-screen pt-[20px] pb-[15px]'}`}>
            <article className={`grid h-full ${isWidth ? 'grid-cols-8 ml:grid-cols-8 border-b-[0.1px] border-secondary pl-[10px] pr-[5px] sm:pl-[10px] sm:pr-[17px]' : 'grid-rows-7'}`}>
                <article className={`flex h-full ${isWidth ? 'col-span-6 gap-x-6 sm:gap-x-4 md:gap-x-6 items-center' : 'row-span-6 flex-col gap-y-6'}`}>
                    <ComponentItem name="init" number={1} icon={(paint === 'init') ? 'init-fill' : 'init'} />
                    <ComponentItem name="about" number={2} icon={(paint === 'about') ? 'about-fill' : 'about'} />
                    <ComponentItem name="services" number={3} icon={(paint === 'services') ? 'services-fill' : 'services'} />
                    <ComponentItem name="experience" number={4} icon={(paint === 'experience') ? 'experience-fill' : 'experience'} />
                    <ComponentItem name="proyects" number={5} icon={(paint === 'proyects') ? 'proyects-fill' : 'proyects'} />
                    <ComponentItem name="education" size={17} number={6} icon={(paint === 'education') ? 'education-fill' : 'education'} />
                    <ComponentItem name="contact" number={7} icon={(paint === 'contact') ? 'contact-fill' : 'contact'} />
                </article>
                <article className={`col-span-2 flex ${isWidth ? 'justify-end' : 'items-end'}`}>
                    <div className={`flex items-center gap-y-3 ${isWidth ? 'h-full' : 'flex-col w-full'}`}>
                        <button type="button" onClick={() => setVisible_options(!visible_options)} className="ml:hidden outline-none grid gap-y-1 place-items-center min-w-[30px] max-w-[30px] cursor-pointer text-primary dark:text-tertiary" title={t('focus.theme')}>
                            <ComponentIcon name="settings" size={18} description_class={`${isWidth ? 'w-[17px] h-[17px]' : 'w-auto h-auto'}`} />
                        </button>
                        <button type="button" onClick={() => update_theme(theme)} className="hidden outline-none group ml:grid gap-y-1 place-items-center sm:min-w-[45px] sm:max-w-[45px] ml:min-w-[35px] ml:max-w-[35px] cursor-pointer" title={t('focus.theme')}>
                            <ComponentIcon name={theme} size={18} description_class={`group-hover:translate-y-[-1px] transition duration-700 ${isWidth ? 'w-[15.2px] h-[15.2px]' : 'w-auto h-auto'} group-hover:text-secondary text-primary dark:text-tertiary`} />
                            <span className={`hidden sm:grid place-items-center font-semibold w-full h-[13px] text-[10.2px] transition duration-700 group-hover:text-secondary text-primary dark:text-tertiary`}>
                                {
                                    t('menu.button_8')
                                }
                            </span>
                        </button>
                        <button type="button" onClick={() => update_lenguaje(!lenguaje)} className="hidden outline-none group ml:grid gap-y-1 place-items-center sm:min-w-[45px] sm:max-w-[45px] ml:min-w-[35px] ml:max-w-[35px] cursor-pointer" title={t('focus.translator')}>
                            <ComponentIcon name="language" size={18} description_class={`group-hover:translate-y-[-1px] transition duration-700 ${isWidth ? 'w-[15.2px] h-[15.2px]' : 'w-auto h-auto'} group-hover:text-secondary text-primary dark:text-tertiary`} />
                            <span className={` hidden sm:grid place-items-center font-semibold w-full h-[13px] text-[10.2px] transition duration-700 group-hover:text-secondary text-primary dark:text-tertiary`}>
                                {
                                    lenguaje ? 'Inglés' : 'Spanish'
                                }
                            </span>
                        </button>
                    </div>
                    <ComponentToggle open={visible_options} setOpen={setVisible_options} theme={theme} update_theme={update_theme} lenguaje={lenguaje} update_lenguaje={update_lenguaje}/>
                </article>
            </article>
        </section>
    )
}