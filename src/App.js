import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Catalogue from './Page/Catalogue/Catalogue';
import Home from './Page/Home/Home';
import Footer from './Component/Footer/Footer';
import Navbari from './Component/NavBar/navbar';
import Voiture from './Page/Catalogue/voitureId/Voiture';
import TitleBar from './Component/TitleBar/titleBar';
import Info from './Page/Info/Info';
import Sell from './Page/SellYouCar/Sell';
import About from './Page/About/About';

function App() {
  // Check if dark mode is saved in local storage
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  // Set the initial state based on local storage
  const [darkMode, setDarkMode] = useState(savedDarkMode);
  // If dark mode is not saved, default to true
  if (savedDarkMode === null) {
    setDarkMode(true);
  }
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Save the dark mode preference to local storage
    localStorage.setItem('darkMode', !darkMode);
  };
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-zinc-800">
        <TitleBar darkMode={darkMode} />
        <Navbari darkMode={darkMode} setDarkMode={toggleDarkMode} />

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="catalogue/:id" element={<Catalogue/>}/>
            <Route path="detail/:id" element={<Voiture/>}/>  
            <Route path='*' element={<Home/>}/>  
            <Route path='/mentions-legales' element={<Info/>}/>  
            <Route path='/sell-your-car' element={<Sell/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
