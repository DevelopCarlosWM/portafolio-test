import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import LandingScreen from './components/Screens/LandingScreen';
import AboutMeScreen from './components/Screens/AboutScreen';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="main-container">
      <Header />
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path='/about' exact element={<AboutMeScreen />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
