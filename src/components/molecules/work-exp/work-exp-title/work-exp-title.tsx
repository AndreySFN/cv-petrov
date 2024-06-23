import { FC } from 'react';

import { IconedRecord } from '~components/atoms';
import { getPeriodWithDuration } from '~src/utils';

import '~styles/typography.module.scss';
import { IWorkExpProps } from '../types';
import styles from './work-exp-title.module.scss';

export const WorkExpTitle: FC<IWorkExpProps> = ({ companyName, startDate, endDate, position, iconSrc }) => {
  return (
    <div className={styles['work-exp-title']}>
      <div className={styles['work-exp-title__left-container']}>
        <IconedRecord iconSrc={iconSrc} text={companyName} bold />
      </div>
      <div className={styles['work-exp-title__right-container']}>
        <div className={styles['work-exp-title__position']}>
          <h3>{position}</h3>
        </div>
        <div className={styles['work-exp-title__line']}></div>
        <div className={styles['work-exp-title__period']}>
          <h4 className={styles['--italic']}>{getPeriodWithDuration(startDate, endDate)}</h4>
        </div>
      </div>
    </div>
  );
};
