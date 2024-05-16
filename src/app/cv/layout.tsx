import classNames from 'classnames'; // Importing classNames library
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { LeftPanel } from '~components/widgets';
import { IWithChildren } from '~src/types';

import './layout.scss';

export default function RootLayout({ children }: IWithChildren) {
  const route = usePathname();
  const [isOpened, setIsOpened] = useState<boolean>(true);

  const handleBtnClick = () => setIsOpened((prev) => !prev);
  
  const containerWrapperClass = classNames('container__overlay', { 'container__overlay--hidden': !isOpened });
  const containerContentClass = classNames('container__content', { 'container__content--frozen': !isOpened });

  return (
    <div className="container">
      <LeftPanel isOpened={isOpened} route={route} setIsOpened={setIsOpened} />
      <div className={containerWrapperClass} onClick={handleBtnClick} />
      <div className={containerContentClass}>
        {children}
      </div>
    </div>
  );
}
