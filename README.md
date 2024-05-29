# Personal CV Website

At the moment, the project requires some corrections and numerous improvements, as it is at the stage of a minimally viable product.

Currently, at least the following improvements have been accounted for:
  - Install a loader when switching between pages.
  - Implement a solution to control the state of the LeftPanel (open/closed) during the first render.
  - Everything described in the TODOs within the project.

## The version currently in industrial operation is available at the link [bestcv.pro](https://bestcv.pro)
## Project Description (Goals)

This project is an interactive web application created using React and Next.js, designed to showcase my professional resume. The website includes detailed information about me, my work experience, project portfolio, and contact information. The application supports multilingualism (Russian and English) and offers the ability to switch between light and dark themes.

## Functional Requirements

1. **Work Information**:
   - Display a list of companies, positions, and periods of employment.
   - Show achievements, job responsibilities, and project descriptions.
   - Detail the technologies used.

2. **About Me Section**:
   - Presentation of personal information and professional interests.

3. **Portfolio**:
   - Display projects with the ability to view each in detail.

4. **Contact Information**:
   - Links to social networks and professional platforms.
   - Phone numbers with country indication.
   - Email address.

5. **Language Proficiency Levels**:
   - Display information about language skills with proficiency levels.

6. **Theme Switching**:
   - Ability to choose between a light and dark interface theme.

7. **Multilingualism**:
   - Support for Russian and English languages.

8. **Display of Personal Data**:
   - Full name, desired position, brief description.
   - Automatic calculation of work experience.

9. **CV Export to PDF**:
   - Ability to save the resume in PDF format.

## Non-Functional Requirements

1. **Performance**:
   - High loading speed and responsiveness of the application.

2. **Usability**:
   - An intuitive interface accessible to users of all levels.

3. **Adaptability**:
   - Correct display on various devices and screen resolutions.

4. **Compatibility**:
   - Support for all modern browsers.

5. **Scalability**:
   - Easy addition of content and functionality.

## Technologies

- React.js
- Next.js
- SASS
- i18next (for internationalization)
- Node.js (for server functions)
- BEM metology

## Architecture

![architecture](architecture.svg)

## Data Model

The data model is described in the file [`src/types/data.model.ts`](./src/types/data.model.ts)

## Design

Design references are available at [this link](https://www.figma.com/file/kY2MLfxX0K0WqTLJQ5iInD/CV-Petrov?type=design&node-id=5-431&mode=design&t=i5vBH6dY8X4iNS63-0).

Each element and group is named according to the following principle:
| Principle  | Example               | Description                          |
|------------|-----------------------|--------------------------------------|
| Starts with "_"  | `_layout` | Not involved in further layout and used only in Figma |
| Starts with a capital letter | `Header` | The element or group is a stylized HTML element |
| Starts with a capital letter and includes "generic"  | `Section<experience>` | The element or group is a reusable component. "Generic" indicates the purpose of the component instance |
| Starts with a lowercase letter | `title` | is a prop |

Used `breakpoints` are described in the file [`src/styles/_breakpoints.scss`](./src/styles/_breakpoints.scss)
