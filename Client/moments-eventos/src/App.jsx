import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import CarouselPlaces  from './components/Carousel/carousel places';
// import CarouselCatering from './components/Carousel/carousel catering';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <CarouselPlaces/>
      {/* <CarouselCatering/> */}
      <Footer />
    </div>
  );
}

export default App;
