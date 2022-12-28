import React from "react";
import "./presentation.css";

const Presentation = () => {
  return (
    <div className="primera-hoja-container">
      <div className="imput-container">
        <h2>HOLA UN GUSTO CONOCERTE CUAL ES TU NOMBRE??</h2>
        <input type="text" placeholder="Ingresa tu nombre" />
        <button>ENVIAR</button>
      </div>
    </div>
  );
};

export default Presentation;
