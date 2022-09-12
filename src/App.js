import './App.css';
import './utilities.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntroComponent from './components/Intro/IntroComponent';
import FoodMenu from './components/FoodMenu/FoodMenu';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OurTeam from './components/OurTeam/OurTeam';
AOS.init();

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <IntroComponent />
          <FoodMenu />
          <OurTeam />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
