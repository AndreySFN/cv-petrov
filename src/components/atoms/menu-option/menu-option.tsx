import classNames from 'classnames';
import Link from 'next/link';
import { ReactNode } from 'react';

import './menu-option.scss';

export interface IMenuOptionProps {
  title: ReactNode;
  onClick?: VoidFunction;
  isActive?: boolean;
  isDisabled?: boolean;
  isSmall?: boolean;
  smallTitle: ReactNode;
  href: string;
}

export const MenuOption = ({ title, isActive, isSmall, smallTitle, href, isDisabled, onClick }: IMenuOptionProps) => {
  const menuOptionClasses = classNames('menu-option', {
    'menu-option--active': isActive,
    'menu-option--disabled': isDisabled,
    'menu-option--short': isSmall
  });

  const Title = () => <h2>{!isSmall ? title : smallTitle}</h2>;

  return (
    <div onClick={() => onClick && onClick()} className={menuOptionClasses}>
      {isDisabled ? (
        <Title />
      ) : (
        <Link href={href} className='menu-option__link'>
          <Title />
        </Link>
      )}
    </div>
  );
};
