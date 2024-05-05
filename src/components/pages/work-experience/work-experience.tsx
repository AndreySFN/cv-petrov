import { WorkExpSection } from '@/components/features'
import './work-experience.scss'
import { WORK_EXPERIENCE } from '@/constants'

export const WorkExperience = () => {
    return <div className='work-exp-container'>
        {
            WORK_EXPERIENCE.map((props) =>
                <WorkExpSection
                    key={props.titleProps.startDate.toString()}
                    {...props}
                />
            )
        }
    </div>
}