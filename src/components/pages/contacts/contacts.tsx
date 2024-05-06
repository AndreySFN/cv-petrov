import { WorkExpSection } from '@/components/features'
import './contacts.scss'
import { CONTACTS, WORK_EXPERIENCE } from '@/constants'
import { IconedLink, PageHeader } from '@/components/atoms'
import { Test } from '@/components/atoms/test'

export const Contacts = () => {
    return <>
        <PageHeader title='CONTACTS' />
        <div className='contacts'>
            <div className='contacts__list'>
                {CONTACTS.map((props) => <IconedLink key={props.text} {...props} />)}
            </div>
        </div>
    </>
}