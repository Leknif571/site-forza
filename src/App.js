import './App.css';
import { Route, Routes } from 'react-router-dom';
import Catalogue from './Page/Catalogue/Catalogue';
import Home from './Page/Home/Home';
import Footer from './Component/Footer/Footer';
import Navbari from './Component/NavBar/navbar';
import Voiture from './Page/Catalogue/voitureId/Voiture';

function App() {
  return (
    <div className="App bg-black">
      <Navbari/>

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="catalogue" element={<Catalogue/>}/>
          <Route path="detail/:id" element={<Voiture/>}/>  
          <Route path='*' element={<Home/>}/>    
      </Routes>

      <Footer/>


    </div>
  );
}

export default App;
