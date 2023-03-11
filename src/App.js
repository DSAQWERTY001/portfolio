import React from "react";
import "./style/App.css"
import { motion } from 'framer-motion';
import Home from "./components/home/home";
import { useState, useEffect } from "react";
import { useVariantMousePosition, useCursorVariant } from "./assert/hooks/variantMousePosition"
import Topnavbar from "./components/navbar/top-navbar";
import Bottomnavbar from "./components/navbar/bottom-nav";
import Footer from "./components/footer/footer";
import Skills from "./components/skills/skills";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

function App() {
  const useVariantMousePositions = useVariantMousePosition();
  const { cursorVariant } = useCursorVariant();

  const [isRendered, setIsRendered] = useState(false);
  const toggle = () => {
    if (window.scrollY > 200) {
      setIsRendered(true);
    } else {
      setIsRendered(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggle);
    return () => {
      window.removeEventListener('scroll', toggle);
    };
  });


  return (
    <div>
      <div className="App">
      <div >
        <Topnavbar />
        <Home />
      </div>
      <About />
      <Skills />
      <Contact/>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isRendered ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className='back-to-top'
        title='Back to Top'
      ><Bottomnavbar /></motion.div>
      <motion.div className='cursor' initial={{ opacity: 1 }} variants={useVariantMousePositions} animate={cursorVariant} />
    </div>
    <Footer />
    </div>

  );
}

export default App;