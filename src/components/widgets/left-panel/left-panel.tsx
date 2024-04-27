'use client'
import './left-panel.scss';
import '../../../styles/typography.scss';
import { IMenuProps, Menu } from '@/components/features/menu/menu';
import { Switchers } from '@/components/features';
import { CookieNames } from '@/constants/cookies';
import { strToBoolean } from '@/utils';
import { useCallback, useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';

export interface ILeftPanelProps extends IMenuProps { }

export const LeftPanel = ({ page }: ILeftPanelProps) => {
    const [isClosed, setIsClosed] = useState<boolean>(strToBoolean(getCookie(CookieNames.MENU_STATE)))
    const handleClick = useCallback(() => {
        setIsClosed((prev) => {
            setCookie(CookieNames.MENU_STATE, (!prev).toString())
            return !prev
        })
    }, [isClosed])
    return (
        <div className={`left_panel ${isClosed && '--closed'}`}>
            <div className={`left_panel__avatar ${isClosed && '--closed'}`}>
                <img src="/avatar.jpg" alt="Avatar" />
            </div>
            <div className={`left_panel__name-container ${isClosed && '--closed'}`}>
                <h2 className='left_panel__name --white'>John Doe</h2>
            </div>
            <div className={`left_panel__settings ${isClosed && '--closed'}`}>
                <div
                    className={`left_panel__close-btn ${isClosed && '--closed'}`}
                    onClick={handleClick}
                />
                <Switchers closed={isClosed} />
            </div>
            <Menu isSmall={isClosed} page={page} />
        </div>
    )

}
