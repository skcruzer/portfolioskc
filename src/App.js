import { useState } from 'react'
import Navbar from "./components/Navbar";
import CssBaseline from '@mui/material/CssBaseline';
import About from "./components/About";
import Projects from "./components/Work";
import Contact from "./components/Contact";
import Footer from './components/Footer'

function App() {
  return (
    <>
    <CssBaseline />
    <Navbar />

    <About />
    <Projects />
    <Contact />

    <Footer />
    </>
  );
}

export default App;
