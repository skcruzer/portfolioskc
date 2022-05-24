import Navbar from "./components/Navbar";
import CssBaseline from '@mui/material/CssBaseline';
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    <CssBaseline />
    <Navbar />
    <About />
    <Projects />
    <Contact />
    </>
  );
}

export default App;
