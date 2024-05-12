'use client'
import './left-panel.scss';
import '../../../styles/typography.scss';
import { Menu } from '@/components/features/menu/menu';
import { Switchers } from '@/components/features';
import { CollapseBtn } from '@/components/atoms';
import { TStateSetter } from '@/types';

export interface ILeftPanelProps {
    route: string;
    isClosed: boolean;
    setClosed: TStateSetter<boolean>
}

    export const LeftPanel = ({isClosed, route, setClosed}: ILeftPanelProps) => {
    return (
        <div className={`left_panel ${isClosed && '--closed'}`}> {/* TODO: Вынести на уровень выше */}
            <div className={`left_panel__content ${isClosed && '--closed'}`}> {/*TODO: Зарефачить опциональные классы*/}
                <div className={`left_panel__content__avatar ${isClosed && '--closed'}`}>
                    <img src="/avatar.jpg" alt="Avatar" />
                </div>
                <div className={`left_panel__content__name-container ${isClosed && '--closed'}`}>
                    <h2 className='left_panel__content__name --white --half-bold'>Andrei V. Petrov</h2>
                </div>
                <div className={`left_panel__content__settings ${isClosed && '--closed'}`}>
                    <CollapseBtn className='left-panel__collapse' isOpen={!isClosed} setIsClosed={setClosed} direction='left-right' />
                    <Switchers className='left_panel__switchers' closed={isClosed} />
                </div>
                <Menu isSmall={isClosed} route={route} setIsClosed={setClosed} />
            </div>
        </div>
    )
}
