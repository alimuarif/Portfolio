import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="app">
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      {/* <Services/> */}
      <Portfolio/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
