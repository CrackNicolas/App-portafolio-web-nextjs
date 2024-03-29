import Use_translation from '@/context/translation/use';

import ComponentIcon from '../../icon';
import ComponentLayout from '../../modal';

import { Props_modal } from '@/types/props';

export default function ComponentMessageWarning(props: Props_modal) {
    const { open, setOpen } = props;

    const { translate } = Use_translation();

    return (
        <ComponentLayout open={open} setOpen={setOpen}>
            <div className="flex flex-col items-center gap-y-3 px-3 sm:px-7 py-7">
                <div className="flex h-12 w-12 place-items-center justify-center rounded-full bg-yellow-100">
                    <ComponentIcon name='warning' description_class='cursor-not-allowed mt-1 text-yellow-500' size={25} />
                </div>
                <div className="flex flex-col items-center mt-3 text-center sm:mt-0 sm:text-left">
                    <span className="text-center font-semibold leading-6 text-yellow-500">
                        {
                            translate('contact.validations.message.type.warning.title')
                        }
                    </span>
                    <p className="text-center text-sm text-gray-500">
                        {
                            translate('contact.validations.message.type.warning.description')
                        }
                    </p>
                </div>
            </div>
            <div className="flex gap-x-1 py-3 px-3 sm:px-7 justify-center">
                <button type="button" className="w-[200px] bg-yellow-500 dark:border-transparent border-yellow-500 dark:hover:text-primary hover:text-yellow-500 hover:bg-tertiary border-[1px] transition duration-500 outline-none rounded-md py-[5px] font-semibold text-text-primary" onClick={() => setOpen(false)}>
                    {
                        translate('contact.validations.message.button')
                    }
                </button>
            </div>
        </ComponentLayout>
    )
}