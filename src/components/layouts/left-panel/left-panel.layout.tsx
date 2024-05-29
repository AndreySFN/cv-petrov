'use client'

import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { DelayedUnmount } from '~components/service';
import { LeftPanel } from '~components/widgets';
import { HALF_SECOND } from '~src/constants';
import { useMobile } from '~src/hooks';
import { IWithChildren } from '~src/types';

import './layout.scss';

export const LeftPanelLayout = ({ children }: IWithChildren) => {
  const route = usePathname();
  const [isOpened, setIsOpened] = useState<boolean>(true);
  const isMobile = useMobile()
  const handleBtnClick = () => setIsOpened((prev) => !prev);
  
  const containerOverlayClass = classNames('container__overlay', { 'container__overlay--hidden': !isOpened || !isMobile });
  const containerContentClass = classNames('container__content', { 'container__content--frozen': isOpened && isMobile });

  return (
    <div className="container">
      <LeftPanel isOpened={isOpened} route={route} setIsOpened={setIsOpened} />
      <DelayedUnmount delay={HALF_SECOND} shouldRender={isOpened}>
        <div className={containerOverlayClass} onClick={handleBtnClick} />
      </DelayedUnmount>
      <div className={containerContentClass}>
        {children}
      </div>
    </div>
  );
}
