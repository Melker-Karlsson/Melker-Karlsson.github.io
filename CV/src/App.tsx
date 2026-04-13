import { useState } from 'react'
import './App.css'
import './components/Profile'
import Profile from './components/Profile'
import Utbildning from './components/Utbildning'
import Styrkor from './components/Styrkor'

function App() {

  return (
    <div id='cv'>
      <Profile/>
      <Utbildning/>
      <Styrkor/>
    </div>
  )
}

export default App
