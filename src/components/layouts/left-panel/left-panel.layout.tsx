'use client'

import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { DelayedUnmount } from '~components/service';
import { LeftPanel } from '~components/widgets';
import { HALF_SECOND } from '~src/constants';
import { useMobile } from '~src/hooks';
import { IWithChildren } from '~src/types';

import styles from './layout.module.scss';

export const LeftPanelLayout = ({ children }: IWithChildren) => {
  const route = usePathname();
  const [isOpened, setIsOpened] = useState<boolean>(true);
  const isMobile = useMobile();
  const handleBtnClick = () => setIsOpened((prev) => !prev);
  
  const containerOverlayClass = 
  classNames(styles['container__overlay'], { [styles['container__overlay--hidden']]: !isOpened || !isMobile });
  const containerContentClass = 
  classNames(styles['container__content'], { [styles['container__content--frozen']]: isOpened && isMobile });

  return (
    <div className={styles['container']}>
      <LeftPanel isOpened={isOpened} route={route} setIsOpened={setIsOpened} />
      <DelayedUnmount delay={HALF_SECOND} shouldRender={isOpened}> {/* TODO: Разобраться с гидратацией */}
        <div className={containerOverlayClass} onClick={handleBtnClick} />
      </DelayedUnmount>
      <div className={containerContentClass}>
        {children}
      </div>
    </div>
  );
}
