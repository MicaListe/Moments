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
import Bodas from './components/Bodas/bodaEnLaPlaya/bodas';
import BodaPlaya from './components/Bodas/bodaEnLaPlaya/bodaPlaya';
import FiestasCorp from "./components/FiestasCorp/FiestasCorp"
import BodaQuinta from './components/Bodas/bodaEnLaquinta/bodaQuinta';
import BodaEnSalon from './components/Bodas/bodaEnElSalon/bodaSalon';
import FiestasEgre from './components/FiestasEgre/FiestasEgre';
import Bautismos from './components/Bautismos/BautismosEnElSalon/Bautismos';
import BautismoSalon from './components/Bautismos/BautismosEnElSalon/BautismoSalon';
import BautismoQuinta from './components/Bautismos/BautismosEnLaQuinta/BautismoQuinta'
import Team from './components/Team/Team';

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
        <Route path="/Team" element={<Team/>}/>
        <Route path="/bodas" element={<Bodas/>}/>
        <Route path="/playas" element={<BodaPlaya/>}/>
        <Route path='/quintas' element={<BodaQuinta/>}/>
        <Route path="/FiestasCorp" element={<FiestasCorp/>}/>
        <Route path="/FiestasEgre" element={<FiestasEgre/>}/>
        <Route path="/Bautismos" element={<Bautismos/>}/>
        <Route path='/salones' element={<BodaEnSalon/>}/>
        <Route path="/bautismosalon" element={<BautismoSalon/>}/>
        <Route path="/bautismoquinta" element={<BautismoQuinta/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
