'use client'
import { CollapseBtn, List, TitledBlock, WorkExpTitle } from '@/components/atoms';
import './work-exp-section.scss';
import { useState } from 'react';
import { IWorkExpProps } from '@/components/molecules';

export interface IWorkExpSectionProps {
    titleProps: IWorkExpProps;
    projectDescription?: string;
    mainStack?: string;
    duties?: Array<string>;
    achivments?: Array<string>;
}

export const WorkExpSection = ({ titleProps, projectDescription, achivments, duties, mainStack }: IWorkExpSectionProps) => {
    const [isOpened, setIsOpened] = useState<boolean>(true)
    return (
        <div className='work-exp-section'>
            <div className='work-exp-section__header'>
                <div className='work-exp-section__header__title'>
                    <WorkExpTitle {...titleProps} />
                </div>
                <div className='work-exp-section__header__collapse-btn'>
                    <CollapseBtn direction='up-down' isOpen={isOpened} onClick={() => setIsOpened(prev => !prev)} />
                </div>
            </div>
            <div className={`work-exp-section__content ${!isOpened && '--closed'}`}>
                {projectDescription && <TitledBlock title='Project description:'>
                    {projectDescription}
                </TitledBlock>}
                {mainStack && <TitledBlock title='Main stack:'>
                    {mainStack}
                </TitledBlock>}
                <div className='work-exp-section__content__duties-and-achivments'>
                    {duties &&
                        <TitledBlock title='Duties:'>
                            <List items={duties} />
                        </TitledBlock>}
                    {achivments &&
                        <TitledBlock title='Achievements:'>
                            <List items={achivments} />
                        </TitledBlock>}
                </div>
            </div>
        </div>
    );
}
