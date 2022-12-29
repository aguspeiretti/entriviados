import React, { useEffect, useState } from "react";
import "./game.css";
import preguntas from "../../preguntas.json";
import { NavLink } from "react-router-dom";
const Game = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(5);
  const respuestaCorrecta = preguntas[preguntaActual].opciones.filter(
    (preg) => preg.correcta === true
  );

  const handleSubmit = (correcta, e) => {
    //añadir puntuacion
    correcta ? setPuntuacion(puntuacion + 1) : setPuntuacion(puntuacion);

    //estilo de pregunta
    e.target.classList.add(correcta ? "correct" : "incorrect");

    //cambiar a la siguiente pregunta

    setTimeout(() => {
      if (preguntaActual === preguntas.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        e.target.classList.remove(correcta ? "correct" : "incorrect");
        setMostrarRespuesta(mostrarRespuesta);
      }
      setTiempoRestante(5);
    }, 1500);

    //mostrar correcta
    correcta ? setMostrarRespuesta(false) : setMostrarRespuesta(true);
  };

  // descontar tiempo y accion con relacion
  useEffect(() => {
    const interval = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) {
        if (preguntaActual === preguntas.length - 1) {
          setIsFinished(true);
        } else {
          setPreguntaActual(preguntaActual + 1);
          setTiempoRestante(5);
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
          obtuviste {puntuacion} de {preguntas.length}
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
                pregunta {preguntaActual + 1} de {preguntas.length}
              </span>
            </div>
            <div className="time">{tiempoRestante} seg</div>
          </div>
          <div className="question">
            {mostrarRespuesta
              ? `RESPUESTA : ${respuestaCorrecta[0].opciones}`
              : preguntas[preguntaActual].pregunta}
          </div>
          <div className="answers">
            {preguntas[preguntaActual].opciones.map((el) => (
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
