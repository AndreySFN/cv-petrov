import classNames from 'classnames';
import Link from 'next/link';
import { ReactNode } from 'react';

import styles from './menu-option.module.scss';

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
  const menuOptionClasses = classNames(styles['menu-option'], {
    [styles['menu-option--active']]: isActive,
    [styles['menu-option--disabled']]: isDisabled,
    [styles['menu-option--short']]: isSmall
  });

  const Title = () => <h2>{!isSmall ? title : smallTitle}</h2>;

  return (
    <div onClick={() => onClick && onClick()} className={menuOptionClasses}>
      {isDisabled ? (
        <Title />
      ) : (
        <Link href={href} className={styles['menu-option__link']}>
          <Title />
        </Link>
      )}
    </div>
  );
};
