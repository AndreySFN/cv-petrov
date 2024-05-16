import Link from 'next/link';

import { IconedRecord } from '~components/atoms';
import { PageNames, PageUrlsDictionary } from '~src/constants';
import { getPeriodWithDuration } from '~src/utils';

import '~styles/typography.scss';
import './work-exp-card.scss';
import { IWorkExpProps } from '../types';

export const WorkExpCard = ({ companyName, startDate, endDate, position, iconSrc }: IWorkExpProps) => {
  return (
    <Link href={PageUrlsDictionary[PageNames.WORK_EXPERIENCE]}>
      <div className="work-exp-card">
        <div className="work-exp-card__company">
          <IconedRecord iconSrc={iconSrc} text={companyName} bold />
        </div>
        <h3 className="work-exp-card__position">{position}</h3>
        <h4 className="work-exp-card__period">{getPeriodWithDuration(startDate, endDate)}</h4>
      </div>
    </Link>
  );
};
