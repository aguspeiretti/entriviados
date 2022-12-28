import React, { useState } from "react";
import "./game.css";
import preguntas from "../../preguntas.json";
const Game = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState();
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  const handleSubmit = (correcta, e) => {
    //añadir puntuacion
    if (correcta) {
      setPuntuacion(puntuacion + 1);
      //estilo de pregunta
      e.target.classList.add(correcta ? "correct" : "incorrect");
      //cambiar a la siguiente pregunta
      setTimeout(() => {
        if (preguntaActual === preguntas.length - 1) {
          setIsFinished(true);
        } else {
          setPreguntaActual(preguntaActual + 1);
        }
      }, 1500);
    } else {
      setMostrarRespuesta(true);
      setTimeout(() => {
        if (preguntaActual === preguntas.length - 1) {
          setIsFinished(true);
        } else {
          setPreguntaActual(preguntaActual + 1);
        }
      }, 1500);
    }
  };
  return (
    <div className="game-container">
      <div className="info-container">
        {mostrarRespuesta ? (
          <div>la respuesta es:</div>
        ) : (
          <div>
            <div className="first-div">
              <div className="number-cuestion">
                <span className="number">
                  pregunta {preguntaActual + 1} de {preguntas.length}
                </span>
              </div>
              <div className="time">20seg</div>
            </div>
            <div className="question">{preguntas[preguntaActual].pregunta}</div>
            <div className="answers">
              {preguntas[preguntaActual].opciones.map((el) => (
                <button onClick={(e) => handleSubmit(el.correcta, e)}>
                  {el.opciones}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
