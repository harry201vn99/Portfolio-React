import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { GoHome } from 'react-icons/go'
import { IoMailOutline, IoDocumentTextOutline } from 'react-icons/io5'
import { BsFileEarmarkPerson } from 'react-icons/bs'
import { HiOutlineClipboardDocumentCheck } from 'react-icons/hi2'
import Darkmode from './Darkmode'

const Sidenav = () => {
    const [nav, setNav] = useState(false)
    const changeNav = () => {
        setNav(!nav)
    }

    return (
        <div>
            <div className="absolute top-4 right-4 z-[99] flex items-center">
                <Darkmode />
                <FiMenu
                    onClick={changeNav}
                    className="md:hidden rounded-full shadow-lg bg-white p-1 cursor-pointer hover:scale-110 ease-in duration-300"
                    size={25}
                />
            </div>
            {nav ? (
                <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                    <a
                        href="#main"
                        className="w-[75%] flex justify-center rounded-full shadow-lg bg-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <GoHome size={20} />
                        <span className="pl-4">Home</span>
                    </a>
                    <a
                        href="#about"
                        className="w-[75%] flex justify-center rounded-full shadow-lg bg-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <BsFileEarmarkPerson size={20} />
                        <span className="pl-4">About</span>
                    </a>
                    <a
                        href="#skill"
                        className="w-[75%] flex justify-center rounded-full shadow-lg bg-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <HiOutlineClipboardDocumentCheck size={20} />
                        <span className="pl-4">Skills</span>
                    </a>
                    <a
                        href="#project"
                        className="w-[75%] flex justify-center rounded-full shadow-lg bg-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <IoDocumentTextOutline size={20} />
                        <span className="pl-4">Projects</span>
                    </a>
                    <a
                        href="#contact"
                        className="w-[75%] flex justify-center rounded-full shadow-lg bg-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <IoMailOutline size={20} />
                        <span className="pl-4">Contact</span>
                    </a>
                </div>
            ) : (
                ''
            )}

            <div className="md:block hidden fixed top-[25%] z-10 right-2">
                <div className="flex flex-col">
                    <a
                        href="#main"
                        className="rounded-full shadow-lg dark:bg-white dark:text-black bg-blue-600 text-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <GoHome size={20} />
                    </a>
                    <a
                        href="#about"
                        className="rounded-full shadow-lg dark:bg-white dark:text-black bg-blue-600 text-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <BsFileEarmarkPerson size={20} />
                    </a>
                    <a
                        href="#skill"
                        className="rounded-full shadow-lg dark:bg-white dark:text-black bg-blue-600 text-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <HiOutlineClipboardDocumentCheck size={20} />
                    </a>
                    <a
                        href="#project"
                        className="rounded-full shadow-lg dark:bg-white dark:text-black bg-blue-600 text-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <IoDocumentTextOutline size={20} />
                    </a>
                    <a
                        href="#contact"
                        className="rounded-full shadow-lg dark:bg-white dark:text-black bg-blue-600 text-white m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
                    >
                        <IoMailOutline size={20} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidenav
