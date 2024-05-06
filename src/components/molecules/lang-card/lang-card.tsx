import { IconedRecord } from '@/components/atoms'
import './lang-card.scss'
import { LANG_LEVEL } from '@/constants';

export interface ILangCardProps {
    lang: string;
    iconSrc?: string;
    langLvl: LANG_LEVEL
}

export const LangCard = ({lang, langLvl, iconSrc}: ILangCardProps) => {
    return <div>
        <IconedRecord iconSrc={iconSrc} text={lang} bold/>
        <div>{langLvl}</div>
    </div>
}