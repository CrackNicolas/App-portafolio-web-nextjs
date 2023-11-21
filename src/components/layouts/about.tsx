import { Fragment } from 'react';

import ComponentIcon from '../partials/icon';
import ComponentImage from '../partials/image';
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
                <article className={`${animate ? 'animate-[presentationBottom_1.5s_ease-in-out]' : 'opacity-0'} relative shadow-md shadow-primary dark:shadow-secondary cursor-pointer transition duration-500 hover:shadow-none hover:border-secondary border-[0.1px] dark:border-secondary rounded-md rounded-tr-none w-full grid px-3 py-8 grid-cols-4 ml:px-4 ml:py-8 ml:grid-cols-6 sm:py-8 sm:grid-cols-7 md:grid-cols-8 lg:px-5 lg:py-11 lg:grid-cols-9 gap-[15px] ml:gap-[35px] items-center`}>
                    <div className="group w-full flex items-center flex-col pt-[5px] h-[60px]">
                        <ComponentIcon name="Next.js" size={30} description_class="hover:translate-y-[-3px]" view_box='0 0 180 180' />
                        <span className='mt-1 hover:font-semibold font-normal group-hover:text-secondary text-primary dark:text-tertiary text-[14px]'>Next.js</span>
                    </div>
                    <div className="group w-full flex items-center flex-col pt-[5px] h-[60px]">
                        <ComponentIcon name="React" size={30} description_class="hover:translate-y-[-3px] text-blue-500" view_box='-10.5 -9.45 21 18.9' />
                        <span className='mt-1 hover:font-semibold font-normal group-hover:text-secondary text-primary dark:text-tertiary text-[14px]'>React</span>
                    </div>
                    <div className="group w-full flex items-center flex-col h-[60px]">
                        <ComponentImage name="Angular" size={38} description_class="hover:translate-y-[-3px]" />
                        <span className='mt-[1px] hover:font-semibold font-normal group-hover:text-secondary text-primary dark:text-tertiary text-[14px]'>Angular</span>
                    </div>
                    <div className="group w-full flex items-center flex-col pt-[5px] h-[60px]">
                        <ComponentImage name="TypeScript" size={28} description_class="hover:translate-y-[-3px]" />
                        <span className='mt-[5.5px] hover:font-semibold font-normal group-hover:text-secondary text-primary dark:text-tertiary text-[14px]'>TypeScript</span>
                    </div>
                    <div className="group w-full flex items-center flex-col h-[60px]">
                        <ComponentImage name="JavaScript" size={38} description_class="hover:translate-y-[-3px]" />
                        <span className='hover:font-semibold font-normal group-hover:text-secondary text-primary dark:text-tertiary text-[14px]'>JavaScript</span>
                    </div>
                    <div className="group w-full flex items-center flex-col pt-[3px] h-[60px]">
                        <ComponentImage name="Node.js" size={35} description_class="hover:translate-y-[-3px]" />
                        <span className='hover:font-semibold font-normal group-hover:text-secondary text-primary dark:text-tertiary text-[14px]'>Node.js</span>
                    </div>
                    <div className="group w-full flex items-center flex-col pt-[1px] h-[60px]">
                        <ComponentImage name="CSS" size={38} description_class="hover:translate-y-[-3px]" />
                        <span className='hover:font-semibold font-normal group-hover:text-secondary text-primary dark:text-tertiary text-[14px]'>CSS</span>
                    </div>
                    <div className="group w-full flex items-center flex-col h-[60px]">
                        <ComponentImage name="Tailwind" size={35} description_class="hover:translate-y-[-3px]" />
                        <span className='mt-1 hover:font-semibold font-normal group-hover:text-secondary text-primary dark:text-tertiary text-[14px]'>Tailwind</span>
                    </div>
                    <div className="group w-full flex items-center flex-col pt-[1px] h-[60px]">
                        <ComponentIcon name="Bootstrap" size={35} description_class="hover:translate-y-[-3px] text-purple-800" view_box='0 0 120 94' />
                        <span className='mt-1 hover:font-semibold font-normal group-hover:text-secondary text-primary dark:text-tertiary text-[14px]'>Bootstrap</span>
                    </div>
                    <div className="group w-full flex items-center flex-col pt-[1.5px] h-[60px]">
                        <ComponentImage name="HTML" size={38} description_class="hover:translate-y-[-3px]" />
                        <span className='hover:font-semibold font-normal group-hover:text-secondary text-primary dark:text-tertiary text-[14px]'>HTML</span>
                    </div>
                    <div className="group w-full flex items-center flex-col pt-[1px] h-[60px]">
                        <ComponentImage name="Java" size={38} description_class="hover:translate-y-[-3px]" />
                        <span className='hover:font-semibold font-normal group-hover:text-secondary text-primary dark:text-tertiary text-[14px]'>Java</span>
                    </div>
                    <div className="group w-full flex items-center flex-col pt-[1.5px] h-[60px]">
                        <ComponentImage name="PHP" size={37} description_class="hover:translate-y-[-3px]" />
                        <span className='mt-[1.5px] hover:font-semibold font-normal group-hover:text-secondary text-primary dark:text-tertiary text-[14px]'>PHP</span>
                    </div>
                    <div className="group w-full flex items-center flex-col pt-[3px] h-[60px]">
                        <ComponentImage name="C/C++" size={35} description_class="hover:translate-y-[-3px]" />
                        <span className='mt-[1.5px] hover:font-semibold font-normal group-hover:text-secondary text-primary dark:text-tertiary text-[14px]'>C/C++</span>
                    </div>
                    <div className="group w-full flex items-center flex-col pt-[5px] h-[60px]">
                        <ComponentImage name="MongoDB" size={35} description_class="hover:translate-y-[-3px]" />
                        <span className='mt-[2px] hover:font-semibold font-normal group-hover:text-secondary text-primary dark:text-tertiary text-[14px]'>MongoDB</span>
                    </div>
                    <div className="group w-full flex items-center flex-col h-[60px]">
                        <ComponentImage name="MySql" size={37} description_class="hover:translate-y-[-3px]" />
                        <span className='mt-[1px] hover:font-semibold font-normal group-hover:text-secondary text-primary dark:text-tertiary text-[14px]'>MySql</span>
                    </div>
                    <div className="group w-full flex items-center flex-col pt-[5px] h-[60px]">
                        <ComponentImage name="Scrum" size={32} description_class="hover:translate-y-[-3px]" />
                        <span className='mt-[2px] hover:font-semibold font-normal group-hover:text-secondary text-primary dark:text-tertiary text-[14px]'>Scrum</span>
                    </div>
                    <div className="group w-full flex items-center flex-col pt-[5px] h-[60px]">
                        <ComponentImage name="Jira" size={32} description_class="hover:translate-y-[-3px]" />
                        <span className='mt-[2px] hover:font-semibold font-normal group-hover:text-secondary text-primary dark:text-tertiary text-[14px]'>Jira</span>
                    </div>
                    <div className="group w-full flex items-center flex-col pt-[5px] h-[60px]">
                        <ComponentImage name="Trello" size={32} description_class="hover:translate-y-[-3px]" />
                        <span className='mt-[2px] hover:font-semibold font-normal group-hover:text-secondary text-primary dark:text-tertiary text-[14px]'>Trello</span>
                    </div>
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