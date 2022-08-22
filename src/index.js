import React from "react";
import ReactDOM from "react-dom";
import Shape from "./Shape"
import App from "./App";
import Waveform from "./Waveform";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Shape />
    <Waveform />
  </React.StrictMode>,
  rootElement
);
 
