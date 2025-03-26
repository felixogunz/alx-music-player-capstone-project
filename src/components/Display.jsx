import React, { useRef, useEffect } from 'react'
import DisplayHome from './DisplayHome'
import { Routes, Route, useLocation } from 'react-router-dom'; 
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/assets';

const Display = () => {

   const displayRef = useRef(); 
   const location = useLocation();
   const isAlbum = location.pathname.includes("album");
   const albumId = isAlbum ? location.pathname.slice(-1) : "";
   const bgColor = albumsData[Number(albumId)].bgColor;

      useEffect(() => {
        if (isAlbum) {
          displayRef.current.style.backgroundColor = `linear-gradient(${bgColor},#0A0A0A)`
        }
        else {
          displayRef.current.style.backgroundColor = `#0A0A0A`
        }
      })

  return (
    <div ref={displayRef} className='w-[105%] m-2 px-6 pt-4 rounded bg-gray-800 text-white overflow-auto lg:w-[80%] lg:ml-auto'>
        <Routes>
            <Route path='/' element={<DisplayHome/>} />
            <Route path='/album/:id' element={<DisplayAlbum/>} />
        </Routes>
    </div>
  )
}

export default Display
