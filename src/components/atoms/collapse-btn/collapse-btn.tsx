'use client';

import classNames from 'classnames';

import { TStateSetter } from '~src/types';

import './collapse-btn.scss';

export type TCollapseBtnDirection = 'up-down' | 'left-right';

export interface ICollapseBtnProps {
  isOpen: boolean;
  setIsOpen: TStateSetter<boolean>;
  direction?: TCollapseBtnDirection;
  className?: string;
}

export const CollapseBtn = ({ isOpen, setIsOpen, direction, className }: ICollapseBtnProps) => {
  const buttonClasses = classNames(
    'collapse-btn__button',
    {
      'collapse-btn__button--closed': !isOpen,
      'collapse-btn__button--up-down': direction === 'up-down',
    },
    className
  );

  return (
    <div
      className={buttonClasses}
      onClick={() => setIsOpen(!isOpen)}
    />
  );
};
