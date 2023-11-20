import { Fragment } from 'react'
import { Dialog } from '@headlessui/react';

import ComponentIcon from '../../icon';
import ComponentLayout from './layout';

import { Use_translation } from "@/i18n/logic/use_translation";

import { type Props_modal } from '@/types/props';

export default function ComponentMessageWarning(props: Props_modal) {
    const { open, setOpen } = props;

    const t = Use_translation(1);

    return (
        <ComponentLayout open={open} setOpen={setOpen} children={
            <Fragment>
                <div className="flex flex-col items-center gap-y-3 px-3 sm:px-7 py-7">
                    <div className="flex h-12 w-12 place-items-center justify-center rounded-full bg-yellow-100">
                        <ComponentIcon name='warning' description_class='cursor-not-allowed mt-1 text-yellow-500' size={25} />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-center font-semibold leading-6 text-yellow-500">
                            {
                                t("contact.validations.message.type.warning.title")
                            }
                        </Dialog.Title>
                        <p className="text-center text-sm text-gray-500">
                            {
                                t('contact.validations.message.type.warning.description')
                            }
                        </p>
                    </div>
                </div>
                <div className="flex gap-x-1 py-3 px-3 sm:px-7 justify-center">
                    <button type="button" className="w-[200px] bg-yellow-500 dark:border-transparent border-yellow-500 dark:hover:text-primary hover:text-yellow-500 hover:bg-tertiary border-[1px] transition duration-500 outline-none rounded-md py-[5px] font-semibold text-text-primary" onClick={() => setOpen(false)}>
                        {
                            t("contact.validations.message.button")
                        }
                    </button>
                </div>
            </Fragment>
        } />
    )
}