import { FC } from 'react';

import { IconedRecord } from '~components/atoms';
import { getPeriodWithDuration } from '~src/utils';

import '~styles/typography.scss';
import './work-exp-title.scss';
import { IWorkExpProps } from '../types';

export const WorkExpTitle: FC<IWorkExpProps> = ({ companyName, startDate, endDate, position, iconSrc }) => {
  return (
    <div className="work-exp-title">
      <div className="work-exp-title__left-container">
        <IconedRecord iconSrc={iconSrc} text={companyName} bold />
      </div>
      <div className="work-exp-title__right-container">
        <div className="work-exp-title__position">
          <h3>{position}</h3>
        </div>
        <div className="work-exp-title__line"></div>
        <div className="work-exp-title__period">
          <h4 className="--italic">{getPeriodWithDuration(startDate, endDate)}</h4>
        </div>
      </div>
    </div>
  );
};
