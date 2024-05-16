import { IconedRecord } from '~components/atoms';
import { LANG_LEVEL } from '~src/constants';

import './lang-card.scss';

export interface ILangCardProps {
    lang: string;
    iconSrc?: string;
    langLvl: LANG_LEVEL;
}

export const LangCard = ({ lang, langLvl, iconSrc }: ILangCardProps) => {
  return (
    <div className='lang-card'>
      <div className='lang-card__record'>
        <IconedRecord iconSrc={iconSrc} text={lang} bold />
      </div>
      <h4 className='lang-card__level'>{langLvl}</h4>
    </div>
  );
};
