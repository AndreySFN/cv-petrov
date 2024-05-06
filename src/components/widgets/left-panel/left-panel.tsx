'use client'
import './left-panel.scss';
import '../../../styles/typography.scss';
import { Menu } from '@/components/features/menu/menu';
import { Switchers } from '@/components/features';
import { useState } from 'react';
import { CollapseBtn } from '@/components/atoms';
import { usePathname } from 'next/navigation';

export const LeftPanel = () => {
    const route = usePathname()
    const [isClosed, setIsClosed] = useState<boolean>(false);
    const handleBtnClick = () => setIsClosed(prev => !prev)
    return (
        <div className={`left_panel ${isClosed && '--closed'}`}>
            <div className={`left_panel__content ${isClosed && '--closed'}`}> {/*TODO: Зарефачить опциональные классы*/}
                <div className={`left_panel__content__avatar ${isClosed && '--closed'}`}>
                    <img src="/avatar.jpg" alt="Avatar" />
                </div>
                <div className={`left_panel__content__name-container ${isClosed && '--closed'}`}>
                    <h2 className='left_panel__content__name --white --half-bold'>Andrei V. Petrov</h2>
                </div>
                <div className={`left_panel__content__settings ${isClosed && '--closed'}`}>
                    <CollapseBtn className='left-panel__collapse' isOpen={!isClosed} onClick={handleBtnClick} direction='left-right' />
                    <Switchers closed={isClosed} />
                </div>
                <Menu isSmall={isClosed} route={route} />
            </div>
        </div>
    )
}
