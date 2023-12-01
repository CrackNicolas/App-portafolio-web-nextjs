import Image from "next/image";
import Next_link from "next/link";

import { Link } from "react-scroll";
import { useState } from "react";

import Use_theme from "@/context/theme/use";
import Use_translation from "@/context/translation/use";

import ComponentIcon from "../partials/icon";
import ComponentMessage from "../partials/messages/alerts/confirmation";

import { Media_query } from "@/logic/page/media_query";

export default function ComponentStart() {
    const { theme } = Use_theme();
    const { translate } = Use_translation();

    const domain = process.env.DEVELOPMENT_DOMAIN;

    const isWidth = Media_query("1024");

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
        <section id="init" className={`relative grid items-center grid-cols-2 pb-[80px] pt-[40px] px-[10px] sm:px-[22px] lg:grid-cols-3 lg:pl-[80px] lg:pb-[180px] lg:pt-[80px] max-w-[1275px] mb-16 mx-auto`}>
            <article className={`${(!isWidth) && `${(theme === 'dark') ? 'sandwich-background-dark' : 'sandwich-background-light'}`} flex flex-col col-span-2 h-full`}>
                <h1 className={` dark:text-tertiary text-primary tracking-wider text-[20px] sm:text-[23px] font-semibold`}>
                    {translate('start.txt_1')}
                </h1>
                <h2 className={`text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary dark:from-secondary dark:via-tertiary text-[40px] ml:text-[50px] sm:text-[58px] font-bold mb-[10px] tracking-wider text-secondary`}>
                    Alejo Beltran
                </h2>
                <h3 className={` dark:text-tertiary text-primary text-[18px] sm:text-[20px] font-semibold`}>
                    Full Stack Development
                </h3>
                <p className={`text-[15px] dark:text-tertiary text-primary opacity-100 dark:opacity-50 h-[92px] mb-[20px] sm:mb-[30px] min-w-[200px] max-w-[450px]`}>
                    {translate('start.txt_2')}
                </p>
                <div className="flex items-center gap-x-6 mb-[22px] sm:mb-[30px] px-[1px] w-[309.5px] sm:w-[376.1px]">
                    <Next_link href="https://www.linkedin.com/in/nicolas-alejo-beltran/" title="Linkedin" target="_blank" rel="noopener noreferrer" className={` group dark:hover:opacity-100 dark:opacity-50 rounded-full cursor-pointer transition duration-500`}>
                        <ComponentIcon name="linkedin" size={18} description_class="dark:text-tertiary hover:text-secondary text-primary" />
                    </Next_link>
                    <Next_link href="https://github.com/CrackNicolas" title="Git" target="_blank" rel="noopener noreferrer" className={` group dark:hover:opacity-100 dark:opacity-50 rounded-full cursor-pointer transition duration-500`}>
                        <ComponentIcon name="git" size={20} description_class="dark:text-tertiary hover:text-secondary text-primary" />
                    </Next_link>
                    <span className={` opacity-100 dark:opacity-50 w-full h-[0.1px] bg-primary dark:bg-tertiary`}></span>
                </div>
                <div className="flex gap-x-[10px] sm:gap-x-[15px] w-[309.5px] sm:w-[376.1px]">
                    <Link to="contact" href="#contact" spy={true} smooth={true} offset={0} duration={500} title={translate('start.txt_3')} rel="noopener noreferrer" className={` bg-gradient-to-r from-primary to-secondary flex items-center min-w-[145px] sm:min-w-[171px] min-w-[145px] sm:max-w-[171px] gap-x-[8px] rounded-md py-[10px] px-[20px] cursor-pointer text-tertiary bg-secondary hover:opacity-90 border-[1px] border-secondary transition duration-500`}>
                        <ComponentIcon name="contact" size={16} description_class="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" />
                        <span className="text-[15px] sm:text-[20px] font-semibold">
                            {translate('start.txt_3')}
                        </span>
                    </Link>
                    <a onClick={handle_download} href={`${domain}/pdf/Curriculum Beltran Alejo.pdf`} title={translate('start.txt_4')} rel="noopener noreferrer" download="Curriculum Beltran Alejo.pdf" className={`group flex items-center min-w-[156px] sm:min-w-[189px] min-w-[156px] sm:max-w-[189px] gap-x-[8px] rounded-md py-[10px] px-[20px] cursor-pointer ease-in duration-500 hover:bg-gradient-to-r from-primary to-secondary hover:text-tertiary bg-tertiary text-primary border-[1px] border-secondary dark:hover:border-secondary dark:border-tertiary transition duration-500`}>
                        <ComponentIcon name="dowload" size={16} description_class="group-hover:text-tertiary text-primary w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" />
                        <span className="text-[15px] sm:text-[20px] font-semibold">
                            {translate('start.txt_4')}
                        </span>
                    </a>
                    <ComponentMessage open={completed} setOpen={setCompleted} view_url={view_url} />
                </div>
            </article>
            <article className={`${(isWidth) ? 'sandwich-background-dark' : 'pr-5'} wave-div  relative grid place-items-center col-span-full mt-16 lg:justify-end lg:items-center lg:mt-0 lg:col-span-1 h-[170px]`}></article>
        </section>
    )
}