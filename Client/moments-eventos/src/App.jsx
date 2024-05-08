import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import CarouselPlaces  from './components/Carousel/carouselPlaces';
import CarouselCatering from './components/Carousel/carouselCatering';
import CarouselDecoration from './components/Carousel/carouselDecoration';
import axios from "axios"
import { useEffect} from 'react';
import {useDispatch} from "react-redux"
import { getEvents } from './Redux/actions';

axios.defaults.baseURL="https://moments-self.vercel.app"

function App() {
  
  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(getEvents())
  },[])

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
