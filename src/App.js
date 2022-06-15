import { useState } from 'react'
import Navbar from "./components/Navbar";
import CssBaseline from '@mui/material/CssBaseline';
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from './components/Footer'

function App() {
  const [pageState, setPageState] = useState({
    about: true,
    projects: false,
    contact: false
  })
  return (
    <>
    <CssBaseline />
    <Navbar pageState={pageState} setPageState={setPageState} />
    {pageState.about ? <About /> : ''}
    {pageState.projects ? <Projects /> : ''}
    {pageState.contact ? <Contact /> : ''}
    
    <Footer />
    </>
  );
}

export default App;
