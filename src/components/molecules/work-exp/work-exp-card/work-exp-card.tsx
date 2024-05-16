import Link from 'next/link';

import { IconedRecord } from '~components/atoms';
import { PageNames, PageUrlsDictionary } from '~src/constants';
import { IWorkExpProps } from '~src/types';
import { getPeriodWithDuration } from '~src/utils';

import '~styles/typography.scss'
import './work-exp-card.scss'

// TODO: Вынести из атомов?
export const WorkExpCard = ({ companyName, startDate, endDate, position, iconSrc }: IWorkExpProps) => {
  return (
    <Link href={PageUrlsDictionary[PageNames.WORK_EXPERIENCE]}>
      <div className="work-exp-card">
        <IconedRecord iconSrc={iconSrc} text={companyName} bold />
        <h4 className='--italic'>{getPeriodWithDuration(startDate, endDate)}</h4>
        <h3>{position}</h3>
      </div>
    </Link>
  )
}