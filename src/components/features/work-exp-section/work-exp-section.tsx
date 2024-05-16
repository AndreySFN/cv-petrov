'use client'

import classNames from 'classnames';
import { useState } from 'react';

import { CollapseBtn, List, TitledBlock, WorkExpTitle } from '~components/atoms';
import { IWorkExpProps } from '~components/molecules';

import './work-exp-section.scss';

export interface IWorkExpSectionProps {
    titleProps: IWorkExpProps;
    projectDescription?: string;
    mainStack?: string;
    duties?: Array<string>;
    achievements?: Array<string>;
}

export const WorkExpSection = ({ titleProps, projectDescription, achievements, duties, mainStack }: IWorkExpSectionProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(true);
  
  const contentClass = classNames('work-exp-section__content', { 'work-exp-section__content--closed': !isOpened });

  return (
    <div className='work-exp-section'>
      <div className='work-exp-section__header'>
        <div className='work-exp-section__header__title'>
          <WorkExpTitle {...titleProps} />
        </div>
        <div>
          <CollapseBtn direction='up-down' className='work-exp-section__collapse-btn' isOpen={isOpened} setIsOpen={setIsOpened} />
        </div>
      </div>
      <div className={contentClass}>
        {projectDescription && (
          <TitledBlock title='Project description:'>
            {projectDescription}
          </TitledBlock>
        )}
        {mainStack && (
          <TitledBlock title='Main stack:'>
            {mainStack}
          </TitledBlock>
        )}
        <div className='work-exp-section__content__duties-and-achievements'>
          {duties && (
            <TitledBlock title='Duties:'>
              <List items={duties} />
            </TitledBlock>
          )}
          {achievements && (
            <TitledBlock title='Achievements:'>
              <List items={achievements} />
            </TitledBlock>
          )}
        </div>
      </div>
    </div>
  );
};
