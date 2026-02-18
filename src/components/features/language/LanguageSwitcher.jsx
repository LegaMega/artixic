import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
    const [isLanguageOpen, setIsLanguageOpen] = useState(false)
    const languageRef = useRef(null)

    const toggleLanguageMenu = () => setIsLanguageOpen(prev => !prev)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (languageRef.current && !languageRef.current.contains(event.target)) {
                setIsLanguageOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className='language-switcher' ref={languageRef}>
            <button
                type='button'
                onClick={toggleLanguageMenu}
                className={`language-switcher-button ${isLanguageOpen ? 'open' : ''}`}
            >
                {/* Currently displays static text */}
                {/* TODO: turn text below to dynamic: default is ENG (English) */}
                ENG
                <ChevronDown className='language-switcher-icon' />
            </button>


            {isLanguageOpen && (
                <div className='language-switcher-dropdown'>
                    <button
                        type='button'
                        className='language-switcher-dropdown-option'
                    >
                        English ENG
                    </button>
                    <button
                        type='button'
                        className='language-switcher-dropdown-option'
                    >
                        Dutch NLD
                    </button>
                </div>
            )}
        </div>
    )
}

export default LanguageSwitcher
