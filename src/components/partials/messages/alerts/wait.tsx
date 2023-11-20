import { Dialog } from '@headlessui/react';

import ComponentIcon from '../../icon';
import ComponentLayout from './layout';

import { Use_translation } from "@/i18n/logic/use_translation";

import { type Props_modal } from '@/types/props';

export default function ComponentMessageWait(props: Props_modal) {
    const { open, setOpen } = props;

    const t = Use_translation(1);

    return (
        <ComponentLayout open={open} setOpen={setOpen} children={
            <div className="flex flex-col items-center gap-y-5 px-3 sm:px-7 py-7">
                <div className="flex h-12 w-12 place-items-center justify-center rounded-full bg-gray-100">
                    <ComponentIcon name='wait' description_class='cursor-wait text-gray-500' size={24} />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-center font-semibold leading-6 text-gray-500">
                        {
                            t("contact.validations.message.type.wait.title")
                        }
                    </Dialog.Title>
                    <p className="text-center text-sm text-gray-500">
                        {
                            t('contact.validations.message.type.wait.description')
                        }
                    </p>
                </div>
                <div className="mt-1 flex gap-x-4 place-items-center justify-center">
                    <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
                </div>
            </div>
        } />
    )
}