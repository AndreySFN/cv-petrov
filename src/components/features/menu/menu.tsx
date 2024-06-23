import classNames from 'classnames';
import React from 'react';

import { MenuOption } from '~components/atoms';
import { ActivePagesDictionary, PageNames, PagesIconSrcDictionary, PageUrlsDictionary } from '~src/constants';
import { TStateSetter } from '~src/types';
import { optionalCallback } from '~src/utils';

import styles from './menu.module.scss';

export interface IMenuProps {
  route: string;
  isSmall?: boolean;
  setIsOpened?: TStateSetter<boolean>;
}

export const Menu: React.FC<IMenuProps> = ({ route: page, isSmall, setIsOpened }) => {
  const menuClasses = classNames(styles.menu, {
    [styles.menuShort]: isSmall,
  });

  return (
    <div className={menuClasses}>
      {Object.values(PageNames).map((name) => (
        <MenuOption
          isDisabled={!ActivePagesDictionary.has(name)}
          key={name}
          title={name}
          isSmall={isSmall}
          smallTitle={PagesIconSrcDictionary[name]}
          href={PageUrlsDictionary[name]}
          onClick={optionalCallback(setIsOpened)}
          isActive={page === PageUrlsDictionary[name]}
        />
      ))}
    </div>
  );
};
