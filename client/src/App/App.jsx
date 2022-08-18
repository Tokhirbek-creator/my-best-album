import { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import ScrollUp from '../components/ScrollUp/ScrollUp';
import './App.scss';

function App() {
  const [photos, setPhotos] = useState([]);
  const [inputs, setInputs] = useState({});
  const [me, setMe] = useState({});

  useEffect(() => {
    fetch('http://localhost:3001/photos')
      .then((response) => response.json())
      .then((result) => setPhotos(result.content))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', inputs.title);
    formData.append('file', inputs.file);

    fetch('http://localhost:3001/upload', { method: 'Post', body: formData })
      .then((response) => response.json())
      .then((result) => setPhotos((prev) => ([...prev, result])))
      .finally(() => setInputs({}));
  };

  const handleInputs = (e) => {
    if (e.target.type === 'file') {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
    } else {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  useEffect(() => {
    const scrollUp = () => {
      const scrollUp = document.getElementById('scroll-up');
      window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
    };
    window.addEventListener('scroll', scrollUp);
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/me')
      .then((response) => response.json())
      .then((result) => setMe(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <Home handleSubmit={handleSubmit} handleInputs={handleInputs} me={me} />
      <Card photos={photos} />
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
