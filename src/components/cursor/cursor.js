import React from "react";
import "../../style/cursor.css"
import {useVariantMousePosition,useCursorVariant} from "../../assert/hooks/variantMousePosition.js"

function Cursor(){

  const {textEnter, textLeave } = useCursorVariant();
  
    return (
      <div>
        <div >
          <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='title-cursor'>Hello World</h1>
        </div>
      </div>
      
    );
}

export default Cursor;