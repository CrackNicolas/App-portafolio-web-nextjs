import Use_translation from '@/context/translation/use';

import ComponentIcon from '../../icon';
import ComponentLayout from '../../modal';

import { Props_modal } from '@/types/props';

export default function ComponentMessageError(props: Props_modal) {
    const { open, setOpen } = props;

    const { translate } = Use_translation();

    return (
        <ComponentLayout open={open} setOpen={setOpen}>
            <div className="flex flex-col items-center gap-y-3 px-3 sm:px-7 py-7">
                <div className="group cursor-pointer flex h-12 w-12 place-items-center justify-center rounded-full dark:border-[0.1px] dark:border-red-500 dark:bg-transparent bg-red-100">
                    <ComponentIcon name='bug' description_class='group-hover:translate-y-[-2px] dark:group-hover:text-tertiary mt-[1px] text-red-500' size={25} />
                </div>
                <div className="flex flex-col items-center mt-3 text-center sm:mt-0 sm:text-left">
                    <span className="text-center font-semibold leading-6 text-red-500">
                        {
                            translate('contact.validations.message.type.error.title')
                        }
                    </span>
                    <p className="text-center text-sm text-gray-500">
                        {
                            translate('contact.validations.message.type.error.description')
                        }
                    </p>
                </div>
            </div>
            <div className="flex gap-x-1 py-3 px-3 sm:px-7 justify-center">
                <button type="button" className="w-[200px] bg-red-500 dark:border-transparent border-red-500 hover:text-red-500 hover:bg-tertiary border-[1px] transition duration-500 outline-none rounded-md py-[5px] font-semibold text-tertiary" onClick={() => setOpen(false)}>
                    {
                        translate('contact.validations.message.button')
                    }
                </button>
            </div>
        </ComponentLayout>
    )
}