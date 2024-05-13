'use client'
import { TStateSetter } from '@/types';
import './collapse-btn.scss'

export type TCollapseBtnDirection = 'up-down' | 'left-right';

export interface ICollapseBtnProps {
    isOpen: boolean;
    setIsOpen: TStateSetter<boolean>;
    direction?: TCollapseBtnDirection;
    className?: string;
}

export const CollapseBtn = ({ isOpen, setIsOpen, direction, className }: ICollapseBtnProps) => {
    return <div
        className={`collapse-btn ${!isOpen && '--closed'} ${direction === 'up-down' && '--up-down'}`.concat(className ? ` ${className}` : '')}
        onClick={() => setIsOpen(!isOpen)}
    />
}