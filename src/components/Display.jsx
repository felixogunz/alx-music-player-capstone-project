import React from 'react'
import DisplayHome from './DisplayHome'
import { Routes, Route } from 'react-router-dom'; 
import DisplayAlbum from './DisplayAlbum';

const Display = () => {
  return (
    <div className='w-[105%] m-2 px-6 pt-4 rounded bg-gray-900 text-white overflow-auto lg:w-[80%] lg:ml-auto'>
        <Routes>
            <Route path='/' element={<DisplayHome/>} />
            <Route path='/album/:id' element={<DisplayAlbum/>} />
        </Routes>
    </div>
  )
}

export default Display
