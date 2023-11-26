import { Fragment, useEffect, useContext } from 'react'

import { Dialog, Transition } from '@headlessui/react';

import Context_theme from '@/context/theme/instance'
import Context_translation from "@/context/translation/instance";

import ComponentIcon from '../icon';

import { Use_window_width } from '@/logic/page/size';

type Props = {
    open: boolean,
    setOpen: any
}

export default function ComponentToggle(props: Props) {
    const { open, setOpen } = props;

    const { theme, update_theme } = useContext(Context_theme);
    const { language, update_language, translate } = useContext(Context_translation);

    const width = Use_window_width();

    useEffect(() => {
        if (width > 450) {
            setOpen(false);
        }
    }, [width]);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={setOpen}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center items-center sm:p-0">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg dark:bg-primary bg-tertiary shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div onClick={() => setOpen(false)} className="absolute right-2 top-2">
                                    <ComponentIcon name="close" size={20} description_class="text-red-500" />
                                </div>
                                <div className='flex flex-col gap-5 py-9 px-4 w-[300px]'>
                                    <Dialog.Title as="h3" className="text-center font-semibold leading-6 text-secondary dark:text-tertiary border-b-[1px] dark:border-tertiary border-secondary pb-1 rounded-lg">
                                        {
                                            translate('toggle.title.theme')
                                        }
                                    </Dialog.Title>
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
                                    <Dialog.Title as="h3" className="text-center font-semibold leading-6 text-secondary dark:text-tertiary border-b-[1px] dark:border-tertiary border-secondary pb-1 rounded-lg">
                                        {
                                            translate('toggle.title.lenguaje')
                                        }
                                    </Dialog.Title>
                                    <div className='flex mx-auto flex-col w-[150px] gap-y-2'>
                                        <span onClick={() => update_language('en')} className={`border-x-[15px] rounded-full ${(language === "es") ? 'text-secondary border-secondary' : 'text-primary dark:text-tertiary border-transparent'} `}>
                                            {
                                                translate('toggle.lenguaje.l_1')
                                            }
                                        </span>
                                        <span onClick={() => update_language('es')} className={`border-x-[15px] rounded-full ${(language === "en") ? 'text-secondary border-secondary' : 'text-primary dark:text-tertiary border-transparent'} `}>
                                            {
                                                translate('toggle.lenguaje.l_2')
                                            }
                                        </span>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}