import { arrToList, getNextArrItemByCircle } from '@/utils';
import './switcher.scss'

export type TSwytcherOptionId = string;

export interface ISwitcherOption<T> {
    icon: string;
    id: T;
}

export type TSwitcherCallback<T> = (id: T) => void;

interface ISwitcherOptionProps<T> extends ISwitcherOption<T> {
    isActive?: boolean;
    onClick?: TSwitcherCallback<T>;
    isShort?: boolean;
    isDisabled?: boolean;
}

function SwitcherOption<T extends unknown>({ icon, isActive, onClick, id, isShort, isDisabled }: ISwitcherOptionProps<T>) {
    return (
        <div
            onClick={() => onClick && onClick(id)}
            className={`switcher__option ${isActive && '--active'} ${isShort && '--short'} ${isDisabled && '--disabled'}`}
        >
            {icon}
        </div>
    )
}

const ShortSwitcher = <T extends unknown>({ options, onChange, activeId, isDisabled }: ISwitcherProps<T>) => {
    const activeIndex = options.findIndex(option => option.id === activeId);
    const { icon } = options[activeIndex];
    const nextId = getNextArrItemByCircle(options, activeIndex).id;
    return (
        <div className="switcher --short">
            <SwitcherOption isShort icon={icon} isActive={true} isDisabled={isDisabled} onClick={onChange} id={nextId} />
        </div>
    )
}

const FullSwitcher = <T extends unknown>({ options, onChange, activeId, isDisabled }: ISwitcherProps<T>) => {
    return (
        <div className="switcher">
            {options.map(({ icon, id }: ISwitcherOptionProps<T>) => {
                return <SwitcherOption
                    key={String(id)}
                    id={id}
                    isActive={id === activeId}
                    isDisabled={isDisabled}
                    icon={icon}
                    onClick={onChange}
                />
            })}
        </div>
    )
}

export interface ISwitcherProps<T> {
    options: Array<ISwitcherOption<T>>;
    activeId: string;
    onChange?: TSwitcherCallback<T>;
    isShort?: boolean;
    isDisabled?: boolean;
}

export const Switcher = <T extends unknown>({ options, onChange, activeId, isShort, isDisabled }: ISwitcherProps<T>) => {
    return (
        isShort ?
            <ShortSwitcher
                options={options}
                isDisabled={isDisabled}
                onChange={!isDisabled && onChange}
                activeId={activeId}
            /> :
            <FullSwitcher
                options={options}
                isDisabled={isDisabled}
                onChange={!isDisabled && onChange}
                activeId={activeId}
            />
    )
}

