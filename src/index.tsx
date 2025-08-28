import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [hash, setHash] = useState(window.location.hash.replace('#', ''));

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash.replace('#', ''));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  let Page = Home;
  if (hash === 'about') Page = About;
  if (hash === 'projects') Page = Projects;
  if (hash === 'contact') Page = Contact;

  return (
    <>
      <Header />
      <main style={{ maxWidth: "800px", margin: "2rem auto", padding: "1rem" }}>
        <Page />
      </main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);