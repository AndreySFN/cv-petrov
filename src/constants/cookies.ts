export enum CookieNames {
    MENU_STATE = 'menu-state',
}

export interface ICookie {
    [CookieNames.MENU_STATE]: boolean;
}