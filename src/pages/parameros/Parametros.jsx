import React, { useState } from "react";
import Dropdawm from "../../Components/Dropdawm";
import "./parametros.css";

const Parametros = () => {
  const categorias = [
    "Entretenimiento",
    "Arte",
    "ciencias",
    "Deportes",
    "Historia",
    "Random",
  ];
  const niveles = ["FACIL", "INTERMEDIO", "DIFICIL", "EXPERTO", "RANDOM"];

  const segundos = [30, 60, 90];

  return (
    <div className="parametros-container">
      <div className="contenedor-gral">
        <div className="saludo">
          <h2>HOLA AGUSTIN!!</h2>
        </div>
        <div className="avatar-container">
          <img src="" alt="" />
        </div>
        <div className="categorias-container">
          <div className="dropdawn1">
            <Dropdawm titulo={"ELIGE UNA CATEGORIA"} categorias={categorias} />
          </div>
          <div className="dropdawn2">
            <Dropdawm titulo={"ELIGE UNA DIFICULTAD"} categorias={niveles} />
          </div>
        </div>
        <div className="tiempo">
          <Dropdawm titulo={"ELIGE LOS SEGUNDOS"} categorias={segundos} />
        </div>
        <div className="empecemos-button">
          <button className="empesemos">EMPECEMOS!</button>
        </div>
      </div>
    </div>
  );
};

export default Parametros;
