import React, { useState } from 'react';
import './App.css';
import { LoadingScreen } from './component/loadingScreen';
import "./index.css"; 
import { Navbar } from './component/navbar';
import { MobileMenu } from './component/Mobilemenu';
import { Home } from './component/section/Home';
import { About } from './component/section/about';
import { Project } from './component/section/Project';
import { Contact } from './component/section/Contact';
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Use menuOpen everywhere

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home/>
        <About/>
        <Project/>
        <Contact/>
        
      </div>
    </>
  );
}

export default App;
