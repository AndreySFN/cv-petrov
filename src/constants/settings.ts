export enum Languages {
    EN = 'en',
    RU = 'ru'
}

export enum Themes {
    LIGHT = 'light',
    DARK = 'dark'
}

export const languageSwitcherOptions = [
    { id: Languages.EN, icon: '🇬🇧' },
    { id: Languages.RU, icon: '🇷🇺' }
]

export const themeSwitcherOptions = [
    { id: Themes.LIGHT, icon: '🔅' },
    { id: Themes.DARK, icon: '🌑' }
]

export const START_DATE = new Date(2019, 12, 1)