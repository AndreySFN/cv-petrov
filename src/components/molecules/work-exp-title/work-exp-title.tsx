import { FC } from 'react';

import { getPeriodString, getYearsAndMonthsString } from '~src/utils';

import '~styles/typography.scss';
import './work-exp-title.scss';

export interface IWorkExpProps {
  startDate: Date;
  endDate: Date;
}

export const WorkExpTitle: FC<IWorkExpProps> = ({ startDate, endDate }) => {
  return (
    <div className="work-exp-title">
      <div className="work-exp-title__left-container">
        <h2 className='--bold --blue'>{getPeriodString(startDate, endDate)}</h2>
      </div>
      <div className="work-exp-title__right-container">
        <div className="work-exp-title__position">
        </div>
        <div className="work-exp-title__line"></div>
        <div className="work-exp-title__period">
          <h4 className="--italic">{getYearsAndMonthsString(startDate, endDate)}</h4>
        </div>
      </div>
    </div>
  );
};
