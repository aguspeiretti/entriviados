import { NavLink } from "react-router-dom";
import Dropdawm from "../../Components/dropDawn/Dropdawm";
import "./params.css";

const Params = ({ valor }) => {
  console.log(valor);
  const categorias = [
    "Entretenimiento",
    "Arte",
    "ciencias",
    "Deportes",
    "Historia",
    "Random",
  ];
  const niveles = ["FACIL", "INTERMEDIO", "DIFICIL", "EXPERTO", "RANDOM"];

  const segundos = [10, 20, 30];

  return (
    <div className="parametros-container">
      <div className="contenedor-gral">
        <div className="saludo">
          <h2>{valor}</h2>
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
          <NavLink to={"/Game"}>
            <button className="empesemos">EMPECEMOS!</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Params;
