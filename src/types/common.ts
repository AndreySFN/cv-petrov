import { Dispatch, SetStateAction } from 'react';

export interface IWithChildren {
    children?: React.ReactNode;
}

export interface IWithParams <T> extends IWithChildren {
    params: T; 
}

export type TStateSetter <T> = Dispatch<SetStateAction<T>>