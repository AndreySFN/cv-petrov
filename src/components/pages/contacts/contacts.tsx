import { IconedRecord, PageHeader } from '@components/atoms'
import { CONTACTS } from '@src/constants'

import './contacts.scss'

export const Contacts = () => {
  return <>
    <PageHeader title='CONTACTS' />
    <div className='contacts'>
      <div className='contacts__list'>
        {CONTACTS.map((props) => <IconedRecord key={props.text} {...props} />)}
      </div>
    </div>
  </>
}