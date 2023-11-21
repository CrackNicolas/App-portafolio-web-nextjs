import { Fragment } from 'react';

import ComponentTools from '../partials/about/tools';
import ComponentLayout from './layout';

import { Use_translation } from "@/i18n/logic/use_translation";

import { type Props_section } from '@/types/props';

export default function ComponentAbout(props: Props_section) {
    const { animate } = props;

    const t = Use_translation(1);

    return (
        <ComponentLayout {...props} id="about" children={
            <Fragment>
                <h4 className={`${animate ? 'animate-[presentationLeft_1.1s_ease-in-out]' : 'opacity-0'} text-primary dark:text-tertiary font-bold text-[22px] ml:text-[30px] sm:text-[38px] tracking-widest`}>
                    {t('about.subtitle')}
                </h4>
                <p className={`${animate ? 'animate-[presentationLeft_1.3s_ease-in-out] opacity-80' : 'opacity-0'} text-primary dark:text-tertiary ml:text-[18px] sm:text-[20px] mb-[45px] leading-6`}>
                    {t('about.description')}
                </p>
                <article className={`${animate ? 'animate-[presentationBottom_1.5s_ease-in-out]' : 'opacity-0'} relative shadow-md shadow-primary dark:shadow-secondary cursor-pointer transition duration-500 hover:shadow-none hover:border-secondary border-[0.1px] dark:border-secondary rounded-md rounded-tr-none w-full grid px-3 py-8 grid-cols-4 ml:px-4 ml:py-8 ml:grid-cols-5 sm:py-8 md:grid-cols-8 lg:px-5 lg:py-11 lg:grid-cols-9 gap-[15px] ml:gap-[35px] items-center`}>
                    <ComponentTools type="icon" name="Next.js" size={33} view_box="0 0 180 180" description_text="mt-[-3px]" />
                    <ComponentTools type="icon" name="React" size={30} view_box="-10.5 -9.45 21 18.9" color="text-blue-500" />
                    <ComponentTools type="image" name="Angular" size={37} description_image="mt-[-4px]" description_text="mt-[-3px]" />
                    <ComponentTools type="image" name="TypeScript" size={26} description_image="mt-[2px]" description_text="mt-[1px]" />
                    <ComponentTools type="image" name="JavaScript" size={33} description_image="mt-[-1px]" description_text="mt-[-3px]" />
                    <ComponentTools type="image" name="Node.js" size={30} />
                    <ComponentTools type="image" name="CSS" size={35} description_image="mt-[-1px]" description_text="mt-[-3px]" />
                    <ComponentTools type="image" name="Tailwind" size={37} description_image="mt-[-1px]" description_text="mt-[-4px]" />
                    <ComponentTools type="icon" name="Bootstrap" size={33} view_box="0 0 120 94" color="text-purple-800" />
                    <ComponentTools type="image" name="HTML" size={35} />
                    <ComponentTools type="image" name="Java" size={37} description_image="mt-[-2px]" />
                    <ComponentTools type="image" name="PHP" size={35} />
                    <ComponentTools type="image" name="C/C++" size={35} />
                    <ComponentTools type="image" name="MongoDB" size={44} description_text="mt-[3px]" />
                    <ComponentTools type="image" name="MySql" size={35} description_image="mt-[-1px]" description_text="mt-[-6px]" />
                    <ComponentTools type="image" name="Scrum" size={33} description_text="mt-[-5px]" />
                    <ComponentTools type="image" name="Jira" size={30} />
                    <ComponentTools type="image" name="Trello" size={30} />
                    <div className="break-before absolute py-[2px] right-[-0.5px] rounded-t-md top-[-29.5px] w-[130px] text-center border-[1px] border-secondary bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary cursor-pointer text-tertiary font-bold tracking-wider">
                        {
                            t("about.skills")
                        }
                    </div>
                </article>
            </Fragment>
        } />
    )
}