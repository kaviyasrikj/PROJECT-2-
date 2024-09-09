import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'
import Hero from './Pages/Hero'
import Section from './Pages/Section'
import Section2 from './Pages/Section2'
import Section3 from './Pages/Section3'
import Section4 from './Pages/Section4'

import './App.css'

function App() {
  

  return (
    <>
    <Hero/>
    <Section/>
    <Section2/>
    <Section3/>
    <Section4/>
    </>
  )
}

export default App

