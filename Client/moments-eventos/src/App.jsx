import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import Home  from './components/Home/home';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      
      <div className="main-content">
        <Routes>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
