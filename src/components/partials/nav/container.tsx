import { useState } from "react";

import Use_theme from "@/context/theme/use";
import Use_translation from "@/context/translation/use";

import ComponentItem from "./item";
import ComponentIcon from "../icon";
import ComponentToggle from "./toggle";

import { Media_query } from "@/logic/page/media_query";

type Props = {
    paint: string
}

export default function ComponentNav({ paint }: Props) {
    const { theme, update_theme } = Use_theme();
    const { language, update_language, translate } = Use_translation();

    const [visible_options, setVisible_options] = useState<boolean>(false);

    const isWidth = Media_query('1024');

    const refresh = () => {
        window.location.reload();
        update_language((language === "es") ? 'en' : 'es')
    }

    return (
        <section id="nav" className={`fixed z-30 left-0 bg-tertiary dark:bg-primary ${isWidth ? 'h-[40px] w-full bottom-0' : 'w-[58px] h-screen pt-[20px] pb-[15px]'}`}>
            <article className={`grid h-full ${isWidth ? 'grid-cols-8 ml:grid-cols-8 border-t-[0.1px] border-secondary pl-[10px] pr-[5px] sm:pl-[10px] sm:pr-[17px]' : 'grid-rows-7'}`}>
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
                        <button type="button" onClick={() => setVisible_options(!visible_options)} className="ml:hidden outline-none grid gap-y-1 place-items-center min-w-[30px] max-w-[30px] cursor-pointer" title={translate('focus.settings')}>
                            <ComponentIcon name="settings" size={18} description_class={`${isWidth ? 'w-[17px] h-[17px]' : 'w-auto h-auto'} text-primary dark:text-tertiary hover:text-secondary `} />
                        </button>
                        <button type="button" onClick={() => update_theme(theme)} className="hidden outline-none group ml:grid gap-y-1 place-items-center sm:min-w-[45px] sm:max-w-[45px] ml:min-w-[35px] ml:max-w-[35px] cursor-pointer" title={translate('focus.theme')}>
                            <ComponentIcon name={theme} size={18} description_class={`group-hover:translate-y-[-1px] transition duration-500 ${isWidth ? 'w-[15.2px] h-[15.2px]' : 'w-auto h-auto'} group-hover:text-secondary text-primary dark:text-tertiary`} />
                            <span className={`hidden sm:grid place-items-center font-semibold w-full h-[13px] text-[10.2px] transition duration-500 text-primary dark:text-tertiary group-hover:opacity-100 dark:opacity-60 `}>
                                {
                                    translate('menu.button_8')
                                }
                            </span>
                        </button>
                        <button type="button" onClick={() => refresh()} className="hidden outline-none group ml:grid gap-y-1 place-items-center sm:min-w-[45px] sm:max-w-[45px] ml:min-w-[35px] ml:max-w-[35px] cursor-pointer" title={translate('focus.translator')}>
                            <ComponentIcon name="language" size={18} description_class={`group-hover:translate-y-[-1px] transition duration-500 ${isWidth ? 'w-[15.2px] h-[15.2px]' : 'w-auto h-auto'} group-hover:text-secondary ${(language === 'es') ? 'text-primary dark:text-tertiary' : 'text-secondary'} `} />
                            <span className={` hidden sm:grid place-items-center font-semibold w-full h-[13px] text-[10.2px] transition duration-500 text-primary dark:text-tertiary group-hover:opacity-100 dark:opacity-60 `}>
                                {
                                    (language === "es") ? 'Inglés' : 'Spanish'
                                }
                            </span>
                        </button>
                    </div>
                    <ComponentToggle open={visible_options} setOpen={setVisible_options} />
                </article>
            </article>
        </section>
    )
}