import React from 'react';
import './App.css';
import Chat from './features/Chat/Chat';
import Sidebar from './features/SideBar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Chat/>

    </div>
  );
}

export default App;
