import Next_link from "next/link";

import { Link } from "react-scroll";
import { useState } from "react";

import ComponentIcon from '../partials/icon';
import ComponentImage from '../partials/image';

import { Use_translation } from "@/i18n/logic/use_translation";

type Props = {
    animate: boolean
}

export default function ComponentProyects(props: Props) {
    const { animate } = props;

    const [view_datails, setView_datails] = useState<boolean>(true);

    const t = Use_translation(1);

    return (
        <section id="proyects" className="px-[10px] sm:px-[30px] lg:pl-[70px] flex flex-col gap-[20px] m-auto max-w-[1200px] pt-[65px] lg:pt-[80px]">
            <h2 className="flex items-center justify-between py-[5px] border-b-[1px] border-text-secondary">
                <span className={`${animate && 'animate-[presentationLeft_0.9s_ease-in-out]'} font-bold text-[20px] tracking-wider text-text-secondary`}>
                    {t('proyects.title')}
                </span>
                <ComponentIcon name="proyects" size={24} description_class={`${animate && 'animate-[presentationRight_0.9s_ease-in-out]'} text-text-secondary`} />
            </h2>
            <article className={`${animate && 'animate-[presentationBottom_1s_ease-in-out]'} ${view_datails && 'h-[400px] ml:h-[470px] sm:h-[520px] md:h-[530px] mg:h-[520px] lg:h-[582px] overflow-hidden'} mt-3 mb-[20px] gap-8 flex flex-col`}>
                <div className="grid grid-cols-1 mg:grid-cols-2 gap-3 lg:gap-5 rounded-sm">
                    <div className="relative flex items-center">
                        <ComponentImage name="App YouTube" />
                        <div className="break-before absolute w-full h-full hover:bg-none bg-gradient-to-tr from-text-secondary cursor-pointer"></div>
                    </div>
                    <div className="group relative flex flex-col gap-1 lg:gap-2 items-end cursor-pointer">
                        <span className="font-bold text-[20px] lg:text-[25px] text-text-secondary">
                            Clon YouTube
                        </span>
                        <span className="text-[13px] lg:text-[15px] hover:bg-bg-primary hover:text-text-secondary transition duration-500 cursor-pointer border-[0.1px] border-text-secondary text-bg-primary bg-text-secondary rounded-sm px-3 py-2">
                            Desarrollé este proyecto, con el objetivo de aprender más sobre el desarrollo de aplicaciones y mejorar mis habilidades como programador.
                        </span>
                        <div className="flex mt-1 lg:mt-3 mb-10 mg:mb-3 lg:mb-9 gap-4 items-center">
                            <ComponentIcon name="Next.js" size={30} description_class="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px]" view_box='0 0 180 180' />
                            <ComponentIcon name="React" size={30} description_class="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px] text-blue-500" view_box='-10.5 -9.45 21 18.9' />
                            <ComponentImage name="TypeScript" description_class="w-[18px] h-[18px] lg:w-[28px] lg:h-[28px] hover:translate-y-[-3px]" />
                            <ComponentImage name="JavaScript" description_class="w-[26.2px] h-[26.2px] lg:w-[36.2px] lg:h-[36.2px] hover:translate-y-[-3px]" />
                            <ComponentImage name="CSS" description_class="w-[25.5px] h-[25.5px] lg:w-[35.5px] lg:h-[35.5px] hover:translate-y-[-3px]" />
                            <ComponentImage name="Tailwind" description_class="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] hover:translate-y-[-3px]" />
                            <ComponentImage name="HTML" description_class="w-[25px] h-[25px] lg:w-[35.5px] lg:h-[35.5px] hover:translate-y-[-3px]" />
                        </div>
                        <div className="absolute px-[3px] bottom-0 w-full flex justify-between items-center">
                            <ComponentImage name="YouTube" description_class="w-[25px] h-[25px]" />
                            <span className="invisible group-hover:visible w-[250px] h-[0.5px] bg-text-secondary opacity-40"></span>
                            <div className="flex gap-5">
                                <Next_link href="" rel="noopener noreferrer">
                                    <ComponentIcon name="git" size={20} description_class="hover:text-text-secondary" />
                                </Next_link>
                                <Next_link href="" rel="noopener noreferrer">
                                    <ComponentIcon name="link" size={20} description_class="hover:text-text-secondary" />
                                </Next_link>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="w-full h-[0.1px] bg-text-secondary opacity-40"></span>
                <div className="grid grid-cols-1 mg:grid-cols-2 gap-3 lg:gap-5 rounded-sm">
                    <div className="group relative flex flex-col gap-1 lg:gap-2 items-start cursor-pointer">
                        <span className="font-bold text-[20px] lg:text-[25px] text-text-secondary">
                            Clon YouTube
                        </span>
                        <span className="text-[13px] lg:text-[15px] hover:bg-bg-primary hover:text-text-secondary transition duration-500 cursor-pointer border-[0.1px] border-text-secondary text-bg-primary bg-text-secondary rounded-sm px-3 py-2">
                            Desarrollé este proyecto, con el objetivo de aprender más sobre el desarrollo de aplicaciones y mejorar mis habilidades como programador.
                        </span>
                        <div className="flex mt-1 lg:mt-3 mb-10 mg:mb-3 lg:mb-9 gap-4 items-center">
                            <ComponentIcon name="Next.js" size={30} description_class="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px]" view_box='0 0 180 180' />
                            <ComponentIcon name="React" size={30} description_class="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px] text-blue-500" view_box='-10.5 -9.45 21 18.9' />
                            <ComponentImage name="TypeScript" description_class="w-[18px] h-[18px] lg:w-[28px] lg:h-[28px] hover:translate-y-[-3px]" />
                            <ComponentImage name="JavaScript" description_class="w-[26.2px] h-[26.2px] lg:w-[36.2px] lg:h-[36.2px] hover:translate-y-[-3px]" />
                            <ComponentImage name="CSS" description_class="w-[25.5px] h-[25.5px] lg:w-[35.5px] lg:h-[35.5px] hover:translate-y-[-3px]" />
                            <ComponentImage name="Tailwind" description_class="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] hover:translate-y-[-3px]" />
                            <ComponentImage name="HTML" description_class="w-[25px] h-[25px] lg:w-[35.5px] lg:h-[35.5px] hover:translate-y-[-3px]" />
                        </div>
                        <div className="absolute px-[3px] bottom-0 w-full flex justify-between items-center">
                            <div className="flex gap-5">
                                <Next_link href="" rel="noopener noreferrer">
                                    <ComponentIcon name="link" size={20} description_class="hover:text-text-secondary" />
                                </Next_link>
                                <Next_link href="" rel="noopener noreferrer">
                                    <ComponentIcon name="git" size={20} description_class="hover:text-text-secondary" />
                                </Next_link>
                            </div>
                            <span className="invisible group-hover:visible w-[250px] h-[0.5px] bg-text-secondary opacity-40"></span>
                            <ComponentImage name="YouTube" description_class="w-[25px] h-[25px]" />
                        </div>
                    </div>
                    <div className="relative flex items-center">
                        <ComponentImage name="App YouTube" />
                        <div className="break-before absolute w-full h-full hover:bg-none bg-gradient-to-tr from-text-secondary cursor-pointer"></div>
                    </div>
                </div>
                <span className="w-full h-[0.1px] bg-text-secondary opacity-40"></span>
                <div className="grid grid-cols-1 mg:grid-cols-2 gap-3 lg:gap-5 rounded-sm">
                    <div className="relative flex items-center">
                        <ComponentImage name="App YouTube" />
                        <div className="break-before absolute w-full h-full hover:bg-none bg-gradient-to-tr from-text-secondary cursor-pointer"></div>
                    </div>
                    <div className="group relative flex flex-col gap-1 lg:gap-2 items-end cursor-pointer">
                        <span className="font-bold text-[20px] lg:text-[25px] text-text-secondary">
                            Clon YouTube
                        </span>
                        <span className="text-[13px] lg:text-[15px] hover:bg-bg-primary hover:text-text-secondary transition duration-500 cursor-pointer border-[0.1px] border-text-secondary text-bg-primary bg-text-secondary rounded-sm px-3 py-2">
                            Desarrollé este proyecto, con el objetivo de aprender más sobre el desarrollo de aplicaciones y mejorar mis habilidades como programador.
                        </span>
                        <div className="flex mt-1 lg:mt-3 mb-10 mg:mb-3 lg:mb-9 gap-4 items-center">
                            <ComponentIcon name="NextJS" size={30} description_class="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px]" view_box='0 0 180 180' />
                            <ComponentIcon name="React" size={30} description_class="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] hover:translate-y-[-3px] text-blue-500" view_box='-10.5 -9.45 21 18.9' />
                            <ComponentImage name="TypeScript" description_class="w-[18px] h-[18px] lg:w-[28px] lg:h-[28px] hover:translate-y-[-3px]" />
                            <ComponentImage name="JavaScript" description_class="w-[26.2px] h-[26.2px] lg:w-[36.2px] lg:h-[36.2px] hover:translate-y-[-3px]" />
                            <ComponentImage name="CSS" description_class="w-[25.5px] h-[25.5px] lg:w-[35.5px] lg:h-[35.5px] hover:translate-y-[-3px]" />
                            <ComponentImage name="Tailwind" description_class="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] hover:translate-y-[-3px]" />
                            <ComponentImage name="HTML" description_class="w-[25px] h-[25px] lg:w-[35.5px] lg:h-[35.5px] hover:translate-y-[-3px]" />
                        </div>
                        <div className="absolute px-[3px] bottom-0 w-full flex justify-between items-center">
                            <ComponentImage name="YouTube" description_class="w-[25px] h-[25px]" />
                            <span className="invisible group-hover:visible w-[250px] h-[0.5px] bg-text-secondary opacity-40"></span>
                            <div className="flex gap-5">
                                <Next_link href="" rel="noopener noreferrer">
                                    <ComponentIcon name="git" size={20} description_class="hover:text-text-secondary" />
                                </Next_link>
                                <Next_link href="" rel="noopener noreferrer">
                                    <ComponentIcon name="link" size={20} description_class="hover:text-text-secondary" />
                                </Next_link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Link to={view_datails ? '' : 'proyectos'} onClick={() => setView_datails(!view_datails)} spy={true} smooth={true} offset={0} duration={500} rel="noopener noreferrer" className={` ${animate && 'animate-[presentationLeft_1.2s_ease-in-out]'} group transition duration-500 flex items-center mx-auto pl-[20px] pr-[18px] py-[5px] gap-x-2 rounded-sm bg-text-secondary hover:bg-bg-primary hover:text-text-secondary cursor-pointer text-bg-primary border-[0.1px] border-text-secondary`}>
                <span className="text-[18px] font-semibold">
                    {
                        view_datails ? 'Ver más' : 'Ver menos'
                    }
                </span>
                <ComponentIcon name={(view_datails) ? 'see-moore' : 'see-less'} size={22} description_class="group-hover:text-text-secondary text-bg-primary" />
            </Link>
        </section>
    )
}