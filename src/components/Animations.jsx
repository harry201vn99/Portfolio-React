import { TypeAnimation } from 'react-type-animation'

const backgroundAnimation = () => {
    return (
        <div className="area">
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

const textAnimation = () => {
    return (
        <TypeAnimation
            sequence={[
                'Front-End Developer',
                3000,
                'Web Developer',
                3000,
                'Tech Enthusiast',
                3000,
                'PC Builder',
                3000,
            ]}
            className="dark:text-blue-600"
            wrapper="span"
            speed={50}
            repeat={Infinity}
        />
    )
}

export { backgroundAnimation, textAnimation }
