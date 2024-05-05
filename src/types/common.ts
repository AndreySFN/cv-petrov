export interface IWithChildren {
    children?: React.ReactNode;
}

export interface IWithParams <T> extends IWithChildren {
    params: T; 
}