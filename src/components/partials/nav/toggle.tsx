import { useEffect } from 'react'

import Use_theme from '@/context/theme/use';
import Use_translation from '@/context/translation/use';

import ComponentIcon from '../icon';
import ComponentLayout from '../modal';

import { Use_window_width } from '@/logic/page/size';

import { Props_modal } from '@/types/props';

export default function ComponentToggle(props: Props_modal) {
    const { open, setOpen } = props;

    const { theme, update_theme } = Use_theme();
    const { language, update_language, translate } = Use_translation();

    const width = Use_window_width();

    const refresh = (data: string) => {
        window.location.reload();
        update_language(data);
    }

    useEffect(() => {
        if (width > 450) {
            setOpen(false);
        }
    }, [width]);

    return (
        <ComponentLayout open={open} setOpen={setOpen}>
            <div onClick={() => setOpen(false)} className="absolute right-2 top-2">
                <ComponentIcon name="close" size={20} description_class="text-red-500" />
            </div>
            <div className='flex flex-col gap-5 py-9 px-4 w-[300px]'>
                <span className="text-center font-semibold leading-6 text-secondary dark:text-tertiary border-b-[1px] dark:border-tertiary border-secondary pb-1 rounded-lg">
                    {
                        translate('toggle.title.theme')
                    }
                </span>
                <div className='flex justify-between w-full'>
                    <div onClick={() => update_theme("light")} className="group flex w-full place-items-center justify-center rounded-sm transition duration-500">
                        <ComponentIcon name={(theme === "dark") ? 'dark' : 'dark-light'} size={25} description_class={`mt-[1px] ${(theme === 'dark') ? 'text-secondary' : 'text-primary dark:text-tertiary'}`} />
                    </div>
                    <div onClick={() => update_theme("dark")} className="group flex w-full place-items-center justify-center rounded-sm transition duration-500">
                        <ComponentIcon name={(theme === "light") ? 'light-dark' : 'light'} size={25} description_class={`mt-[1px] ${(theme === 'light') ? 'text-secondary' : 'text-primary dark:text-tertiary'}`} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5 pb-5 px-4 w-[300px]'>
                <span className="text-center font-semibold leading-6 text-secondary dark:text-tertiary border-b-[1px] dark:border-tertiary border-secondary pb-1 rounded-lg">
                    {
                        translate('toggle.title.lenguaje')
                    }
                </span>
                <div className='flex mx-auto flex-col w-[150px] gap-y-2'>
                    <span onClick={() => refresh('es')} className={`py-[2px] border-x-[15px] rounded-full ${(language === "es") ? 'text-secondary border-secondary' : 'text-primary dark:text-tertiary border-transparent'} `}>
                        {
                            translate('toggle.lenguaje.l_1')
                        }
                    </span>
                    <span onClick={() => refresh('en')} className={`py-[2px] border-x-[15px] rounded-full ${(language === "en") ? 'text-secondary border-secondary' : 'text-primary dark:text-tertiary border-transparent'} `}>
                        {
                            translate('toggle.lenguaje.l_2')
                        }
                    </span>
                </div>
            </div>
        </ComponentLayout>
    )
}