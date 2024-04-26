import "./App.css";
import Navbar from "./components/Header/Header.jsx";
import Homesection from "./components/HomeSection/Homesection.jsx";
import About from "./components/About/About.jsx";
import Education from "./components/Education/Education.jsx";
import Skills from "./components/Skill/Skill.jsx";
import Projects from "./components/Project/Project.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar title="Portfolio" contact="contact us" />
      <Homesection />
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Footer/>
 
    </>
  );
}
export default App;
