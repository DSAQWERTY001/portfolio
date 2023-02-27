import React from "react";
import useMousePosition from "./useMousePosition";
import { useState,useEffect } from "react";

export default function CursorMouseState(){
    const mousePosition = useMousePosition()

    const [cursorVariant, setCursorVariant] = useState("default");

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
        nav: {
            height: 10,
            width: 10,
            x: mousePosition.x,
            y: mousePosition.y,
            backgroundColor: "white",
            mixBlendMode: "difference"
        }
    }
    return cursorVariant
}