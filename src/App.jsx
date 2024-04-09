import Sidenav from './components/Sidenav'
import Main from './components/Main'
import About from './components/About'

function App() {
    return (
        <div className="dark:bg-gray-800 bg-white" id="bgcolor">
            <Sidenav />
            <Main />
            <About />
        </div>
    )
}

export default App
