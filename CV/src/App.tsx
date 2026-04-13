import './App.css'
import './components/Profile'
import Profile from './components/Profile'
import Utbildning from './components/Utbildning'
import Styrkor from './components/Styrkor'
import MyProjects from './components/myProjects'

function App() {

  return (
    <div id='cv'>
      <Profile/>
      <Utbildning/>
      <Styrkor/>
      <MyProjects/>
    </div>
  )
}

export default App
