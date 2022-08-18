import { useEffect } from 'react';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import ScrollUp from '../components/ScrollUp/ScrollUp';
import './App.scss';

function App() {
  useEffect(() => {
    const scrollUp = () => {
      const scrollUp = document.getElementById('scroll-up');
      window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
    };
    window.addEventListener('scroll', scrollUp);
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Card />
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
