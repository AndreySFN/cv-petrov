'use client'
import Image from 'next/image'
import Link from 'next/link';

import { CollapseBtn } from '@components/atoms';
import { Menu , Switchers } from '@components/features';
import { TStateSetter } from '@src/types';

import './left-panel.scss';
import '@styles/typography.scss';

export interface ILeftPanelProps {
    route: string;
    isOpened: boolean;
    setIsOpened: TStateSetter<boolean>
}

export const LeftPanel = ({ isOpened, route, setIsOpened }: ILeftPanelProps) => {
  return (
    <div className={`left_panel ${!isOpened && '--closed'}`}> {/* TODO: Вынести на уровень выше */}
      <div className={`left_panel__content ${!isOpened && '--closed'}`}> {/* TODO: Зарефачить опциональные классы*/}
        <div>
          <div className={`left_panel__content__avatar ${!isOpened && '--closed'}`}>
            {/* eslint-disable-next-line */}
            <img src="/avatar.jpg" alt="Avatar" />
          </div>
          <div className={`left_panel__content__name-container ${!isOpened && '--closed'}`}>
            <h2 className='left_panel__content__name --white --half-bold'>Andrei V. Petrov</h2>
          </div>
          <div className={`left_panel__content__settings ${!isOpened && '--closed'}`}>
            <CollapseBtn className='left-panel__collapse' isOpen={isOpened} setIsOpen={setIsOpened} direction='left-right' />
            <Switchers className='left_panel__switchers' closed={!isOpened} />
          </div>
          <Menu isSmall={!isOpened} route={route} setIsOpened={setIsOpened} />
        </div>
        <div className={`left_panel__download-btn ${!isOpened && '--closed'}`}>
          <Link href='/CV_front-end_Petrov.pdf'>
            <Image alt='download' src='/icons/download.png' height={50} width={50} />
          </Link>
        </div>
      </div>
    </div>
  )
}
