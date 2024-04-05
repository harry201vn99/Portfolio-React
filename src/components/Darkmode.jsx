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
            className="rounded-full shadow-lg bg-gray-100 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            onClick={() => darkModeToggler()}
        >
            {theme && <MdLightMode size={20} />}
            {!theme && <MdDarkMode size={20} />}
        </button>
    )
}

export default Darkmode
