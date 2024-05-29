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
  [PageNames.OVERVIEW]: '/cv/overview', // TODO: Remove the workaround (or maybe it's not a workaround, not sure yet)
  [PageNames.WORK_EXPERIENCE]: '/cv/work-experience',
  [PageNames.PORTFOLIO]: '/cv/portfolio',
  [PageNames.SKILLS_AND_LANGUAGES]: '/cv/skills-and-languages',
  [PageNames.ABOUT_ME]: '/cv/about-me',
  [PageNames.EDUCATION]: '/cv/education',
  [PageNames.CONTACTS]: '/cv/contacts'
}

export const ActivePagesDictionary = new Set([PageNames.WORK_EXPERIENCE, PageNames.CONTACTS, PageNames.OVERVIEW])