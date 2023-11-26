'use client'

import Link from "next/link"

import ComponentIcon from "@/components/partials/icon"

import { Use_translation } from "@/i18n/logic/use_translation"

export default function Page404() {
    const t = Use_translation(1);

    return (
        <main className="bg-primary h-screen grid place-items-center">
            <article className="bg-primary w-[300px] ml:w-[400px] h-[300px] grid place-items-center">
                <div className="flex flex-col items-center">
                    <div className="animation-404">
                        <ComponentIcon name="bug" size={30} description_class="text-red-500 logo" />
                        <ComponentIcon name="bug" size={30} description_class="text-red-500 logo" />
                    </div>
                    <h1 className="text-tertiary text-[100px]">
                        404
                    </h1>
                </div>
                <div className="flex flex-col items-center gap-y-1">
                    <h2 className="text-tertiary text-[18px]">
                        {
                            t('page_404.title')
                        }
                    </h2>
                    <span className="text-[15px] text-gray-600 text-tertiary text-center">
                        {
                            t('page_404.subtitle.txt_1')
                        }
                        {' '}
                        <Link href="/" className="text-secondary" title="Página de inicio">
                            {
                                t('page_404.subtitle.txt_2')
                            }
                        </Link>
                        {' '}
                        {
                            t('page_404.subtitle.txt_3')
                        }
                    </span>
                </div>
            </article>
        </main>
    )
}