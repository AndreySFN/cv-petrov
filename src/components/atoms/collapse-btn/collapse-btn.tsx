'use client'
import './collapse-btn.scss'

export type TCollapseBtnDirection = 'up-down' | 'left-right';

export interface ICollapseBtnProps {
    isOpen?: boolean;
    onClick?: () => void;
    direction?: TCollapseBtnDirection;
    className?: string;
    size?: number;
}

export const CollapseBtn = ({ isOpen, onClick, direction, className, size = 50 }: ICollapseBtnProps) => {
    return <div
        className={`collapse-btn ${!isOpen && '--closed'} ${direction === 'up-down' && '--up-down'}`.concat(className ? ` ${className}` : '')}
        style={{ width: `${size}px`, height: `${size}px`}}
        onClick={onClick}
    />
}