import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import CarouselPlaces  from './components/Carousel/carouselPlaces';
import CarouselCatering from './components/Carousel/carouselCatering';
import CarouselDecoration from './components/Carousel/carouselDecoration';




function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <CarouselPlaces/>
      <CarouselCatering/>
      <CarouselDecoration/>
        
      {/* <Footer /> */}
    </div>
  );
}

export default App;
