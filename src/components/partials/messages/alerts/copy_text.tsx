import { Dialog } from '@headlessui/react';

import ComponentIcon from '../../icon';
import ComponentLayout from './layout';

import { Use_translation } from "@/i18n/logic/use_translation";

type Props = {
    open: boolean,
    setOpen: any
}

export default function ComponentMessageCopyText(props: Props) {
    const { open, setOpen } = props;

    const t = Use_translation(1);

    return (
        <ComponentLayout open={open} setOpen={setOpen} children={
            <div className="flex flex-col items-center gap-y-5 px-3 sm:px-7 py-7">
                <div className="flex h-12 w-12 place-items-center justify-center rounded-full bg-blue-100">
                    <ComponentIcon name='copy' description_class='cursor-wait text-text-secondary' size={24} />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-center font-semibold leading-6 text-text-secondary">
                        {
                            t("contact.validations.message.type.copy.title")
                        }
                    </Dialog.Title>
                </div>
            </div>
        } />
    )
}