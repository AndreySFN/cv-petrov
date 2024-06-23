import React from 'react';

import { PageHeader } from '~components/atoms';
import { WorkExpSection } from '~components/features';
import { WORK_EXPERIENCE } from '~src/constants';
import { getExperiencePeriod } from '~src/utils';

import styles from './work-experience.module.scss';

export const WorkExperience: React.FC = () => (
  <>
    <PageHeader title="WORK EXPERIENCE" subtitle={getExperiencePeriod()} />
    <div className={styles['work-experience']}>
      {WORK_EXPERIENCE.map((props) => (
        <WorkExpSection key={props.titleProps.startDate.toString()} {...props} />
      ))}
    </div>
  </>
);
