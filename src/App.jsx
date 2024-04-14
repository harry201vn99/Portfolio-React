import Sidenav from './components/Sidenav'
import Main from './components/Main'

function App() {
    return (
        <div className="dark:bg-gray-800 bg-white" id="bgcolor">
            <Sidenav />
            <Main />
        </div>
    )
}

export default App
