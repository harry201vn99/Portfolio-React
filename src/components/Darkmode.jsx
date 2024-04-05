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
            className="rounded-full shadow-lg dark:bg-gray-100 dark:text-black bg-blue-600 text-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-0"
            onClick={() => darkModeToggler()}
        >
            {theme && <MdLightMode size={20} />}
            {!theme && <MdDarkMode size={20} />}
        </button>
    )
}

export default Darkmode
