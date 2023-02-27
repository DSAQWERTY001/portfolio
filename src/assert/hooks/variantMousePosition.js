import useMousePosition from "./useMousePosition";
import { useState } from "react";
function useVariantMousePosition(){
    const mousePosition = useMousePosition()

    const variants = {
        default: {
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        },
        text: {
          height: 150,
          width: 150,
          x: mousePosition.x - 75,
          y: mousePosition.y - 75,
          backgroundColor: "white",
          mixBlendMode: "difference"
        },
        link: {
          height: 10,
          width: 10,
          x: mousePosition.x,
          y: mousePosition.y,
          backgroundColor: "white",
          mixBlendMode: "difference"
        }
      }
    
    return variants
}
function CursorVariant(){
    const [cursorVariant, setCursorVariant] = useState("default")
    const textEnter = () => setCursorVariant("text")
    const textLeave = () => setCursorVariant("default")
    const link = () => setCursorVariant("link")
    return { cursorVariant, textEnter, textLeave ,link}
}
export {useVariantMousePosition,CursorVariant}