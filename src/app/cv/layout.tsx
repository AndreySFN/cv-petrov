'use client' // TODO: Пересмотреть
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { LeftPanel } from '@components/widgets';
import { IWithChildren } from '@src/types';

import './layout.scss'

export default function RootLayout({ children }: IWithChildren) {
  const route = usePathname()
  const [isOpened, setIsOpened] = useState<boolean>(true);
  const handleBtnClick = () => setIsOpened(prev => !prev);

  return (
    <div className="container">
      <LeftPanel isOpened={isOpened} route={route} setIsOpened={setIsOpened} />
      <div className={`container__wrapper ${!isOpened && '--hidden'}`} onClick={handleBtnClick} about='sdsad' accessKey='asdasd' />
      <div className='container__content'>
        {children}
      </div>
    </div>
  );
}
