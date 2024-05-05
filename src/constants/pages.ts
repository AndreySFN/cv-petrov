export enum PageNames {
    OVERVIEW = 'OVERVIEW',
    WORK_EXPERIENCE = 'WORK EXPERIENCE',
    PORTFOLIO = 'PORTFOLIO',
    SKILLS_AND_LANGUAGES = 'SKILLS & LANGUAGES',
    ABOUT_ME = 'ABOUT ME',
    EDUCATION = 'EDUCATION',
    CONTACTS = 'CONTACTS'
}

export const PagesIconSrcDictionary = {
    [PageNames.OVERVIEW]: '👀',
    [PageNames.WORK_EXPERIENCE]: '🛠',
    [PageNames.PORTFOLIO]: '💼',
    [PageNames.SKILLS_AND_LANGUAGES]: '📃',
    [PageNames.ABOUT_ME]: '👨🏻‍💻',
    [PageNames.EDUCATION]: '🎓',
    [PageNames.CONTACTS]: '📓'
}

export const PageUrlsDictionary = {
    [PageNames.OVERVIEW]: './overview',
    [PageNames.WORK_EXPERIENCE]: './work-experience',
    [PageNames.PORTFOLIO]: './portfolio',
    [PageNames.SKILLS_AND_LANGUAGES]: './skills-and-languages',
    [PageNames.ABOUT_ME]: './about-me',
    [PageNames.EDUCATION]: './education',
    [PageNames.CONTACTS]: './contacts'
}


export const ActivePagesDictionary = new Set([PageNames.WORK_EXPERIENCE])