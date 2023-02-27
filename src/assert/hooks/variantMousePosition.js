import useMousePosition from "./useMousePosition";
import { createContext, useContext, useState } from "react";

function useVariantMousePosition(){
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
          opacity: 1
        },
        pointer: {
          height: 5, // Change the height and width to adjust the size
          width: 5,
          x: mousePosition.x - 10, // Adjust the x and y values to center the cursor
          y: mousePosition.y - 10,
          backgroundColor: "white",
          mixBlendMode: "difference",
          opacity: 1
        }
      }
    
    return variants
}

const CursorVariantContext = createContext();

// Define a custom hook to access the global cursor variant state
const useCursorVariant = () => useContext(CursorVariantContext);

// Define a provider component that provides the global cursor variant state to the component tree
const CursorVariantProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const linkEnter = () => setCursorVariant("pointer");
  const linkLeave = () => setCursorVariant("default");

  // Define the global cursor variant state object and the functions to modify it
  const globalCursorVariantState = {
    cursorVariant,
    textEnter,
    textLeave,
    linkEnter,
    linkLeave,
  };

  // Provide the global cursor variant state to the component tree using the Provider component
  return (
    <CursorVariantContext.Provider value={globalCursorVariantState}>
      {children}
    </CursorVariantContext.Provider>
  );
};
export default CursorVariantProvider;
export {useVariantMousePosition, useCursorVariant}
