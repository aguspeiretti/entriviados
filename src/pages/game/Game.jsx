import React, { useEffect, useState } from "react";
import "./game.css";
import preguntas from "../../preguntas.json";
import { NavLink } from "react-router-dom";

const Game = () => {
  const category = localStorage.getItem("ELIGE UNA CATEGORIA");
  const time = localStorage.getItem("ELIGE LOS SEGUNDOS");
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(time);
  let categoriaElegida = [];
  if (category === "Random") {
    categoriaElegida = preguntas;
  } else {
    categoriaElegida = preguntas.filter(
      (question) => question.categoria === category
    );
  }
  const respuestaCorrecta = categoriaElegida[preguntaActual].opciones.filter(
    (preg) => preg.correcta === true
  );

  const handleSubmit = (correcta, e) => {
    //añadir puntuacion
    correcta ? setPuntuacion(puntuacion + 1) : setPuntuacion(puntuacion);

    //estilo de pregunta
    e.target.classList.add(correcta ? "correct" : "incorrect");

    //cambiar a la siguiente pregunta

    setTimeout(() => {
      if (preguntaActual === categoriaElegida.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        e.target.classList.remove(correcta ? "correct" : "incorrect");
        setMostrarRespuesta(mostrarRespuesta);
      }
      setTiempoRestante(time);
    }, 1500);

    //mostrar correcta
    correcta ? setMostrarRespuesta(false) : setMostrarRespuesta(true);
  };

  // descontar tiempo y accion con relacion
  useEffect(() => {
    const interval = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) {
        if (preguntaActual === categoriaElegida.length - 1) {
          setIsFinished(true);
        } else {
          setPreguntaActual(preguntaActual + 1);
          setTiempoRestante(time);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [preguntaActual, tiempoRestante]);

  // si el juego termino

  if (isFinished)
    return (
      <div className="game-container">
        <div className="info-container resultado">
          obtuviste {puntuacion} de {categoriaElegida.length}
        </div>
        <NavLink to={"/"}>
          <button className="volver">VOLVER A JUGAR</button>
        </NavLink>
      </div>
    );

  return (
    <div className="game-container">
      <div className="info-container">
        <div>
          <div className="first-div">
            <div className="number-cuestion">
              <span className="number">
                pregunta {preguntaActual + 1} de {categoriaElegida.length}
              </span>
            </div>
            <div className="time">{tiempoRestante} seg</div>
          </div>
          <div className="question">
            {mostrarRespuesta
              ? `RESPUESTA : ${respuestaCorrecta[0].opciones}`
              : categoriaElegida[preguntaActual].pregunta}
          </div>
          <div className="answers">
            {categoriaElegida[preguntaActual].opciones.map((el) => (
              <button onClick={(e) => handleSubmit(el.correcta, e)}>
                {el.opciones}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
