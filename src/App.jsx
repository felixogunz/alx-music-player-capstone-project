import React from 'react'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    /*<div className='h-screen bg-black'>*/
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <div className='h-[90%] flex'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App