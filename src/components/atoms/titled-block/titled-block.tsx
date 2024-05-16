import { IWithChildren } from '~src/types';

import './titled-block.scss'

export interface ITitledBlockProps extends IWithChildren {
    title: string;
}

export const TitledBlock = ({ children, title }: ITitledBlockProps) => {
  return (<div className='titled_block'>
    <div className='titled_block__title'>
      <h3 className='--blue --bold'>{title}</h3>
    </div>
    <div className='titled_block__content'>
      <p>{children}</p>
    </div>
  </div>)
}