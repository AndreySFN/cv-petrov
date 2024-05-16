import React from 'react';

import './titled-block.scss';

export interface IWithChildren { // TODO: А как оно тут оказалось?
  children?: React.ReactNode;
}

export interface ITitledBlockProps extends IWithChildren {
  title: string;
}

export const TitledBlock: React.FC<ITitledBlockProps> = ({ children, title }) => {
  return (
    <div className='titled_block'>
      <div className='titled_block__title'>
        <h3>{title}</h3>
      </div>
      <div className='titled_block__content'>
        {children}
      </div>
    </div>
  );
};
