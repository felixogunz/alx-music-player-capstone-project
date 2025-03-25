import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const AlbumItem = ({ name, desc, id, image }) => {

  const navigate = useNavigate();

  return (
        <div onClick={()=>navigate(`/album/${id}`)} className="album-item flex-shrink-0">
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

export default AlbumItem;

