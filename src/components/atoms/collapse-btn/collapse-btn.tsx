'use client'
import { TStateSetter } from '@src/types';

import './collapse-btn.scss';

export type TCollapseBtnDirection = 'up-down' | 'left-right';

export interface ICollapseBtnProps {
  isOpen: boolean;
  setIsOpen: TStateSetter<boolean>;
  direction?: TCollapseBtnDirection;
  className?: string;
}

export const CollapseBtn = ({ isOpen, setIsOpen, direction, className }: ICollapseBtnProps) => {
  const baseClass = 'collapse-btn__button';
  const closedClass = !isOpen ? `${baseClass}--closed` : '';
  const directionClass = direction === 'up-down' ? `${baseClass}--up-down` : '';
  const additionalClasses = className ? ` ${className}` : '';

  return (
    <div
      className={`${baseClass} ${closedClass} ${directionClass}${additionalClasses}`}
      onClick={() => setIsOpen(!isOpen)}
    />
  );
};
