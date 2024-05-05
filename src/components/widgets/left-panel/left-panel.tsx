'use client'
import './left-panel.scss';
import '../../../styles/typography.scss';
import { IMenuProps, Menu } from '@/components/features/menu/menu';
import { Switchers } from '@/components/features';
import { CookieNames } from '@/constants/cookies';
import { strToBoolean } from '@/utils';
import { useCallback, useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import { CollapseBtn } from '@/components/atoms';

export interface ILeftPanelProps extends IMenuProps { }

export const LeftPanel = ({ page }: ILeftPanelProps) => {
    const [isClosed, setIsClosed] = useState<boolean>(false)
    const handleBtnClick = () => setIsClosed(prev => !prev)
    //TODO: пересмотреть на необходимость рефакторинг
    return (
        <div className={`left_panel ${isClosed && '--closed'}`}>
            <div className={`left_panel__content ${isClosed && '--closed'}`}> {/*TODO: Зарефачить опциональные классы*/}
                <div className={`left_panel__content__avatar ${isClosed && '--closed'}`}>
                    <img src="/avatar.jpg" alt="Avatar" />
                </div>
                <div className={`left_panel__content__name-container ${isClosed && '--closed'}`}>
                    <h2 className='left_panel__content__name --white'>Andrei V. Petrov</h2>
                </div>
                <div className={`left_panel__content__settings ${isClosed && '--closed'}`}>
                    <CollapseBtn className='left-panel__collapse' isOpen={!isClosed} onClick={handleBtnClick} direction='left-right' />
                    <Switchers closed={isClosed} />
                </div>
                <Menu isSmall={isClosed} page={page} />
            </div>
        </div>
    )

}
