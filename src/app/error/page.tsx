'use client'

import Link from "next/link"

import Use_translation from "@/context/translation/use";

import ComponentIcon from "@/components/partials/icon"

export default function Page404() {
    const { translate } = Use_translation();

    return (
        <main className="bg-tertiary dark:bg-primary h-screen grid place-items-center">
            <article className="bg-transparent w-[300px] ml:w-[400px] h-[300px] grid place-items-center">
                <div className="flex flex-col items-center">
                    <div className="animation-404">
                        <ComponentIcon name="bug" size={30} description_class="text-secondary dark:text-red-500 logo" />
                        <ComponentIcon name="bug" size={30} description_class="text-secondary dark:text-red-500 logo" />
                    </div>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary via-primary dark:via-red-500 dark:to-secondary text-[100px]">
                        404
                    </h1>
                </div>
                <div className="flex flex-col items-center gap-y-0">
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary via-primary dark:via-tertiary dark:to-secondary text-[18px]">
                        {
                            translate('page_404.title')
                        }
                    </h2>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary dark:via-tertiary dark:to-tertiary  text-[15px] text-center">
                        {
                            translate('page_404.subtitle.txt_1')
                        }
                        {' '}
                        <Link href="/" className="text-secondary" title="Página de inicio">
                            {
                                translate('page_404.subtitle.txt_2')
                            }
                        </Link>
                        {' '}
                        {
                            translate('page_404.subtitle.txt_3')
                        }
                    </span>
                </div>
            </article>
        </main>
    )
}