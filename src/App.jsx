import React, { useContext } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext';

const App = () => {

  const {audioRef,track} = useContext(PlayerContext);

  return (
    <div className="w-screen h-screen bg-gray-800 flex flex-col">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player /> {/* This will be pushed to the bottom */ }
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  );
}

export default App;

