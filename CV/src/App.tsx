import './App.css'
import './components/Profile'
import Profile from './components/Profile'
import Utbildning from './components/Utbildning'
import Styrkor from './components/Styrkor'
import MyProjects from './components/myProjects'
import Erfarenheter from './components/Erfarenheter'

function App() {

  return (
    <div id='cv'>
      <Profile/>
      <Utbildning/>
      <Erfarenheter/>
      <Styrkor/>
      <MyProjects/>
    </div>
  )
}

export default App
