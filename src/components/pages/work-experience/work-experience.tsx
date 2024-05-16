import React from 'react';

import { PageHeader } from '~components/atoms';
import { WorkExpSection } from '~components/features';
import { WORK_EXPERIENCE } from '~src/constants';
import { getExperiencePeriod } from '~src/utils';

import './work-experience.scss';

export const WorkExperience: React.FC = () => (
  <>
    <PageHeader title="WORK EXPERIENCE" subtitle={getExperiencePeriod()} />
    <div className="work-experience">
      {WORK_EXPERIENCE.map((props) => (
        <WorkExpSection key={props.titleProps.startDate.toString()} {...props} />
      ))}
    </div>
  </>
);
