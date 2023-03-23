import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import Itemlc from './components/itemlistcontainer/itemlistc'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Itemlc saludar=", es el inicio del ecommerce"/>
    </div>
  )
}

export default App
