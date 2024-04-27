export enum PageNames {
    OVERVIEW = 'OVERVIEW',
    WORK_EXPIRIENCE = 'WORK EXPIRIENCE',
    PORTFOLIO = 'PORTFOLIO',
    SKILLS_AND_LANGUAGES = 'SKILLS & LANGUAGES',
    ABOUT_ME = 'ABOUT ME',
    EDUCATION = 'EDUCATION',
    CONTACTS = 'CONTACTS'
}

export const PagesIconSrcDictionary = {
    [PageNames.OVERVIEW]: '👀',
    [PageNames.WORK_EXPIRIENCE]: '🛠',
    [PageNames.PORTFOLIO]: '💼',
    [PageNames.SKILLS_AND_LANGUAGES]: '📃',
    [PageNames.ABOUT_ME]: '👨🏻‍💻',
    [PageNames.EDUCATION]: '🎓',
    [PageNames.CONTACTS]: '📓'
}

export const PageUrlsDictionary = {
    [PageNames.OVERVIEW]: './overview',
    [PageNames.WORK_EXPIRIENCE]: './work-expirience',
    [PageNames.PORTFOLIO]: './portfolio',
    [PageNames.SKILLS_AND_LANGUAGES]: './skills-and-languages',
    [PageNames.ABOUT_ME]: './about-me',
    [PageNames.EDUCATION]: './education',
    [PageNames.CONTACTS]: './contacts'
}


export const ActivePagesDictionary = new Set([PageNames.WORK_EXPIRIENCE])