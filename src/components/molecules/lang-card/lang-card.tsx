import { IconedRecord } from '~components/atoms';
import { LANG_LEVEL } from '~src/constants';

import styles from './lang-card.module.scss';

export interface ILangCardProps {
    lang: string;
    iconSrc?: string;
    langLvl: LANG_LEVEL;
}

export const LangCard = ({ lang, langLvl, iconSrc }: ILangCardProps) => {
  return (
    <div className={styles['lang-card']}>
      <div className={styles['lang-card__record']}>
        <IconedRecord iconSrc={iconSrc} text={lang} bold />
      </div>
      <h4 className={styles['lang-card__level']}>{langLvl}</h4>
    </div>
  );
};
