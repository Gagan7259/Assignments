import './App.css';
import Header from './Components/Header/HeaderComponent'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/AboutComponet'
import Experience from './Components/Experience Section/Experience'
import Service from './Components/Services/ServiceComponet'
import Portfolio from './Components/PortFolio/Portfoliocomponent'
import Testinamial from './Components/Testimonia/Testimonia'
import Contact from './Components/Contact/ContactComponent'
import Footer from './Components/Footer/FooterComponent'
function App() {
  return (
    <>
      <Header />
      <Navbar/>
      <About/>
      <Experience/>
      <Service/>
      <Portfolio/>
      <Testinamial/>
      <Contact/>
      <Footer/>
    </>

  );
}

export default App;
