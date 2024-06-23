'use client';

import classNames from 'classnames';

import { TStateSetter } from '~src/types';

import styles from './collapse-btn.module.scss';

export type TCollapseBtnDirection = 'up-down' | 'left-right';

export interface ICollapseBtnProps {
  isOpen: boolean;
  setIsOpen: TStateSetter<boolean>;
  direction?: TCollapseBtnDirection;
  className?: string;
}

export const CollapseBtn = ({ isOpen, setIsOpen, direction, className }: ICollapseBtnProps) => {
  const buttonClasses = classNames(
    styles.collapseBtnButton,
    {
      [styles.collapseBtnButtonClosed]: !isOpen,
      [styles.collapseBtnButtonUpDown]: direction === 'up-down',
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
