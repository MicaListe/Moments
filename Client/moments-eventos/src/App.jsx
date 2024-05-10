import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import CarouselPlaces  from './components/Carousel/carouselPlaces';
import CarouselCatering from './components/Carousel/carouselCatering';
import CarouselDecoration from './components/Carousel/carouselDecoration';
import Subtitulo from './components/SubTitulo/SubTitulo';
import Valores from './components/Valores/valores';
import axios from "axios"

axios.defaults.baseURL="https://moments-self.vercel.app"

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Subtitulo/>
      <CarouselPlaces/>
      <CarouselCatering/>
      <CarouselDecoration/>
      <Valores/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
