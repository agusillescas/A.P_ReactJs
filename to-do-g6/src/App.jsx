import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <TaskList />
      </div>
    </>
  )
}

export default App;