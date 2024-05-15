import { Routes, Route, } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import CarouselPlaces  from './components/Carousel/carouselPlaces';
import CarouselCatering from './components/Carousel/carouselCatering';
import CarouselDecoration from './components/Carousel/carouselDecoration';
import Subtitulo from './components/SubTitulo/SubTitulo';
import Valores from './components/Valores/valores';
import axios from "axios"
import AboutUs from './components/AboutUs/AboutUs';
import Sucursales from './components/Sucursales/Sucursales';
import Bodas from './components/Bodas/boda en la playa/bodas';
import BodaPlaya from './components/Bodas/boda en la playa/bodaPlaya';
import FiestasCorp from "./components/FiestasCorp/FiestasCorp"

axios.defaults.baseURL="https://moments-self.vercel.app"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            <Subtitulo/>
            <CarouselPlaces/>
            <CarouselCatering/>
            <CarouselDecoration/>
            <Valores/>
          </>
        }/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/Sucursales" element={<Sucursales/>}/>
        <Route path="/bodas" element={<Bodas/>}/>
        <Route path="/playas" element={<BodaPlaya/>}/>
        <Route path="/FiestasCorp" element={<FiestasCorp/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
