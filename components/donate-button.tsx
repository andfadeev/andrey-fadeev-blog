"use client"

import {useTheme} from "next-themes"

export function DonateButton() {
    const {theme, systemTheme} = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const buttonClassName = currentTheme === 'dark' ?
        "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-md text-sm px-5 py-2.5 text-center"
        : "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-md text-sm px-5 py-2.5 text-center"

    return (
        <a
            href="https://www.buymeacoffee.com/andrey.fadeev"
            target="_blank"
            className={'block'}
        >
            <button className={buttonClassName}>
                Buy me a coffee
            </button>
        </a>
    )
}
