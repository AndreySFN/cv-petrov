import { getPeriodWithDuration } from '@/utils';
import '../../../../styles/typography.scss'
import './work-exp-title.scss'
import { IWorkExpProps } from '../types';
import { IconedRecord } from '@/components/atoms';

//TODO: Вынести из атомов?
export const WorkExpTitle = ({ companyName, startDate, endDate, position, iconSrc }: IWorkExpProps) => {
    return (
        <div className="work-exp-title">
            <div className="work-exp-title__left-container">
                <IconedRecord iconSrc={iconSrc} text={companyName} bold/>
            </div>
            <div className='work-exp-title__right-container'>
                <div className='work-exp-title__right-container__position'><h3>{position}</h3></div>
                <div className='work-exp-title__right-container__line'></div>
                <div className='work-exp-title__right-container__period'>
                    <h4 className='--italic'>{getPeriodWithDuration(startDate, endDate)}</h4>
                </div>
            </div>
        </div>
    )
}