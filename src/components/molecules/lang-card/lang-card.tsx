import { IconedRecord } from '@~components/atoms'
import { LANG_LEVEL } from '@src/constants';

import './lang-card.scss'

export interface ILangCardProps {
    lang: string;
    iconSrc?: string;
    langLvl: LANG_LEVEL
}

export const LangCard = ({ lang, langLvl, iconSrc }: ILangCardProps) => {
  return <div>
    <IconedRecord iconSrc={iconSrc} text={lang} bold />
    <h4>{langLvl}</h4>
  </div>
}