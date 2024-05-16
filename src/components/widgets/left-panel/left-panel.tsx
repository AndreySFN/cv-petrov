import classNames from 'classnames';
import Image from 'next/image'
import Link from 'next/link';

import { CollapseBtn } from '@~components/atoms';
import { Menu , Switchers } from '@~components/features';
import { TStateSetter } from '@src/types';

import './left-panel.scss';
import '@styles/typography.scss';

export interface ILeftPanelProps {
    route: string;
    isOpened: boolean;
    setIsOpened: TStateSetter<boolean>
}

export const LeftPanel = ({ isOpened, route, setIsOpened }: ILeftPanelProps) => {
  
  const panelClass = classNames('left_panel', { '--closed': !isOpened });
  const contentClass = classNames('left_panel__content', { '--closed': !isOpened });
  const avatarClass = classNames('left_panel__content__avatar', { '--closed': !isOpened });
  const nameContainerClass = classNames('left_panel__content__name-container', { '--closed': !isOpened });
  const settingsClass = classNames('left_panel__content__settings', { '--closed': !isOpened });
  const downloadBtnClass = classNames('left_panel__download-btn', { '--closed': !isOpened });

  return (
    <div className={panelClass}>
      <div className={contentClass}>
        <div>
          <div className={avatarClass}>
            {/* eslint-disable-next-line */}
            <img src="/avatar.jpg" alt="Avatar" />
          </div>
          <div className={nameContainerClass}>
            <h2 className='left_panel__content__name --white --half-bold'>Andrei V. Petrov</h2>
          </div>
          <div className={settingsClass}>
            <CollapseBtn className='left-panel__collapse' isOpen={isOpened} setIsOpen={setIsOpened} direction='left-right' />
            <Switchers className='left_panel__switchers' closed={!isOpened} />
          </div>
          <Menu isSmall={!isOpened} route={route} setIsOpened={setIsOpened} />
        </div>
        <div className={downloadBtnClass}>
          <Link href='/CV_front-end_Petrov.pdf'>
            <Image alt='download' src='/icons/download.png' height={50} width={50} />
          </Link>
        </div>
      </div>
    </div>
  )
}
