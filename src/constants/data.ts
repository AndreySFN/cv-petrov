import { IIconedRecordProps } from '@components/atoms'
import { IWorkExpSectionProps } from '@components/features'
import { ILangCardProps } from '@components/molecules'

import { LANG_LEVEL } from './lang-levels'

export const WORK_EXPERIENCE: Array<IWorkExpSectionProps> = [
  {
    titleProps: {
      companyName: 'JSC «TOCHKA»',
      startDate: new Date(2023, 8),
      endDate: new Date(2024, 3),
      position: 'Interface Developer',
      iconSrc: '/logo/tochka.png'
    },
    projectDescription: 'A landing page generation system for businesses based on textual ' +
      'descriptions (using AI), a WYSIWYG landing page editor (drag-n-drop), and hosting for generated websites. https://ai.tochka.com/',
    mainStack: 'React, TypeScript, custom state-manager, internal UI-Kit, styled-components, Storybook.',
    duties: [
      'Development of user interfaces',
      'Implementation of Storybook',
      'Code review and improvement of code quality',
      'System analysis',
      'Continuous interaction with various teams',
      'Participation in adaptation and implementation of Agile methodologies'
    ],
    achivments: [
      'Implemented Storybook throughout the project (where appropriate)',
      'Gained experience with working on and installing Linux (Ubuntu, Kubuntu)'
    ]

  },
  {
    titleProps: {
      companyName: 'LLC «INNOTECH»',
      startDate: new Date(2022, 2),
      endDate: new Date(2023, 7),
      position: 'Lead Developer',
      iconSrc: '/logo/innotech.png'
    },
    projectDescription: 'Dataset annotation and artificial neural network training system.',
    mainStack: 'React+Redux, Redux-toolkit, TypeScript, Material UI, emotion, i18n, GraphQL, Storybook.',
    duties: [
      'Implementation of web services',
      'Development of component libraries',
      'Code review and refactoring',
      'Writing unit tests',
      'Conducting demonstrations',
      'Participation in planning and other agile ceremonies'
    ],
    achivments: [
      'Developed an authentication project from scratch using Keycloak',
      'Convinced the team to abandon the unnecessary use of Storybook, which increased development speed',
      'Temporarily performed team lead duties in their absence'
    ],
  },
  {
    titleProps: {
      companyName: '«Innopolis» University',
      startDate: new Date(2021, 9),
      endDate: new Date(2021, 12),
      position: 'Instructor of the course',
      iconSrc: '/logo/innopolis.png'
    },
    projectDescription: 'Frontend development course (React+TypeScript), as well as backend '+
    'on Node.js+express, for those with experience in JavaScript development',
    duties: [
      'Course program development',
      'Recording video tutorials and conducting webinars',
      'Development of assignments for midterm and final assessments',
      'Student consultations',
      'Interviewing candidates for curator positions'
    ]
  },
  {
    titleProps: {
      companyName: 'PJSC «Sberbank»',
      startDate: new Date(2019, 12),
      endDate: new Date(2022, 2),
      position: 'Senior Development Engineer',
      iconSrc: '/logo/sber.png'
    },
    projectDescription: 'Internal product. Registry maintenance system for mass enrollments '+
    '(salaries, pensions, and other mass enrollments) of the Business Development Support Platform.',
    mainStack: 'React+Redux, TypeScript, Antd-design, SASS/LESS, REST API, Jest+Enzyme, Java+Spring MVC',
    duties: [
      'Implementation of visual interface components',
      'Development for Internet Explorer 11',
      'Writing unit tests',
      'Backend for frontend development',
      'Codebase analysis and optimization',
      'Interaction with adjacent teams, raising change requests',
      'Backend for frontend enhancements'
    ],
    achivments: [
      'Introduced the product into industrial operation in collaboration with the team',
      'Convinced management of the impracticality of supporting IE 11'
    ]
  }
]

export const CONTACTS: Array<IIconedRecordProps> = [
  {
    iconSrc: '/icons/telegram.png',
    href: 'https://t.me/a_petrov_work',
    text: '@a_petrov_work',
  },
  {
    iconSrc: '/icons/mail.png',
    href: 'mailto:andreysfn@yandex.ru',
    text: 'andreysfn@yandex.ru',
  },
  {
    iconSrc: '/icons/russia.png',
    href: 'tel: +79162894638',
    text: '+7 (916) 289 46-38'
  },
  {
    iconSrc: '/icons/armenia.png',
    href: 'tel: +37491619864',
    text: '+374 91 61 98 64'
  },
  {
    iconSrc: '/icons/linkedin.png',
    href: 'https://linkedin.com/in/andreysfn',
    text: 'andreysfn'
  },
]

export const POSITION = 'MIDDLE+/SENIOR FRONTEND'

export const LANGUAGES: Array<ILangCardProps> = [
  {
    lang: 'Russian',
    langLvl: LANG_LEVEL.NATIVE,
    iconSrc: '/flags/russia.png'
  },
  {
    lang: 'English',
    langLvl: LANG_LEVEL.B2,
    iconSrc: '/flags/usa.png'
  },
  {
    lang: 'Italian',
    langLvl: LANG_LEVEL.A1,
    iconSrc: '/flags/italy.png'
  },
]

export const TECH_AND_SKILLS = [
  ['HTML5, CSS3, SASS, LESS, JS, TypeScript'],
  ['Webpack, babel, loaders'],
  ['React, Redux, Next.js, Redux toolkit, redux-thunk, React/Redux devtools'],
  ['Jest, Enzyme'],
  ['Material UI, Ant Design, styled-components, Storybook'],
  ['Node.js + express.js, Java+Spring MVC, mapstruct'],
  ['Momolith, Micro-frontend, feature slice, atomic design, SPA, SSR, REST, GraphQL, WebSockets'],
  ['LocalStorage, SessionStorage, cookies, WebWorker, ServiceWorkers'],
  ['i18n'],
  ['Responsive Web Design, Cross-Browser Web Design'],
  ['Experience with Linux, KDEPlasma/GNOME, MacOS, Windows 95-10']
]