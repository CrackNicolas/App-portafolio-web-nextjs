import Use_translation from '@/context/translation/use';

import ComponentIcon from '../../icon';
import ComponentLayout from '../../modal';

type Props = {
    open: boolean,
    setOpen: any,
    view_url?: string
}

export default function ComponentMessageConfirmation(props: Props) {
    const { open, setOpen, view_url = "" } = props;

    const { translate } = Use_translation();

    return (
        <ComponentLayout open={open} setOpen={setOpen}>
            <div className="flex flex-col items-center gap-y-3 px-3 sm:px-7 py-7">
                <div className="flex h-12 w-12 place-items-center justify-center rounded-full bg-secondary">
                    <ComponentIcon name='check-2' description_class='cursor-not-allowed mt-1 text-tertiary' size={25} />
                </div>
                <div className="flex flex-col items-center mt-3 text-center sm:mt-0 sm:text-left">
                    <span className="font-semibold leading-6 text-secondary">
                        {
                            translate((view_url !== "") ? 'start.message.title' : 'contact.validations.message.type.confirmation.title')
                        }
                    </span>
                    <p className="text-center text-sm text-gray-500">
                        {
                            translate((view_url !== "") ? 'start.message.description' : 'contact.validations.message.type.confirmation.description')
                        }
                    </p>
                </div>
            </div>
            <div className={`flex gap-x-1 py-3 px-3 sm:px-7 ${(view_url !== "") ? 'justify-between' : 'justify-center'} `}>
                {
                    (view_url !== "") &&
                    <a href={view_url} target="_blank" rel="noopener noreferrer" className="bg-tertiary text-secondary dark:bg-secondary dark:text-tertiary dark:hover:bg-tertiary dark:hover:text-secondary border-[1px] dark:border-transparent border-secondary transition duration-500 outline-none w-[180px] rounded-md hover:bg-secondary py-[5px] font-semibold hover:text-tertiary">
                        {
                            translate('start.message.buttons.b_1')
                        }
                    </a>
                }
                <button type="button" className={`${(view_url !== "") ? 'dark:border-transparent border-red-500 dark:bg-red-500 dark:text-tertiary dark:hover:bg-tertiary dark:hover:text-red-500 text-red-500 hover:text-tertiary w-[180px] hover:bg-red-500' : 'w-[200px] dark:border-transparent border-secondary text-secondary hover:bg-secondary hover:text-tertiary'} bg-tertiary border-[1px] transition duration-500 outline-none rounded-md py-[5px] font-semibold`} onClick={() => setOpen(false)}>
                    {
                        translate((view_url !== "") ? 'start.message.buttons.b_2' : 'contact.validations.message.button')
                    }
                </button>
            </div>
        </ComponentLayout>
    )
}