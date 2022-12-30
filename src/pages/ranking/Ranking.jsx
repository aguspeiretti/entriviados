import React from "react";
import "./ranking.css";
import foto1 from "../../assets/perfil.jpg";

const ranking = () => {
  const ranking = [
    { nombre: "Pablo", img: foto1, puntuacion: 12 },
    { nombre: "Melina", img: foto1, puntuacion: 15 },
    { nombre: "Ivan", img: foto1, puntuacion: 4 },
    { nombre: "Julieta", img: foto1, puntuacion: 16 },
    { nombre: "Romina", img: foto1, puntuacion: 3 },
    { nombre: "Joaquin", img: foto1, puntuacion: 19 },
    { nombre: "Santiago", img: foto1, puntuacion: 13 },
    { nombre: "Marina", img: foto1, puntuacion: 8 },
    { nombre: "Miguel", img: foto1, puntuacion: 2 },
    { nombre: "Juan", img: foto1, puntuacion: 7 },
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
              <div>
                <h3>{el.nombre}</h3>
              </div>
              <div>
                <img src={el.img} alt="" />
              </div>
              <div>
                <h3>{el.puntuacion}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ranking;
