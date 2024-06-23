import { FC } from 'react';

import { IconedRecord, PageHeader } from '~components/atoms';
import { CONTACTS } from '~src/constants';

import styles from './contacts.module.scss';

export const Contacts: FC = () => {
  return (
    <>
      <PageHeader title="CONTACTS" />
      <div className={styles.contacts}>
        <div className={styles.contacts__list}>
          {CONTACTS.map((props) => (
            <IconedRecord key={props.text} {...props} />
          ))}
        </div>
      </div>
    </>
  );
};
