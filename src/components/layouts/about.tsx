import { useState } from 'react';

import ComponentIcon from '../partials/icon';
import ComponentImage from '../partials/image';
import ComponentNameSection from '../partials/name_section';

import { Use_translation } from "@/i18n/logic/use_translation";

type Props = {
    animate: boolean
}

export default function ComponentAbout(props: Props) {
    const { animate } = props;

    const [focus, setFocus] = useState<string>("Skills");

    const t = Use_translation(1);

    return (
        <section id="about" className="px-[10px] sm:px-[30px] lg:pl-[70px] flex flex-col gap-[20px] m-auto max-w-[1200px] pt-[65px] lg:pt-[80px]">
            <article className="flex flex-col">
                <ComponentNameSection animate={animate} name="about.title" icon="user"/>
                <h4 className={`${animate && 'animate-[presentationLeft_1.1s_ease-in-out]'} text-text-primary font-bold text-[22px] ml:text-[30px] sm:text-[38px] pt-[8px] tracking-widest`}>
                    {t('about.subtitle')}
                </h4>
                <p className={`${animate && 'animate-[presentationLeft_1.3s_ease-in-out]'} mt-2 text-text-primary ml:text-[18px] sm:text-[20px] opacity-80 mb-[50px] leading-6`}>
                    {t('about.description')}
                </p>
                <article className={`${animate && 'animate-[presentationBottom_1.5s_ease-in-out]'} relative hover:shadow-md hover:shadow-text-primary cursor-pointer transition duration-500 border-[1px] border-text-secondary rounded-md rounded-tr-none w-full mb-[100px] grid px-3 py-8 grid-cols-4 ml:px-4 ml:py-8 ml:grid-cols-6 sm:py-8 sm:grid-cols-7 md:grid-cols-8 lg:px-5 lg:py-11 lg:grid-cols-9 gap-[15px] ml:gap-[35px] items-center`}>
                    <div className="w-full flex items-center flex-col pt-[5px] h-[60px]">
                        <ComponentIcon name="Next.js" size={30} description_class="hover:translate-y-[-3px]" view_box='0 0 180 180' focus={setFocus} />
                        <span className='mt-1 hover:font-semibold font-normal transition duration-500 text-text-secondary text-[14px]'>Next.js</span>
                    </div>
                    <div className="w-full flex items-center flex-col pt-[5px] h-[60px]">
                        <ComponentIcon name="React" size={30} description_class="hover:translate-y-[-3px] text-blue-500" view_box='-10.5 -9.45 21 18.9' focus={setFocus} />
                        <span className='mt-1 hover:font-semibold font-normal transition duration-500 text-text-secondary text-[14px]'>React</span>
                    </div>
                    <div className="w-full flex items-center flex-col h-[60px]">
                        <ComponentImage name="Angular" description_class="w-[38px] h-[38px] hover:translate-y-[-3px]" focus={setFocus} />
                        <span className='mt-[1px] hover:font-semibold font-normal transition duration-500 text-text-secondary text-[14px]'>Angular</span>
                    </div>
                    <div className="w-full flex items-center flex-col pt-[5px] h-[60px]">
                        <ComponentImage name="TypeScript" description_class="w-[28px] h-[28px] hover:translate-y-[-3px]" focus={setFocus} />
                        <span className='mt-[5.5px] hover:font-semibold font-normal transition duration-500 text-text-secondary text-[14px]'>TypeScript</span>
                    </div>
                    <div className="w-full flex items-center flex-col h-[60px]">
                        <ComponentImage name="JavaScript" description_class="w-[38px] h-[38px] hover:translate-y-[-3px]" focus={setFocus} />
                        <span className='hover:font-semibold font-normal transition duration-500 text-text-secondary text-[14px]'>JavaScript</span>
                    </div>
                    <div className="w-full flex items-center flex-col pt-[3px] h-[60px]">
                        <ComponentImage name="Node.js" description_class="w-[35px] h-[35px] hover:translate-y-[-3px]" focus={setFocus} />
                        <span className='hover:font-semibold font-normal transition duration-500 text-text-secondary text-[14px]'>Node.js</span>
                    </div>
                    <div className="w-full flex items-center flex-col pt-[1px] h-[60px]">
                        <ComponentImage name="CSS" description_class="w-[38px] h-[38px] hover:translate-y-[-3px]" focus={setFocus} />
                        <span className='hover:font-semibold font-normal transition duration-500 text-text-secondary text-[14px]'>CSS</span>
                    </div>
                    <div className="w-full flex items-center flex-col h-[60px]">
                        <ComponentImage name="Tailwind" description_class="w-[35px] h-[35px] hover:translate-y-[-3px]" focus={setFocus} />
                        <span className='mt-1 hover:font-semibold font-normal transition duration-500 text-text-secondary text-[14px]'>Tailwind</span>
                    </div>
                    <div className="w-full flex items-center flex-col pt-[1px] h-[60px]">
                        <ComponentIcon name="Bootstrap" size={35} description_class="hover:translate-y-[-3px] text-purple-800" view_box='0 0 120 94' focus={setFocus} />
                        <span className='mt-1 hover:font-semibold font-normal transition duration-500 text-text-secondary text-[14px]'>Bootstrap</span>
                    </div>
                    <div className="w-full flex items-center flex-col pt-[1.5px] h-[60px]">
                        <ComponentImage name="HTML" description_class="w-[38px] h-[38px] hover:translate-y-[-3px]" focus={setFocus} />
                        <span className='hover:font-semibold font-normal transition duration-500 text-text-secondary text-[14px]'>HTML</span>
                    </div>
                    <div className="w-full flex items-center flex-col pt-[1px] h-[60px]">
                        <ComponentImage name="Java" description_class="w-[38px] h-[38px] hover:translate-y-[-3px]" focus={setFocus} />
                        <span className='hover:font-semibold font-normal transition duration-500 text-text-secondary text-[14px]'>Java</span>
                    </div>
                    <div className="w-full flex items-center flex-col pt-[1.5px] h-[60px]">
                        <ComponentImage name="PHP" description_class="w-[37px] h-[37px] hover:translate-y-[-3px]" focus={setFocus} />
                        <span className='mt-[1.5px] hover:font-semibold font-normal transition duration-500 text-text-secondary text-[14px]'>PHP</span>
                    </div>
                    <div className="w-full flex items-center flex-col pt-[3px] h-[60px]">
                        <ComponentImage name="C/C++" description_class="w-[35px] h-[35px] hover:translate-y-[-3px]" focus={setFocus} />
                        <span className='mt-[1.5px] hover:font-semibold font-normal transition duration-500 text-text-secondary text-[14px]'>C/C++</span>
                    </div>
                    <div className="w-full flex items-center flex-col pt-[5px] h-[60px]">
                        <ComponentImage name="MongoDB" description_class="w-[35px] h-[35px] hover:translate-y-[-3px]" focus={setFocus} />
                        <span className='mt-[2px] hover:font-semibold font-normal transition duration-500 text-text-secondary text-[14px]'>MongoDB</span>
                    </div>
                    <div className="w-full flex items-center flex-col h-[60px]">
                        <ComponentImage name="MySql" description_class="w-[37px] h-[37px] hover:translate-y-[-3px]" focus={setFocus} />
                        <span className='mt-[1px] hover:font-semibold font-normal transition duration-500 text-text-secondary text-[14px]'>MySql</span>
                    </div>
                    <div className="w-full flex items-center flex-col pt-[5px] h-[60px]">
                        <ComponentImage name="Scrum" description_class="w-[32px] h-[32px] hover:translate-y-[-3px]" focus={setFocus} />
                        <span className='mt-[2px] hover:font-semibold font-normal transition duration-500 text-text-secondary text-[14px]'>Scrum</span>
                    </div>
                    <div className="w-full flex items-center flex-col pt-[5px] h-[60px]">
                        <ComponentImage name="Jira" description_class="w-[32px] h-[32px] hover:translate-y-[-3px]" focus={setFocus} />
                        <span className='mt-[2px] hover:font-semibold font-normal transition duration-500 text-text-secondary text-[14px]'>Jira</span>
                    </div>
                    <div className="w-full flex items-center flex-col pt-[5px] h-[60px]">
                        <ComponentImage name="Trello" description_class="w-[32px] h-[32px] hover:translate-y-[-3px]" focus={setFocus} />
                        <span className='mt-[2px] hover:font-semibold font-normal transition duration-500 text-text-secondary text-[14px]'>Trello</span>
                    </div>
                    <div className="break-before absolute py-[2px] right-[-0.5px] rounded-t-md top-[-29.5px] w-[130px] text-center border-[1px] border-text-secondary bg-bg-secondary text-bg-primary font-bold tracking-wider hover:bg-bg-primary hover:text-text-secondary transition duration-500">
                        {focus}
                    </div>
                </article>
            </article>
        </section>
    )
}