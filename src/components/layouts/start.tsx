import Next_link from "next/link";
import { Link } from "react-scroll";

import { useState } from "react";

import ComponentIcon from "../partials/icon";
import ComponentMessage from "../partials/messages/alerts/confirmation";

import { Use_translation } from "@/i18n/logic/use_translation";
import { Media_query } from "@/logic/page/media_query";

type Props = {
    animate: boolean
}

export default function ComponentStart(props: Props) {
    const { animate } = props;

    const domain = process.env.DEVELOPMENT_DOMAIN;

    const isWidth = Media_query("1024");

    const t = Use_translation(1);

    const [completed, setCompleted] = useState<boolean>(false);
    const [view_url, setView_url] = useState<string>("");

    const handle_download = () => {
        const path = "/pdf/Curriculum Beltran Alejo.pdf";

        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";

        xhr.onprogress = (event: any) => {
            if (event.lengthComputable) {
                const progress = (event.loaded / event.total) * 100;
                setCompleted(progress === 100);
            }
        };

        xhr.onload = () => {
            if (xhr.status === 200) {
                const blob = new Blob([xhr.response], { type: "application/pdf" });
                const url = window.URL.createObjectURL(blob);
                setView_url(url);
            }
        };

        xhr.open("GET", path, true);
        xhr.send();
    };

    return (
        <section id="init" className={`pb-[80px] lg:pb-[178px] relative grid px-[10px] sm:px-[22px] items-center grid-cols-2 lg:grid-cols-3 lg:pl-[80px] max-w-[1275px] m-auto pt-[65px] lg:pt-[80px]`}>
            <article className={`${(!isWidth && animate) && 'sandwich-background'} ${!animate && 'opacity-0'} flex flex-col col-span-2 h-full`}>
                <h2 className={`${animate ? 'animate-[presentationLeft_0.8s_ease-in-out]' : 'opacity-0'} text-text-primary tracking-wider text-[20px] ml:text-[25px] sm:text-[30px] font-semibold`}>
                    {t('start.txt_1')}
                </h2>
                <h1 className={`gradiente-text  ${animate ? 'animate-[presentationLeft_1s_ease-in-out]' : 'opacity-0'} text-[40px] ml:text-[50px] sm:text-[58px] font-bold mb-[10px] sm:mb-[13px] tracking-wider text-text-secondary`}>
                    Alejo Beltran
                </h1>
                <h4 className={`${animate ? 'animate-[presentationLeft_1.2s_ease-in-out]' : 'opacity-0'} text-[18px] sm:text-[20px] font-semibold`}>
                    Full Stack Development
                </h4>
                <p className={`${animate ? 'animate-[presentationLeft_1.4s_ease-in-out] opacity-60' : 'opacity-0'} text-[15px] sm:text-[15px] mb-[10px] sm:mb-[20px] min-w-[200px] max-w-[460px]`}>
                    {t('start.txt_2')}
                </p>
                <div className="flex items-center gap-x-5 mb-[13px] sm:mb-[23px] w-[309.5px] sm:w-[376.1px]">
                    <Next_link href="https://www.linkedin.com/in/nicolas-alejo-beltran/" target="_blank" rel="noopener noreferrer" className={`${animate ? 'animate-[presentationLeft_1.5s_ease-in-out]' : 'opacity-0'} group p-2 rounded-full cursor-pointer border-[0.1px] border-bg-primary hover:border-text-secondary transition duration-500`}>
                        <ComponentIcon name="linkedin" size={20} description_class="group-hover:text-text-secondary" />
                    </Next_link>
                    <Next_link href="https://github.com/CrackNicolas" target="_blank" rel="noopener noreferrer" className={`${animate ? 'animate-[presentationLeft_1.6s_ease-in-out]' : 'opacity-0'} group p-2 rounded-full cursor-pointer border-[0.1px] border-bg-primary hover:border-text-secondary transition duration-500`}>
                        <ComponentIcon name="git" size={20} description_class="group-hover:text-text-secondary" />
                    </Next_link>
                    <span className={`${animate ? 'animate-[presentationRight_1.6s_ease-in-out] opacity-40' : 'opacity-0'} w-full h-[0.1px] bg-text-secondary`}></span>
                </div>
                <div className="flex gap-x-[10px] sm:gap-x-[15px] w-[309.5px] sm:w-[376.1px]">
                    <Link to="contact" spy={true} smooth={true} offset={0} duration={500} rel="noopener noreferrer" className={` bg-gradient-to-r from-bg-secondary to-text-secondary ${animate ? 'animate-[presentationBottom_1.6s_ease-in-out]' : 'opacity-0'} flex items-center min-w-[145px] sm:min-w-[171px] min-w-[145px] sm:max-w-[171px] gap-x-[8px] rounded-md py-[10px] px-[20px] cursor-pointer text-bg-primary bg-text-secondary hover:opacity-90 border-[1px] border-text-secondary transition duration-500`}>
                        <ComponentIcon name="contact" size={16} description_class="text-bg-primary w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" />
                        <span className="text-[15px] sm:text-[20px] font-semibold">
                            {t('start.txt_3')}
                        </span>
                    </Link>
                    <a onClick={handle_download} href={`${domain}/pdf/Curriculum Beltran Alejo.pdf`} rel="noopener noreferrer" download="Curriculum Beltran Alejo.pdf" className={`${animate ? 'animate-[presentationBottom_1.6s_ease-in-out]' : 'opacity-0'} group flex items-center min-w-[156px] sm:min-w-[189px] min-w-[156px] sm:max-w-[189px] gap-x-[8px] rounded-md py-[10px] px-[20px] cursor-pointer ease-in duration-500 hover:bg-gradient-to-r hover:from-bg-secondary hover:to-text-secondary hover:text-bg-primary  bg-bg-primary text-text-primary border-[1px] border-text-secondary transition duration-500`}>
                        <ComponentIcon name="dowload" size={16} description_class="group-hover:text-bg-primary text-text-primary w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" />
                        <span className="text-[15px] sm:text-[20px] font-semibold">
                            {t('start.txt_4')}
                        </span>
                    </a>
                    <ComponentMessage open={completed} setOpen={setCompleted} view_url={view_url} />
                </div>
            </article>
            <article className={`${(isWidth) ? 'sandwich-background' : 'pr-5'} ${animate ? 'animate-[presentationRight_1.6s_ease-in-out]' : 'opacity-0'} relative grid place-items-center lg:justify-end lg:items-center col-span-full mt-16 lg:mt-0 lg:col-span-1 h-full`}>
                <img className={`${animate ? 'animate-[presentationRight_1.6s_ease-in-out]' : 'opacity-0'} transition duration-500 w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] rounded-md`} src="/images/perfil.jpg" alt={t("start.image.alt")} />
            </article>
        </section>
    )
}