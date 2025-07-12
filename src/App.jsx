import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './components/user'

function App() {

  return (
  <div className='container p-4'>
    <h1>User Form</h1>
    <User/>
  </div>
  
  )
}

export default App
