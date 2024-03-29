import Use_translation from '@/context/translation/use';

import ComponentIcon from '../../icon';
import ComponentLayout from '../../modal';

import { Props_modal } from '@/types/props';

export default function ComponentMessageWait(props: Props_modal) {
    const { open, setOpen } = props;

    const { translate } = Use_translation();

    return (
        <ComponentLayout open={open} setOpen={setOpen}>
            <div className="flex flex-col items-center gap-y-5 px-3 sm:px-7 py-7">
                <div className="flex h-12 w-12 place-items-center justify-center rounded-full bg-gray-100">
                    <ComponentIcon name='wait' description_class='cursor-wait text-gray-500' size={24} />
                </div>
                <div className="flex flex-col items-center mt-3 text-center sm:mt-0 sm:text-left">
                    <span className="text-center font-semibold leading-6 text-gray-500">
                        {
                            translate('contact.validations.message.type.wait.title')
                        }
                    </span>
                    <p className="text-center text-sm text-gray-500">
                        {
                            translate('contact.validations.message.type.wait.description')
                        }
                    </p>
                </div>
                <div className="mt-1 flex gap-x-4 place-items-center justify-center">
                    <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    <div className="w-3 h-3 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
                </div>
            </div>
        </ComponentLayout>
    )
}