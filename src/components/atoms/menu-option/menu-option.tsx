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

  // TODO: Подумать над рефакторингом
  const Title = () => <h2>{!isSmall ? title : smallTitle}</h2>

  return (
    <div
      onClick={() => onClick && onClick()}
      className={`menu-option ${isActive && '--active'} ${isDisabled && '--disabled'} ${isSmall && '--short'}`}
    >
      {isDisabled ?
        <Title /> :
        <Link href={href} className='menu-option__link'>
          <Title />
        </Link>}
    </div>
  )
}