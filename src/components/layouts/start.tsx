import Next_link from "next/link";

import { Link } from "react-scroll";

import ComponentIcon from "../partials/icon";

import { Use_translation } from "@/i18n/logic/use_translation";

type Props = {
    animate: boolean
}

export default function ComponentStart(props: Props) {
    const { animate } = props;

    const t = Use_translation(1);

    return (
        <section id="init" className="main m-auto max-w-[1275px]">
            <article className="grid px-[10px] sm:px-[30px] lg:pl-[70px] items-center grid-cols-2 lg:grid-cols-3 max-w-[1200px] m-auto pt-[65px] lg:pt-[80px] pb-[80px] lg:pb-[178px]">
                <article className="flex flex-col col-span-2 h-full">
                    <h2 className={`${animate && 'animate-[presentationLeft_0.8s_ease-in-out]'} text-text-primary tracking-wider text-[20px] ml:text-[25px] sm:text-[30px] font-semibold`}>
                        {t('start.txt_1')}
                    </h2>
                    <h1 className={`${animate && 'animate-[presentationLeft_1s_ease-in-out]'} text-[40px] ml:text-[50px] sm:text-[58px] font-bold mb-[10px] sm:mb-[13px] tracking-wider text-text-secondary`}>
                        Alejo Beltran
                    </h1>
                    <h4 className={`${animate && 'animate-[presentationLeft_1.2s_ease-in-out]'} text-[18px] sm:text-[20px] font-semibold`}>
                        Full Stack Development
                    </h4>
                    <p className={`${animate && 'animate-[presentationLeft_1.4s_ease-in-out]'} text-[15px] sm:text-[15px] mb-[10px] sm:mb-[20px] min-w-[200px] max-w-[460px] opacity-60`}>
                        {t('start.txt_2')}
                    </p>
                    <div className="flex items-center gap-x-5 mb-[13px] sm:mb-[23px] w-[309.5px] sm:w-[376.1px]">
                        <Next_link href="https://www.linkedin.com/in/nicolas-alejo-beltran/" target="_blank" rel="noopener noreferrer" className={`${animate && 'animate-[presentationLeft_1.5s_ease-in-out]'} group p-2 rounded-full cursor-pointer border-[0.1px] border-bg-primary hover:border-text-secondary transition duration-500`}>
                            <ComponentIcon name="linkedin" size={20} description_class="group-hover:text-text-secondary" />
                        </Next_link>
                        <Next_link href="https://github.com/CrackNicolas" target="_blank" rel="noopener noreferrer" className={`${animate && 'animate-[presentationLeft_1.6s_ease-in-out]'} group p-2 rounded-full cursor-pointer border-[0.1px] border-bg-primary hover:border-text-secondary transition duration-500`}>
                            <ComponentIcon name="git" size={20} description_class="group-hover:text-text-secondary" />
                        </Next_link>
                        <span className={`${animate && 'animate-[presentationRight_1.6s_ease-in-out]'} w-full h-[0.1px] bg-text-secondary opacity-40`}></span>
                    </div>
                    <div className="flex gap-x-[10px] sm:gap-x-[15px] w-[309.5px] sm:w-[376.1px]">
                        <Link to="contact" spy={true} smooth={true} offset={0} duration={500} rel="noopener noreferrer" className={`${animate && 'animate-[presentationBottom_1.6s_ease-in-out]'} flex items-center min-w-[145px] sm:min-w-[171px] min-w-[145px] sm:max-w-[171px] gap-x-[8px] rounded-md py-[10px] px-[20px] cursor-pointer text-bg-primary bg-text-secondary hover:opacity-90 border-[1px] border-text-secondary transition duration-500`}>
                            <ComponentIcon name="contact" size={16} description_class="text-bg-primary w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]"/>
                            <span className="text-[15px] sm:text-[20px] font-semibold">
                                {t('start.txt_3')}
                            </span>
                        </Link>
                        <a href="http://localhost:3000/pdf/Curriculum Beltran Alejo.pdf" rel="noopener noreferrer" download="Curriculum Beltran Alejo.pdf" className={`${animate && 'animate-[presentationBottom_1.6s_ease-in-out]'} group flex items-center min-w-[156px] sm:min-w-[189px] min-w-[156px] sm:max-w-[189px] gap-x-[8px] rounded-md py-[10px] px-[20px] cursor-pointer hover:text-bg-primary hover:bg-text-secondary bg-bg-primary text-text-primary border-[1px] border-text-secondary transition duration-500`}>
                            <ComponentIcon name="dowload" size={16} description_class="group-hover:text-bg-primary text-text-primary w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" />
                            <span className="text-[15px] sm:text-[20px] font-semibold">
                                {t('start.txt_4')}
                            </span>
                        </a>
                    </div>
                </article>
                <article className="grid place-items-center lg:justify-end lg:items-center col-span-full mt-12 lg:mt-0 lg:col-span-1 h-full">
                    <img className={`${animate && 'animate-[presentationRight_1.6s_ease-in-out]'} w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] rounded-md cursor-pointer`} src="/images/perfil.jpg" />
                </article>
            </article>
        </section>
    )
}