'use client'

import classNames from 'classnames';
import { useState } from 'react';

import { Switcher } from '~components/atoms';
import { Languages, languageSwitcherOptions, Themes, themeSwitcherOptions } from '~src/constants';

import styles from './switchers.module.scss';

export interface ISwitchersProps {
    closed?: boolean;
    className?: string;
}

export const Switchers = ({ closed = false, className = '' }: ISwitchersProps) => {
  const [language, setLanguage] = useState<Languages>(Languages.EN);
  const [theme, setTheme] = useState<Themes>(Themes.LIGHT);
  
  const switchersClass = classNames(styles.switchers, { [styles.switchers__closed]: closed }, className);

  return (
    <div className={switchersClass}>
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
  );
};
