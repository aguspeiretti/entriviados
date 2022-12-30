import React from "react";
import "./ranking.css";
import foto1 from "../../assets/h1.jpg";
import foto2 from "../../assets/h2.jpg";
import foto3 from "../../assets/h3.jpg";
import foto4 from "../../assets/h4.jpg";
import foto5 from "../../assets/h5.jpg";
import foto6 from "../../assets/m1.jpg";
import foto7 from "../../assets/m2.jpg";
import foto8 from "../../assets/m3.jpg";
import foto9 from "../../assets/m4.jpg";

import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const Ranking = () => {
  const { user } = useAuth0();
  const puntos = localStorage.getItem("puntos");

  const usuario = { nombre: user.name, img: user.picture, puntuacion: puntos };

  const ranking = [
    usuario,
    { nombre: "Melina", img: foto9, puntuacion: 15 },
    { nombre: "Ivan", img: foto1, puntuacion: 4 },
    { nombre: "Julieta", img: foto6, puntuacion: 16 },
    { nombre: "Romina", img: foto7, puntuacion: 3 },
    { nombre: "Joaquin", img: foto2, puntuacion: 19 },
    { nombre: "Santiago", img: foto3, puntuacion: 13 },
    { nombre: "Marina", img: foto8, puntuacion: 8 },
    { nombre: "Miguel", img: foto4, puntuacion: 2 },
    { nombre: "Juan", img: foto5, puntuacion: 7 },
  ];

  ranking.sort((a, b) => {
    if (a.puntuacion > b.puntuacion) {
      return -1;
    }
    if (a.puntuacion < b.puntuacion) {
      return 1;
    }
    return 0;
  });

  console.log(ranking);

  return (
    <div className="ranking-container">
      <div className="info-container resultadoa">
        <div className="conenedor-puestos">
          {ranking.map((el, index) => (
            <div className="jugador">
              <div>
                <span className="numero-ranking">{index + 1}</span>
              </div>
              <div className="campo-nombre">
                <h3>{el.nombre}</h3>
              </div>
              <div contenedor-foto-jugador>
                <img className="foto-jugador" src={el.img} alt="" />
              </div>
              <div>
                <h3>{el.puntuacion}</h3>
              </div>
            </div>
          ))}
        </div>
        <NavLink to={"/"}>
          <button className="volver">VOLVER A JUGAR</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Ranking;
