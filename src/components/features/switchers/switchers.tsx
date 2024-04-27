'use client'
import { Switcher } from "@/components/atoms/switcher"
import { Languages, Themes, languageSwitcherOptions, themeSwitcherOptions } from "@/constants"
import { useState } from "react"
import './switchers.scss'

export interface ISwitchersProps {
    closed?: boolean
}

export const Switchers = ({closed = false}: ISwitchersProps) => {
    const [language, setLanguage] = useState<Languages>(Languages.EN)
    const [theme, setTheme] = useState<Themes>(Themes.LIGHT)
    return <div className={`switchers ${closed && '--closed'}`}>
        <Switcher
            isShort={closed}
            isDisabled
            options={languageSwitcherOptions}
            activeId={language}
            onChange={setLanguage}
        />
        <Switcher
            isShort={closed}
            isDisabled
            options={themeSwitcherOptions}
            activeId={theme}
            onChange={setTheme}
        />
    </div>
}