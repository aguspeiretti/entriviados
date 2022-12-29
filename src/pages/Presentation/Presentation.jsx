import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./presentation.css";

const Presentation = () => {
  const [texto, setTexto] = useState("");

  const handleInput = ({ target }) => {
    setTexto(target.value);
    console.log(texto);
  };

  return (
    <div className="primera-hoja-container">
      <div className="imput-container">
        <h2>HOLA UN GUSTO CONOCERTE CUAL ES TU NOMBRE??</h2>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={texto}
          onChange={handleInput}
        />
        <NavLink to={"/Parametros"} valor={texto}>
          {" "}
          <button>ENVIAR</button>{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default Presentation;
