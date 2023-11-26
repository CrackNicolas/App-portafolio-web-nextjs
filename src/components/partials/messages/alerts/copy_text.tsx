import { Dialog } from '@headlessui/react';

import Use_translation from '@/context/translation/use';

import ComponentIcon from '../../icon';
import ComponentLayout from './layout';

import { Props_modal } from '@/types/props';

export default function ComponentMessageCopyText(props: Props_modal) {
    const { open, setOpen } = props;

    const { translate } = Use_translation();

    return (
        <ComponentLayout open={open} setOpen={setOpen} children={
            <div className="flex flex-col items-center gap-y-5 px-3 sm:px-7 py-7">
                <div className="flex h-12 w-12 place-items-center justify-center rounded-full dark:bg-primary dark:border-[1px] dark:border-secondary bg-blue-100">
                    <ComponentIcon name='copy' description_class='cursor-pointer dark:hover:text-tertiary text-secondary' size={24} />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-center font-semibold leading-6 text-secondary">
                        {
                            translate("contact.validations.message.type.copy.title")
                        }
                    </Dialog.Title>
                </div>
            </div>
        } />
    )
}