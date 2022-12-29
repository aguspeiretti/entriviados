import React from "react";
import { NavLink } from "react-router-dom";
import "./presentation.css";

const Presentation = () => {
  return (
    <div className="primera-hoja-container">
      <div className="imput-container">
        <h2>HOLA UN GUSTO CONOCERTE CUAL ES TU NOMBRE??</h2>
        <input type="text" placeholder="Ingresa tu nombre" />
        <NavLink to={"/Parametros"}>
          {" "}
          <button>ENVIAR</button>{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default Presentation;
