{/* CURRENTLY DESKTOP ONLY! */ }

import { Link, NavLink } from 'react-router-dom'
import LogoArtixic from '../../assets/icons/LogoArtixic'
import '../../styles/Navbar.css'

const Navbar = () => {
    {/* Insert logic for hamburger menu for screens less than [x] width */ }

    return (
        <nav className='navbar'>
            <div className='navbar-inner'>
                <div className='navbar-brand'>
                    <Link to='/home' className='navbar-navigation-item-brand'>
                        <LogoArtixic />
                        <span className='navbar-logo-text'>ARTIXIC</span>
                    </Link>
                </div>

                {/* TODO: rename className below */}
                <div className='navbar-right'>
                    <div className='navbar-navigation'>
                        <ul className='navbar-navigation-list'>
                            <li className='navbar-navigation-link'>
                                <NavLink
                                    to='/home'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "navbar-navigation-link is-active"
                                            : "navbar-navigation-link"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className='navbar-navigation-link'>
                                <NavLink to='/art'>Art</NavLink>
                            </li>
                            <li className='navbar-navigation-link'>
                                <NavLink to='/collections'>Collections</NavLink>
                            </li>
                            <li className='navbar-navigation-link'>
                                <NavLink to='/about'>About</NavLink>
                            </li>
                        </ul>

                        {/* Insert button here for mobile devices */}
                    </div>

                    <div className='navbar-language-button'>
                        <button>
                            ENG
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar