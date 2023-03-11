import React from "react";
import "./home-style.css"
import { useCursorVariant } from "../../assert/hooks/variantMousePosition.js"

function Cursor() {

  const { textEnter, textLeave } = useCursorVariant();

  return (
    <section id="home">
      <div >
        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='title-home'>Hello World</h1>
      </div>
    </section>

  );
}

export default Cursor;