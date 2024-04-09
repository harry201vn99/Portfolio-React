import React from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

const Darkmode = () => {
    const [theme, setTheme] = React.useState(false)

    const darkModeToggler = () => {
        setTheme(!theme)
        document.body.classList.toggle('dark')
    }

    return (
        <button
            className="bg-transparent hover:bg-blue-500 text-gray-800 hover:text-white py-2 px-4 border hover:border-transparent rounded-full"
            onClick={() => darkModeToggler()}
        >
            {theme && <MdLightMode size={20} />}
            {!theme && <MdDarkMode size={20} />}
        </button>
    )
}

export default Darkmode
