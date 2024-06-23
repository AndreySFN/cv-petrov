import React from 'react';

import { IWithChildren } from '~src/types';

import styles from './titled-block.module.scss';

export interface ITitledBlockProps extends IWithChildren {
  title: string;
}

export const TitledBlock: React.FC<ITitledBlockProps> = ({ children, title }) => {
  return (
    <div className={styles.titled_block}>
      <div className={styles.titled_block__title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.titled_block__content}>
        {children}
      </div>
    </div>
  );
};
