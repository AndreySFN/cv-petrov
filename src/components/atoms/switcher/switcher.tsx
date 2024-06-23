import classNames from 'classnames';
import React from 'react';

import { getNextArrItemByCircle } from '~src/utils';

import styles from './switcher.module.scss';

export type TSwitcherOptionId = string;

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

function SwitcherOption<T extends unknown>({
  icon,
  isActive,
  onClick,
  id,
  isShort,
  isDisabled
}: ISwitcherOptionProps<T>) {
  const switcherOptionClasses = classNames(styles['switcher__option'], {
    [styles['switcher__option--active']]: isActive,
    [styles['switcher__option--short']]: isShort,
    [styles['switcher__option--disabled']]: isDisabled
  });

  return (
    <div
      onClick={() => onClick && !isDisabled && onClick(id)}
      className={switcherOptionClasses}
    >
      {icon}
    </div>
  );
}

interface ISwitcherProps<T> {
  options: Array<ISwitcherOption<T>>;
  activeId: T;
  onChange?: TSwitcherCallback<T>;
  isShort?: boolean;
  isDisabled?: boolean;
}

const ShortSwitcher = <T extends unknown>({
  options,
  onChange,
  activeId,
  isDisabled
}: ISwitcherProps<T>) => {
  const activeIndex = options.findIndex(option => option.id === activeId);
  const { icon } = options[activeIndex];
  const nextId = getNextArrItemByCircle(options, activeIndex).id;

  return (
    <div className={classNames(styles['switcher'], styles['switcher--short'])}>
      <SwitcherOption
        isShort
        icon={icon}
        isActive={true}
        isDisabled={isDisabled}
        onClick={onChange}
        id={nextId}
      />
    </div>
  );
};

const FullSwitcher = <T extends unknown>({
  options,
  onChange,
  activeId,
  isDisabled
}: ISwitcherProps<T>) => {
  return (
    <div className={styles['switcher']}>
      {options.map(({ icon, id }) => (
        <SwitcherOption
          key={String(id)}
          id={id}
          isActive={id === activeId}
          isDisabled={isDisabled}
          icon={icon}
          onClick={onChange}
        />
      ))}
    </div>
  );
};

export const Switcher = <T extends unknown>({
  options,
  onChange,
  activeId,
  isShort,
  isDisabled
}: ISwitcherProps<T>) => {
  return isShort ? (
    <ShortSwitcher
      options={options}
      isDisabled={isDisabled}
      onChange={onChange}
      activeId={activeId}
    />
  ) : (
    <FullSwitcher
      options={options}
      isDisabled={isDisabled}
      onChange={onChange}
      activeId={activeId}
    />
  );
};
