import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react';

import ComponentIcon from '../icon';

import { Use_translation } from "@/i18n/logic/use_translation";

type Props = {
    open: boolean,
    setOpen: any,
    view_url?: string
}

export default function ComponentMessageConfirmation(props: Props) {
    const { open, setOpen, view_url = "" } = props;

    const t = Use_translation(1);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={setOpen}>
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-bg-primary shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="flex flex-col items-center gap-y-3 px-3 sm:px-7 py-7">
                                    <div className="flex h-12 w-12 place-items-center justify-center rounded-full bg-blue-100">
                                        <ComponentIcon name='check-2' description_class='cursor-not-allowed mt-1 text-text-secondary' size={25} />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                        <Dialog.Title as="h3" className="text-center font-semibold leading-6 text-text-secondary">
                                            {
                                                t((view_url !== "") ? 'start.message.title' : 'contact.validations.message.success.title')
                                            }
                                        </Dialog.Title>
                                        <p className="text-center text-sm text-gray-500">
                                            {
                                                t((view_url !== "") ? 'start.message.description' : 'contact.validations.message.success.description')
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className={`flex gap-x-1 py-3 px-3 sm:px-7 ${(view_url !== "") ? 'justify-between' : 'justify-center'} `}>
                                    {
                                        (view_url !== "") &&
                                        <a href={view_url} target="_blank" rel="noopener noreferrer" className="hover:bg-bg-primary hover:text-text-secondary border-[1px] border-text-secondary transition duration-500 outline-none w-[180px] rounded-md bg-text-secondary py-[5px] font-semibold text-bg-primary">
                                            {
                                                t('start.message.buttons.b_1')
                                            }
                                        </a>
                                    }
                                    <button type="button" className={`${(view_url !== "") ? 'bg-red-500 border-red-500 hover:text-red-500 w-[180px]' : 'w-[200px] bg-text-secondary border-text-secondary hover:text-text-secondary'} hover:bg-bg-primary border-[1px] transition duration-500 outline-none rounded-md py-[5px] font-semibold text-bg-primary`} onClick={() => setOpen(false)}>
                                        {
                                            t((view_url !== "") ? 'start.message.buttons.b_2' : 'contact.validations.message.success.button')
                                        }
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}