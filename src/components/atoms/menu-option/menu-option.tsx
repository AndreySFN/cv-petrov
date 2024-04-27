import { ReactNode } from 'react';
import './menu-option.scss';
import Link from 'next/link';

export interface IMenuOptionProps {
    title: ReactNode;
    onClick?: () => void;
    isActive?: boolean;
    isSmall?: boolean;
    smallTitle: ReactNode;
    href: string;
}

export const MenuOption = ({ title, isActive, isSmall, smallTitle, href }: IMenuOptionProps) => {
    return (
        <Link href={href} className={`menu-option ${isActive && '--active'}`}>
                <h2>
                    {!isSmall ? title : smallTitle}
                </h2>
        </Link>
    )
}