'use client'
import { TStateSetter } from '@/types';
import './collapse-btn.scss'

export type TCollapseBtnDirection = 'up-down' | 'left-right';

export interface ICollapseBtnProps {
    isOpen: boolean;
    setIsClosed: TStateSetter<boolean>;
    direction?: TCollapseBtnDirection;
    className?: string;
}

export const CollapseBtn = ({ isOpen, setIsClosed, direction, className }: ICollapseBtnProps) => {
    return <div
        className={`collapse-btn ${!isOpen && '--closed'} ${direction === 'up-down' && '--up-down'}`.concat(className ? ` ${className}` : '')}
        onClick={() => setIsClosed(isOpen)}
    />
}