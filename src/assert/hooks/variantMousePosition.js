import useMousePosition from "./useMousePosition";
import { createContext, useContext, useState } from "react";

function useVariantMousePosition() {
  const mousePosition = useMousePosition()

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 1
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    pointer: {
      height: 10,
      width: 10,
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    footerlink: {
      height: 10,
      width: 10,
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    footertitle: {
      height: 75,
      width: 75,
      x: mousePosition.x - 20,
      y: mousePosition.y - 30,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    bottombar:{
      height: 10,
      width: 10,
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      backgroundColor: "black",
    },
    changecolor:{
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "white",
      mixBlendMode: "difference",
    }
  }

  return variants
}

const CursorVariantContext = createContext();

const useCursorVariant = () => useContext(CursorVariantContext);

const CursorVariantProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const linkEnter = () => setCursorVariant("pointer");
  const linkLeave = () => setCursorVariant("default");
  const footerlink = () => setCursorVariant("footerlink");
  const footertitle = () => setCursorVariant("footertitle")
  const bottombar = () => setCursorVariant("bottombar")
  const changecolor = () => setCursorVariant("changecolor")

  const globalCursorVariantState = {
    cursorVariant,
    textEnter,
    textLeave,
    linkEnter,
    linkLeave,
    footerlink,
    footertitle,
    bottombar,
    changecolor,
  };

  return (
    <CursorVariantContext.Provider value={globalCursorVariantState}>
      {children}
    </CursorVariantContext.Provider>
  );
};
export default CursorVariantProvider;
export { useVariantMousePosition, useCursorVariant }
