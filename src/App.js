import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingScreen from './components/Screens/LandingScreen';

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
