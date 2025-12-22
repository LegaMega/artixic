{/* CURRENTLY DESKTOP ONLY! */ }

import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    {/* Insert logic for hamburger menu for screens less than [x] width */ }

    return (
        <div className='navbar'>
            <nav className='navbar-content'>

                <div className='navbar-content-left'>
                    <div className='logo-container'>
                        <Link to='/home' className='logo-navigation-item'>
                            {/* Add SVG logo and text here */}
                            Example
                        </Link>
                    </div>
                </div>

                <div className='navbar-content-right'>
                    <ul className='navigation-list'>
                        <li className='navigation-item'>
                            <NavLink to='/home'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/art'>Art</NavLink>
                        </li>
                        <li>
                            <NavLink></NavLink>
                        </li>
                    </ul>

                    {/* Insert button here for mobile devices */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar