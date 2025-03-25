import React from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display'

const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-800 flex flex-col">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <Player /> {/* This will be pushed to the bottom */ }
    </div>
  );
}

export default App;

