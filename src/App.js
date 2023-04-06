import './App.css';
import Education from './components/education/education';
import Home from './components/home/home';
import Navbar from "./components/navbar/navbar";
import Skills from './components/skills/skills';
import Works from './components/works/works';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import { themeContext } from './context';
import { useContext } from 'react';
function App() {
 const theme = useContext(themeContext);
 const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{background:darkMode?'black' : '', 
    color: darkMode? 'white' :''}}
    >
      <Navbar />
      <Home />
      <Education />
      <Works />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
