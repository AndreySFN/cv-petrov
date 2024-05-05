import { getPeriodBetweenDates, getPeriodWithDuration } from '@/utils';
import '../../../styles/typography.scss'
import { CollapseBtn } from '../collapse-btn';
import './work-exp-title.scss'
import Image from 'next/image'

export interface IWorkExpTitleProps {
    companyName: string;
    startDate: Date;
    endDate: Date;
    position: string;
    iconSrc?: string;
    isExpanded?: boolean;
}


export const WorkExpTitle = ({ companyName, startDate, endDate, position, iconSrc }: IWorkExpTitleProps) => {
    return (
        <div className="work-exp-title">
            <div className="work-exp-title__left-container">
                {iconSrc && <Image height={50} width={50} src={iconSrc} alt="Company logo" className="work-exp-title__icon" />}
                <h2 className="work-exp-title__company --blue --bold">{companyName}</h2>
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