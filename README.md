#  [RU] Вебсайт личного резюме

## Описание проекта (к чему стремимся):

Этот проект представляет собой интерактивное веб-приложение, созданное с использованием React и Next.js, предназначенное для демонстрации моего профессионального резюме. Веб-сайт включает детальную информацию обо мне, моем опыте работы, портфолио проектов, а также контактной информации. Приложение поддерживает мультиязычность (русский и английский) и предоставляет возможность переключения между светлой и тёмной темами.

## Функциональные требования:

1. **Информация о работе**:
   - Вывод списка компаний, должностей, периодов работы.
   - Показ достижений, должностных обязанностей и описания проектов.
   - Детализация использованных технологий.

2. **Раздел "Обо мне"**:
   - Представление личной информации и профессиональных интересов.

3. **Портфолио**:
   - Показ проектов с возможностью детального просмотра каждого из них.

4. **Контактная информация**:
   - Ссылки на социальные сети и профессиональные платформы.
   - Номера телефонов с указанием страны.
   - Адрес электронной почты.

5. **Уровни знания языков**:
   - Вывод информации о владении языками с указанием уровня владения.

6. **Переключение тем**:
   - Возможность выбора между светлой и тёмной темами интерфейса.

7. **Мультиязычность**:
   - Поддержка русского и английского языков.

8. **Отображение персональных данных**:
   - ФИО, желаемая позиция, краткое описание.
   - Автоматический расчёт стажа работы.

9. **Экспорт CV в PDF**:
   - Возможность сохранения резюме в PDF-формате.

## Нефункциональные требования

1. **Производительность**:
   - Высокая скорость загрузки и отзывчивость приложения.

2. **Удобство использования**:
   - Интуитивно понятный интерфейс, доступный для пользователей всех уровней.

3. **Адаптивность**:
   - Корректное отображение на различных устройствах и разрешениях экрана.

4. **Совместимость**:
   - Поддержка всех современных браузеров.

6. **Масштабируемость**:
   - Лёгкое добавление контента и функциональности.

## Технологии

- React.js
- Next.js
- SASS
- i18next (для интернационализации)
- Node.js (для серверных функций)

## Архитектура

![architecture](architecture.svg)

## Модель данных

Модель данных описана в файле [```src/types/data.model.ts```](./src/types/data.model.ts)

## Дизайн

Референсы дизайна представлены по [ссылке](https://www.figma.com/file/kY2MLfxX0K0WqTLJQ5iInD/CV-Petrov?type=design&node-id=5-431&mode=design&t=i5vBH6dY8X4iNS63-0)

Каждый элемент и группа именуются по следующему принципу:
| Принцип    | Пример                | Описание                             |
|-----------------|-----------------------|--------------------------------------|
| Начинается с "_"  | ```_layout``` | Не относится к дальнейшей вёрстке и используется только в figma |
| Начинается с большой буквы | ```Header``` | Элемент или группа является стилизованым HTML-элементом            |
| Начинается с большой буквы и имеет "дженерик"  | ```Section<experience>``` | Элемент или группа является переиспользуемым компонентом. "Дженерик" указывает на назначение экземпляра компонента |
| Начинается с маленькой буквы | ```title``` | является пропсом |

# [EN] Personal CV Website

## Project Description (Goals):

This project is an interactive web application built using React and Next.js, designed to showcase my professional resume. The website includes detailed information about me, my work experience, project portfolio, and contact information. The application supports multilingual capabilities (Russian and English) and offers the ability to switch between light and dark themes.

## Functional Requirements:

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
   - Ability to choose between light and dark interface themes.

7. **Multilingual Support**:
   - Support for Russian and English languages.

8. **Personal Data Display**:
   - Full name, desired position, brief description.
   - Automatic calculation of work experience.

9. **Export CV to PDF**:
   - Ability to save the resume in PDF format.

## Non-Functional Requirements

1. **Performance**:
   - High loading speed and responsiveness of the application.

2. **Usability**:
   - Intuitive interface accessible to users of all levels.

3. **Adaptability**:
   - Correct display on various devices and screen resolutions.

4. **Security**:
   - Protection of personal data and security of the web platform.

5. **Compatibility**:
   - Support for all modern browsers.

6. **Scalability**:
   - Easy addition of content and functionality.

## Technologies

- React.js
- Next.js
- CSS-in-JS (styled-components or emotion)
- i18next (for internationalization)
- Node.js (for server functions, if necessary)

## Architecture

![architecture](architecture.svg)

## Data Model

The data model is described in the file [```src/types/data.model.ts```](./src/types/data.model.ts)

## Design

Design references are available at this [link](https://www.figma.com/file/kY2MLfxX0K0WqTLJQ5iInD/CV-Petrov?type=design&node-id=5-431&mode=design&t=i5vBH6dY8X4iNS63-0)

Each element and group is named according to the following principle:
| Principle    | Example                | Description                             |
|-----------------|-----------------------|--------------------------------------|
| Starts with "_"  | ```_layout``` | Not related to further layout and is used only in Figma |
| Starts with an uppercase letter | ```Header``` | The element or group is a styled HTML element |
| Starts with an uppercase letter and has "generic"  | ```Section<experience>``` | The element or group is a reusable component. "Generic" indicates the purpose of the component instance |
| Starts with a lowercase letter | ```title``` | is a prop |
