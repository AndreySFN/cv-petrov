'use client'
import './collapse-btn.scss'

export type TCollapseBtnDirection = 'up-down' | 'left-right';

export interface ICollapseBtnProps {
    isOpen?: boolean;
    onClick?: () => void;
    direction?: TCollapseBtnDirection;
    className?: string;
}

export const CollapseBtn = ({ isOpen, onClick, direction, className }: ICollapseBtnProps) => {
    return <div
        className={`collapse-btn ${!isOpen && '--closed'} ${direction === 'up-down' && '--up-down'}`.concat(className ? ` ${className}` : '')}
        onClick={onClick}
    />
}