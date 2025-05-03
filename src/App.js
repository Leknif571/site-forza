import './App.css';
import { Route, Routes } from 'react-router-dom';
import Catalogue from './Page/Catalogue/Catalogue';
import Home from './Page/Home/Home';
import Footer from './Component/Footer/Footer';
import Navbari from './Component/NavBar/navbar';
import Voiture from './Page/Catalogue/voitureId/Voiture';
import TitleBar from './Component/TitleBar/titleBar';

function App() {
  return (
    <div className="App bg-black">
      <TitleBar/>
      <Navbari/>

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="catalogue/:id" element={<Catalogue/>}/>
          <Route path="detail/:id" element={<Voiture/>}/>  
          <Route path='*' element={<Home/>}/>    
      </Routes>

      <Footer/>


    </div>
  );
}

export default App;
