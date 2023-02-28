import React from "react";
import "./style/App.css"
import "./style/cursor.css"
import "./components/navbar/top-nav.css"
import { motion } from 'framer-motion';
import Cursor from "./components/cursor/cursor";
import {useVariantMousePosition,useCursorVariant} from "./assert/hooks/variantMousePosition"
import Topnavbar from "./components/navbar/top-navbar";

function App() {
  const useVariantMousePositions = useVariantMousePosition();
  const { cursorVariant} = useCursorVariant();
  console.log(cursorVariant)
  return (
    <div className="App">
      
        <div className="top-nav">
            <Topnavbar/>
        </div>
      <Cursor/>
      <motion.div className='cursor' initial={{ opacity: 1 }} variants={useVariantMousePositions} animate={cursorVariant}/>
    </div>
  );
}

export default App;