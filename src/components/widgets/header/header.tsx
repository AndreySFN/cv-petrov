import './header.scss'
import '../../../styles/typography.scss'
import '../../../styles/grid.scss'

export const Header = () => {
    return (
        <div className='header'>
            <div className="header__avatar-container">
                <img className="header__avatar" src={'/avatar.jpg'} alt='avatar' />
            </div>
            <div className="header__title-container">
                <h1 className='header__title --bold --blue'>Middle+/Senior Frontend developer</h1>
                <h2 className='header__name --bold --blue'>Петров Андрей Валентинович</h2>
                <h3 className='header__desc --italic --blue'>React, Typescript, Next.js, Node.js, Redux</h3>
                <h3 className='header__experience-oeriod --bold --blue'>WORK EXPIRIENCE - 4 years 4 months</h3>
                <h5 className='header__adress --light'>⌂ Armenia Republic, Yerevan, metro Zoravar Andranik, Republic Squere — 25 y.o</h5>
                <h4 className='header__note --black --italic --bold'>Remote or Armenia only</h4>
            </div>
        </div>
    )
}