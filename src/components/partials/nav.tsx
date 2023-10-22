import { Link } from "react-scroll";
import { useState } from "react";

import ComponentIcon from "./icon";

import { Use_translation } from "@/i18n/logic/use_translation";
import { Media_query } from "@/logic/media_query";

type Props = {
    paint: string
}

export default function ComponentNav(props: Props) {
    const { paint } = props;

    const [lenguaje_selected, setLenguaje_selected] = useState<boolean>(true);
    const [t, i18n] = Use_translation(2);

    const isWidth = Media_query('1024');

    const update_lenguaje = (value: boolean) => {
        i18n.changeLanguage((value) ? 'es' : 'en');
        setLenguaje_selected(value);
    }

    return (
        <section id="nav" className={`fixed animate-[presentationLeft_1.5s_ease-in-out] z-30 left-0 bg-bg-primary ${isWidth ? 'h-[40px] w-full' : 'w-[58px] h-full pt-[20px] pb-[15px]'}`}>
            <article className={`grid h-full ${isWidth ? 'grid-cols-7 border-b-[0.1px] border-text-secondary pl-[10px]' : 'grid-rows-7'}`}>
                <article className={`flex h-full ${isWidth ? 'col-span-6 gap-x-6 sm:gap-x-4 md:gap-x-6 items-center' : 'row-span-6 flex-col gap-y-6'}`}>
                    <Link to="init" spy={true} smooth={true} offset={0} duration={500} rel="noopener noreferrer" className={`group h-[35px] grid place-items-center cursor-pointer ${isWidth && 'sm:min-w-[47px] sm:max-w-[47px]'}`}>
                        <div className="grid place-items-center">
                            <ComponentIcon name={(paint === 'init') ? 'init-fill' : 'init'} size={16} description_class="text-text-secondary" />
                        </div>
                        <span className={` ${(paint === 'init') && 'text-text-secondary'} hidden group-hover:text-text-secondary sm:grid place-items-center font-semibold rounded-sm transition duration-700 w-full h-[13px] text-[10.2px]`}>
                            {t('menu.i_1')}
                        </span>
                    </Link>
                    <Link to="about" spy={true} smooth={true} offset={0} duration={500} rel="noopener noreferrer" className={`group h-[35px] ml-[-2px] sm:ml-0 grid place-items-center cursor-pointer ${isWidth && 'sm:min-w-[47px] sm:max-w-[47px]'}`}>
                        <div className="grid place-items-center">
                            <ComponentIcon name={(paint === 'about') ? 'user-fill' : 'user'} size={16} description_class="text-text-secondary" />
                        </div>
                        <span className={` ${(paint === 'about') && 'text-text-secondary'} hidden group-hover:text-text-secondary sm:grid place-items-center font-semibold rounded-sm transition duration-700 w-full h-[13px] text-[10.2px] whitespace-nowrap`}>
                            {t('menu.i_2')}
                        </span>
                    </Link>
                    <Link to="services" spy={true} smooth={true} offset={0} duration={500} rel="noopener noreferrer" className={`group h-[35px] ml-[-2px] sm:ml-0 grid place-items-center cursor-pointer ${isWidth && 'sm:min-w-[47px] sm:max-w-[47px]'}`}>
                        <div className="grid place-items-center">
                            <ComponentIcon name={(paint === 'services') ? 'service-fill' : 'service'} size={16} description_class="text-text-secondary" />
                        </div>
                        <span className={` ${(paint === 'services') && 'text-text-secondary'} hidden group-hover:text-text-secondary sm:grid place-items-center font-semibold rounded-sm transition duration-700 w-full h-[13px] text-[10.2px]`}>
                            {t('menu.i_3')}
                        </span>
                    </Link>
                    <Link to="experience" spy={true} smooth={true} offset={0} duration={500} rel="noopener noreferrer" className={`group h-[35px] grid place-items-center cursor-pointer ${isWidth && 'sm:min-w-[47px] sm:max-w-[47px]'}`}>
                        <div className="grid place-items-center">
                            <ComponentIcon name={(paint === 'experience') ? 'experience-fill' : 'experience'} size={16} description_class="text-text-secondary" />
                        </div>
                        <span className={` ${(paint === 'experience') && 'text-text-secondary'} hidden group-hover:text-text-secondary sm:grid place-items-center font-semibold rounded-sm transition duration-700 w-full h-[13px] text-[10.2px]`}>
                            {t('menu.i_4')}
                        </span>
                    </Link>
                    <Link to="proyects" spy={true} smooth={true} offset={0} duration={500} rel="noopener noreferrer" className={`group h-[35px] grid place-items-center cursor-pointer ${isWidth && 'sm:min-w-[47px] sm:max-w-[47px]'}`}>
                        <div className="grid place-items-center">
                            <ComponentIcon name={(paint === 'proyects') ? 'proyects-fill' : 'proyects'} size={16} description_class="text-text-secondary" />
                        </div>
                        <span className={` ${(paint === 'proyects') && 'text-text-secondary'} hidden group-hover:text-text-secondary sm:grid place-items-center font-semibold rounded-sm transition duration-700 w-full h-[13px] text-[10.2px]`}>
                            {t('menu.i_5')}
                        </span>
                    </Link>
                    <Link to="education" spy={true} smooth={true} offset={0} duration={500} rel="noopener noreferrer" className={`group h-[35px] grid place-items-center cursor-pointer ${isWidth && 'sm:min-w-[47px] sm:max-w-[47px]'}`}>
                        <div className="grid place-items-center">
                            <ComponentIcon name={(paint === 'education') ? 'education-fill' : 'education'} size={17} description_class="text-text-secondary" />
                        </div>
                        <span className={` ${(paint === 'education') && 'text-text-secondary'} hidden group-hover:text-text-secondary sm:grid place-items-center font-semibold rounded-sm transition duration-700 w-full h-[13px] text-[10.2px]`}>
                            {t('menu.i_6')}
                        </span>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={0} duration={500} rel="noopener noreferrer" className={`group h-[35px] grid place-items-center cursor-pointer ${isWidth && 'sm:min-w-[47px] sm:max-w-[47px]'}`}>
                        <div className="grid place-items-center">
                            <ComponentIcon name={(paint === 'contact') ? 'contact-fill' : 'contact'} size={16} description_class="w-[14px] h-[14px] sm:w-auto h-auto text-text-secondary" />
                        </div>
                        <span className={` ${(paint === 'contact') && 'text-text-secondary'} hidden group-hover:text-text-secondary sm:grid place-items-center font-semibold rounded-sm transition duration-700 w-full h-[13px] text-[10.2px]`}>
                            {t('menu.i_7')}
                        </span>
                    </Link>
                </article>
                <article className={`grid place-items-center pr-2 sm:pr-[10px] h-full ${isWidth ? 'col-span-1 justify-end' : ' row-span-1 items-end'}`}>
                    <button type="button" onClick={() => update_lenguaje(!lenguaje_selected)} className="outline-none grid place-items-center ml:min-w-[45px] ml:max-w-[45px] cursor-pointer rounded-sm" title="Traductor">
                        <ComponentIcon name="language" size={18} description_class={`w-[15px] h-[15px] w-auto h-auto ${!lenguaje_selected && 'text-text-secondary'}`} />
                        <span className={` hidden sm:grid place-items-center font-semibold rounded-sm transition duration-700 w-full h-[13px] text-[10.2px]`}>
                            {
                                lenguaje_selected ? 'Inglés' : 'Español'
                            }
                        </span>
                    </button>
                </article>
            </article>
        </section>
    )
}