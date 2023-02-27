import React from "react";
import "./style/App.css"
import Cursor from "./components/cursor/cursor";
import useMousePosition from "./assert/hooks/useMousePosition";
import Footer from "./components/footer/footer";
import { useState } from "react";

function App() {

  const mousePosition = useMousePosition()
  
    
  
  return (
    
    <div>
      <div>TEST</div>
      <Cursor/>
      <Footer/>
    </div>
  );
}

export default App;