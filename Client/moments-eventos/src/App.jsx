import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Routes>
          {/* Definir rutas aquí si es necesario */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
