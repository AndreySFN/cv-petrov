'use client'
import { useState } from 'react'

import { Switcher } from '@components/atoms'
import { Languages, languageSwitcherOptions, Themes, themeSwitcherOptions } from '@src/constants'

import './switchers.scss'

export interface ISwitchersProps {
    closed?: boolean
    className?: string;
}

export const Switchers = ({ closed = false, className='' }: ISwitchersProps) => {
  const [language, setLanguage] = useState<Languages>(Languages.EN)
  const [theme, setTheme] = useState<Themes>(Themes.LIGHT)
  return <div className={`switchers ${closed && '--closed'} ${className}`}>
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