import { useState } from "react";
import "./Styles.css";

const button = () => { 
  const [state, setState] = useState("green");
  return (
    <div style={{
      width: 300,
      height: 200,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      backgroundColor: state,
    }}>
        <a href="#" className="btn">Button</a>
        <button onClick={() => setState("red")} >Red</button>
        <button onClick={() => setState("green")} >Green</button>
    </div>
  )
}

export default button