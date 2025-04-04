import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

   const navigate = useNavigate();

  return (
    <div className='w-[20%] h-screen p-4 flex flex-col gap-4 text-white bg-gray-950 fixed top-0 left-0 lg:flex z-10'>
      {/* Home & Search Section */}
      <div className='rounded flex flex-col gap-4'>
        <div onClick={()=>navigate('/')} className='flex items-center gap-3 p-3 cursor-pointer hover:bg-[#242424] rounded'>
          <img className='w-6' src={assets.home_icon} alt='Home' />
          <p className='font-bold text-sm'>Home</p>
        </div>
        <div className='flex items-center gap-3 p-3 cursor-pointer hover:bg-[#242424] rounded'>
          <img className='w-6' src={assets.search_icon} alt='Search' />
          <p className='font-bold text-sm'>Search</p>
        </div>
      </div>

      {/* Your Library Section */}
      <div className='flex flex-col flex-grow bg-gray-900 rounded'>
        <div className='p-3 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-6' src={assets.stack_icon} alt='Library' />
            <p className='font-semibold text-sm'>Your Library</p>
          </div>
          <div className='flex items-center gap-2'>
            <img className='w-4 cursor-pointer' src={assets.plus_icon} alt='Add' />
            <img className='w-4 cursor-pointer' src={assets.arrow_icon} alt='More' />
          </div>
        </div>

        <div className='p-4 bg-gray-950 m-2 rounded font-semibold flex flex-col items-start gap-2'>
          <h1 className='text-sm'>Create your first playlist</h1>
          <p className='text-xs font-light'>It's easy, we'll help you</p>
          <button className='px-4 py-1 bg-white text-black text-xs rounded-full mt-2'>Create Playlist</button>
        </div>

        <div className='p-4 bg-gray-950 m-2 rounded font-semibold flex flex-col items-start gap-2 mt-4'>
          <h1 className='text-sm'>Find your favorite podcast to follow</h1>
          <p className='text-xs font-light'>Get new episodes as they come</p>
          <button className='px-4 py-1 bg-white text-black text-xs rounded-full mt-2'>Get podcast</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
