import React from 'react';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className='w-[20%] h-screen p-4 flex flex-col gap-4 text-white bg-[#121212] fixed top-0 left-0 lg:flex'>
      {/* Home & Search Section */}
      <div className='rounded flex flex-col gap-4'>
        <div className='flex items-center gap-3 p-3 cursor-pointer hover:bg-[#242424] rounded'>
          <img className='w-6' src={assets.home_icon} alt='Home' />
          <p className='font-bold text-sm'>Home</p>
        </div>
        <div className='flex items-center gap-3 p-3 cursor-pointer hover:bg-[#242424] rounded'>
          <img className='w-6' src={assets.search_icon} alt='Search' />
          <p className='font-bold text-sm'>Search</p>
        </div>
      </div>
      
      {/* Your Library Section */}
      <div className='flex flex-col flex-grow bg-[#121212] rounded'>
        <div className='p-3 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-6' src={assets.stack_icon} alt='Library' />
            <p className='font-semibold text-sm'>Your Library</p>
          </div>
          <div className='flex items-center gap-2'>
            <img className='w-4 cursor-pointer' src={assets.plus_icon} alt='Add'/>
            <img className='w-4 cursor-pointer' src={assets.arrow_icon} alt='More'/>
          </div>
        </div>
        
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-2'>
          <h1 className='text-sm'>Create your first playlist</h1>
          <p className='text-xs font-light'>It's easy, we'll help you</p>
          <button className='px-4 py-1 bg-white text-black text-xs rounded-full mt-2'>Create Playlist</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


/*
import React from 'react';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className='w-[12%] h-screen p-4 flex flex-col gap-4 text-white bg-[#121212] fixed top-0 left-0 lg:flex'>
      {/* Home & Search Section }
      <div className='rounded flex flex-col gap-4'>
        <div className='flex items-center gap-3 p-3 cursor-pointer hover:bg-[#242424] rounded'>
          <img className='w-6' src={assets.home_icon} alt='Home' />
          <p className='font-bold text-sm'>Home</p>
        </div>
        <div className='flex items-center gap-3 p-3 cursor-pointer hover:bg-[#242424] rounded'>
          <img className='w-6' src={assets.search_icon} alt='Search' />
          <p className='font-bold text-sm'>Search</p>
        </div>
      </div>
      
      {/* Your Library Section }
      <div className='flex flex-col flex-grow bg-[#121212] rounded'>
        <div className='p-3 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-6' src={assets.stack_icon} alt='Library' />
            <p className='font-semibold text-sm'>Your Library</p>
          </div>
          <div className='flex items-center gap-2'>
            <img className='w-4 cursor-pointer' src={assets.plus_icon} alt='Add' />
            <img className='w-4 cursor-pointer' src={assets.arrow_icon} alt='More'/>
          </div>
        </div>
        
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-2'>
          <h1 className='text-sm'>Create your first playlist</h1>
          <p className='text-xs font-light'>It's easy, we'll help you</p>
          <button className='px-4 py-1 bg-white text-black text-xs rounded-full mt-2'>Create Playlist</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
*/