import { Menu } from 'lucide-react'

const HamburgerButton = ({ isNavigationMenuOpen, onNavigationMenuToggle }) => {
    return (
        <div className='hamburger-button'>
            <button
                type='button'
                className='hamburger-button-button'
                onClick={onNavigationMenuToggle}
                aria-expanded={isNavigationMenuOpen}
                aria-label='Toggle navigation'
            >
                <Menu color='#3c414d' />
            </button>
        </div>
    )
}

export default HamburgerButton
