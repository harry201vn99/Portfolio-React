import React from 'react'
import { backgroundAnimation, textAnimation } from './Animations'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'

const Main = () => {
    return (
        <div id="main">
            {backgroundAnimation()}
            <main className="relative overflow-hidden h-screen">
                <header className="h-24 sm:h-32 flex items-center w-full">
                    <div className="container mx-auto px-6 flex items-center justify-between">
                        <div className="uppercase dark:text-white font-black text-3xl">
                            Harry{' '}
                            <span className="dark:text-blue-500">Nguyen</span>
                        </div>
                    </div>
                </header>
                <div className="flex relative items-center overflow-hidden">
                    <div className="container mx-auto px-6 flex relative py-16">
                        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative">
                            <span className="w-20 h-2 dark:bg-white mb-12"></span>
                            <h1 className="text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white">
                                Howdy!,
                            </h1>
                            <br></br>
                            <h2 className="text-2xl sm:text-4xl font-black flex flex-col leading-none dark:text-white">
                                I&apos;m Harry Nguyen,
                            </h2>
                            <br></br>
                            <h2 className="text-2xl sm:text-4xl font-black flex leading-none dark:text-white whitespace-nowrap">
                                I&apos;m a&nbsp;{textAnimation()}
                            </h2>
                            <div className="flex mt-8 space-x-4">
                                <button
                                    href="#"
                                    className="uppercase py-2 px-4 rounded-lg bg-blue-600 border-2 border-transparent text-white text-md mr-4 hover:scale-110 ease-in duration-200"
                                >
                                    Download CV
                                </button>
                                <a href="https://github.com/harry201vn99">
                                    <IoLogoGithub
                                        className="rounded-full shadow-lg bg-gray-100 p-1 cursor-pointer hover:scale-110 ease-in duration-300"
                                        size={45}
                                    />
                                </a>
                                <a href="https://www.linkedin.com/in/harry-nguyen-a0222128b/">
                                    <IoLogoLinkedin
                                        className="rounded-full shadow-lg bg-gray-100 p-1 cursor-pointer hover:scale-110 ease-in duration-300"
                                        size={45}
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="hidden lg:block w-3/5 relative">
                            <img
                                src="../src/assets/photos/myImg.png"
                                className="w-8/12 h-8/12 m-auto"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Main
