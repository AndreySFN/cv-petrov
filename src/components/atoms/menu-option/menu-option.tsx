import { ReactNode, memo } from 'react';
import './menu-option.scss';
import Link from 'next/link';

export interface IMenuOptionProps {
    title: ReactNode;
    onClick?: () => void;
    isActive?: boolean;
    isDisabled?: boolean;
    isSmall?: boolean;
    smallTitle: ReactNode;
    href: string;
}

export const MenuOption = ({ title, isActive, isSmall, smallTitle, href, isDisabled }: IMenuOptionProps) => {


    //TODO: Подумать над рефакторингом
    const Title = () => <h2>{!isSmall ? title : smallTitle}</h2>

    return (
        <div className={`menu-option ${isActive && '--active'} ${isDisabled && '--disabled'} ${isSmall && '--short'}`}>
            {isDisabled ?
                <Title /> :
                <Link href={href} className='menu-option__link'>
                    <Title />
                </Link>}
        </div>
    )
}