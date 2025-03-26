import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const SongItem = ({ name, desc, id, image }) => {

  const { playWithId } = useContext(PlayerContext);

  return (
    <div  onClick={() => playWithId(id)} className="album-item flex-shrink-0">
      <div className="w-48 h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-none" // Use w-full and h-full to ensure it fills the container
        />
      </div>
      <div className="text-center w-48">  {/* Set the width of the text container to match the image */}
        <h3 className="text-xl text-white mb-2">{name}</h3>  {/* 10px margin between text and image */}
        <p className="text-sm text-white">{desc}</p>
      </div>
    </div>
  );
};

export default SongItem;

