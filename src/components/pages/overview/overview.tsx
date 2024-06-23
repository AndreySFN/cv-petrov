import { FC } from 'react';

import { IconedRecord, PageHeader, TitledBlock } from '~components/atoms';
import { LangCard, WorkExpCard } from '~components/molecules';
import { CONTACTS, LANGUAGES, MAIN_STACK, POSITION, WORK_EXPERIENCE } from '~src/constants';
import { IWithChildren } from '~src/types';
import { getExperiencePeriod } from '~src/utils';

import './overview.scss';

interface OverviewBlockProps extends IWithChildren {}

const OverviewBlock: FC<OverviewBlockProps> = ({ children }) => (
  <div className="overview__block">
    {children}
  </div>
);

export const Overview: FC = () => (
  <>
    <PageHeader title={POSITION} subtitle={getExperiencePeriod()} />
    <div className="overview">
      <div className="overview__main">
        <TitledBlock title="Main stack:">
          <OverviewBlock>
            {MAIN_STACK.map(({ iconSrc, text }) => <IconedRecord key={text} iconSrc={iconSrc} text={text} bold />)}
          </OverviewBlock>
        </TitledBlock>
        <TitledBlock title="Work experience:">
          <OverviewBlock>
            {WORK_EXPERIENCE.map(({ titleProps }) => (
              <WorkExpCard key={titleProps.startDate.toString()} {...titleProps} />
            ))}
          </OverviewBlock>
        </TitledBlock>
        <TitledBlock title="Languages:">
          <OverviewBlock>
            {LANGUAGES.map(props => (
              <LangCard key={props.lang} {...props} />
            ))}
          </OverviewBlock>
        </TitledBlock>
        <TitledBlock title="Contacts:">
          <OverviewBlock>
            {CONTACTS.map(props => (
              <IconedRecord key={props.text} {...props} />
            ))}
          </OverviewBlock>
        </TitledBlock>
      </div>
    </div>
  </>
);
