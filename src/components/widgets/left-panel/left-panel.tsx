'use client'

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';

import { CollapseBtn } from '~components/atoms';
import { Menu, Switchers } from '~components/features';
import { useMobile } from '~src/hooks';
import { TStateSetter } from '~src/types';
import { optionalCallback } from '~src/utils';

import styles from './left-panel.module.scss';

export interface ILeftPanelProps {
  route: string;
  isOpened: boolean;
  setIsOpened: TStateSetter<boolean>;
}

export const LeftPanel: React.FC<ILeftPanelProps> = ({ isOpened, route, setIsOpened }) => {
  const panelClass = classNames(styles['left-panel'], { [styles['left-panel--closed']]: !isOpened });
  const contentClass = classNames(styles['left-panel__content'], { [styles['left-panel__content--closed']]: !isOpened });
  const avatarClass = classNames(styles['left-panel__content__avatar'], { [styles['left-panel__content__avatar--closed']]: !isOpened });
  const nameContainerClass = classNames(
    styles['left-panel__content__name-container'], 
    { [styles['left-panel__content__name-container--closed']]: !isOpened }
  );
  const settingsClass = 
  classNames(styles['left-panel__content__settings'], { [styles['left-panel__content__settings--closed']]: !isOpened });
  const downloadBtnClass = 
  classNames(styles['left-panel__download-btn'], { [styles['left-panel__download-btn--closed']]: !isOpened });
  const collapseClass = 
  classNames(styles['left-panel__collapse'], { [styles['left-panel__collapse--closed']]: !isOpened });
  const isMobile = useMobile();

  const ref = useRef<HTMLDivElement>(null);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsOpened(false),
    onSwipedRight: () => setIsOpened(true),
  });

  useEffect(() => {
    if (!isOpened) {
      ref?.current?.scrollTo(0, 0);
    }
  }, [isOpened]);

  return (
    <div className={panelClass} ref={ref}>
      <div {...handlers} className={contentClass}>
        <div>
          <div className={avatarClass}>
            {/* eslint-disable-next-line */}
            <Image src="/avatar.jpg" alt="Avatar" width={280} height={280} />
          </div>
          <div className={nameContainerClass}>
            <h2 className="left-panel__content__name --white --half-bold">Andrei V. Petrov</h2>
          </div>
          <div className={settingsClass}>
            <CollapseBtn className={collapseClass} isOpen={isOpened} setIsOpen={setIsOpened} direction="left-right" />
            <Switchers className={styles['left-panel__switchers']} closed={!isOpened} />
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
