import React from 'react'
import Header from './components/Header.jsx'
import Game from './components/Game.jsx'
import Turn from './components/Turn.jsx'
const App = () => {
  return (
    <div className='overflow-hidden'>
      <Header/>

      <Game/>
    </div>
  )
}

export default App