
import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Characters from './components/Characters'

function App() {
  const [section, setSection] = useState('home')

  return (
    <>
      <Navbar onNavigate={setSection} />
      {section === 'home' && <Hero />}
      {section === 'characters' && <Characters />}
    </>
  )
}

export default App
