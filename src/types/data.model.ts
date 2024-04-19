export interface WorkPeriod {
    start: Date;
    end?: Date;
}

export interface Experience {
    company: string;
    position?: string;
    period: WorkPeriod;
    projectDescription?: string;
    mainStack?: Array<string>;
    fullStack?: Array<string>;
    duties?: Array<string>;
    achivements?: Array<string>;
}

export interface Phone {
    icon?: string;
    number: string;
}

export interface Contact {
    icon?: string;
    name?: string;
    text: string
    link?: string;
}

export enum LanguageLevels {
    A1 = 'beginner',
    A2 = 'elementary',
    B1 = 'intermediate',
    B2 = 'upper intermediate',
    C1 = 'advanced',
    C2 = 'proficiency',
    NATIVE = 'native'
}

export interface Language {
    language: string;
    level: LanguageLevels;
}

export interface Header {
    job?: string;
    name?: string;
    description?: string;
    careerStart?: Date;
    address?: string;
    notice?: string;
}

export interface Portfolio {
    title?: string;
    description?: string;
    stack?: Array<string>;
    link?: string;
    backgroundSrc?: string;
}

export interface Data {
    header: Header
    contacts: Array<Contact>,
    languages: Array<Language>,
    skills: Array<string>,
    pages: {
        experience?: Array<Experience>,
        portfolio?: Array<unknown>,
        aboutMe?: unknown
    },

}