import { WorkExpSection } from '@/components/features'
import './work-experience.scss'
import { WORK_EXPERIENCE } from '@/constants'
import { PageHeader } from '@/components/atoms'
import { getExperiencePeriod } from '@/utils'

export const WorkExperience = () => {
    return <>
        <PageHeader title='WORK EXPERIENCE' subtitle={getExperiencePeriod()} />
        <div className='work-exp-container'>
            {
                WORK_EXPERIENCE.map((props) =>
                    <WorkExpSection
                        key={props.titleProps.startDate.toString()}
                        {...props}
                    />
                )
            }
        </div>
    </>
}