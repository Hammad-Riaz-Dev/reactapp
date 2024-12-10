import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Textform from './components/Textform';
import Navbar from './components/navbar';

function App() {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("mode");
    return savedMode ? savedMode : "light";
  });

  // Change the mode (light/dark) and save to localStorage
  const changeMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode); // Save the new mode in localStorage
  };

  // Apply the mode to the body when it changes
  useEffect(() => {
    document.body.classList.remove(mode === "light" ? "bg-dark" : "bg-light", mode === "light" ? "text-light" : "text-dark");
    document.body.classList.add(mode === "light" ? "bg-light" : "bg-dark", mode === "light" ? "text-dark" : "text-light");
  }, [mode]);


  return (
    <div>
      <Navbar 
        brand="HAMMAD RIAZ" 
        home="MY HOME" 
        pricing="Price Link" 
        mode={mode}  
        changeMode={changeMode}
        dropdown="DropDown Click" 
        about="About US" 
        aboutLink="http://localhost:3000/components/about.js"
      />
      <Textform
        lable="WORD - Counter" 
        row="6" 
        placeholder="Start Typing Here" 
        value="ENTER TEXT" 
        id="txt-form"
      />
    </div>
  );
}

export default App;
