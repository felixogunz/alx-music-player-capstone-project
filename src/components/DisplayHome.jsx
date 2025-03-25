import React from 'react';
import NavBar from './NavBar';
import { albumsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import { songsData } from '../assets/assets';
import SongItem from './SongItem';

const DisplayHome = () => {
  return (
    <>
      <NavBar />
      
      {/* Featured Charts Section */}
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-x-auto py-4 scrollbar-hidden'>
          {albumsData.map((item, index) => (
            <div key={index} className="mr-5">
              <AlbumItem
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Biggest Gospel Hits Section */}
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Biggest Gospel Hits</h1>
        <div className='flex overflow-x-auto py-4 scrollbar-hidden'>
          {songsData.map((item, index) => (
            <div key={index} className="mr-5">
              <SongItem
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
