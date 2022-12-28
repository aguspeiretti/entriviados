import React from "react";
import "./cuestionario.css";

const Cuestionario = () => {
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

export default Cuestionario;
