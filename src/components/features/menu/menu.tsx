import classNames from 'classnames';

import { MenuOption } from '@~components/atoms';
import { ActivePagesDictionary, PageNames, PagesIconSrcDictionary, PageUrlsDictionary } from '@src/constants';
import { TStateSetter } from '@src/types';

import './menu.scss';

export interface IMenuProps {
    route: string;
    isSmall?: boolean;
    setIsOpened: TStateSetter<boolean>;
}

export const Menu = ({ route: page, isSmall, setIsOpened }: IMenuProps) => {
  const menuClasses = classNames('menu', {
    '--short': isSmall
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
          onClick={() => setIsOpened(false)}
          isActive={page === PageUrlsDictionary[name]}
        />
      ))}
    </div>
  );
};
