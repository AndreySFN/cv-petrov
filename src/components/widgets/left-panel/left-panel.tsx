'use client'

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { CollapseBtn } from '~components/atoms';
import { Menu, Switchers } from '~components/features';
import { useMobile } from '~src/hooks';
import { TStateSetter } from '~src/types';
import { optionalCallback } from '~src/utils';

import './left-panel.scss';
import '~styles/typography.scss';

export interface ILeftPanelProps {
  route: string;
  isOpened: boolean;
  setIsOpened: TStateSetter<boolean>;
}

export const LeftPanel: React.FC<ILeftPanelProps> = ({ isOpened, route, setIsOpened }) => {
  const panelClass = classNames('left-panel', { 'left-panel--closed': !isOpened });
  const contentClass = classNames('left-panel__content', { 'left-panel__content--closed': !isOpened });
  const avatarClass = classNames('left-panel__content__avatar', { 'left-panel__content__avatar--closed': !isOpened });
  const nameContainerClass = classNames(
    'left-panel__content__name-container', 
    { 'left-panel__content__name-container--closed': !isOpened }
  );
  const settingsClass = classNames('left-panel__content__settings', { 'left-panel__content__settings--closed': !isOpened });
  const downloadBtnClass = classNames('left-panel__download-btn', { 'left-panel__download-btn--closed': !isOpened });
  const collapseClass = classNames('left-panel__collapse', { 'left-panel__collapse--closed': !isOpened });
  const isMobile = useMobile()
  return (
    <div className={panelClass}>
      <div className={contentClass}>
        <div>
          <div className={avatarClass}>
            {/* eslint-disable-next-line */}
            <Image src="/avatar.jpg" alt="Avatar" width={280} height={280}/>
          </div>
          <div className={nameContainerClass}>
            <h2 className="left-panel__content__name --white --half-bold">Andrei V. Petrov</h2>
          </div>
          <div className={settingsClass}>
            <CollapseBtn className={collapseClass} isOpen={isOpened} setIsOpen={setIsOpened} direction="left-right" />
            <Switchers className="left-panel__switchers" closed={!isOpened} />
          </div>
          <Menu 
            isSmall={!isOpened} 
            route={route} 
            setIsOpened={optionalCallback(setIsOpened, isMobile)} 
          />
        </div>
        <div className={downloadBtnClass}>
          <Link href="/CV_front-end_Petrov.pdf">
            <Image alt="download" src="/icons/download.png" height={50} width={50} />
          </Link>
        </div>
      </div>
    </div>
  );
};
