import { NavLink } from "react-router-dom";
import Dropdawm from "../../Components/dropDawn/Dropdawm";
import "./params.css";
import { useAuth0 } from "@auth0/auth0-react";
import avatar from "../../assets/avatarme.jpg";

const Params = () => {
  const { user, isAuthenticated } = useAuth0();

  const nombre = localStorage.getItem("nombre");

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
          {isAuthenticated ? (
            <h2>{`hola ${user.name}!!`}</h2>
          ) : (
            <h2>{nombre ? `hola ${nombre}!!` : `hola SIN NOMBRE :(`}</h2>
          )}
        </div>
        <div className="avatar-container">
          {isAuthenticated ? (
            <img src={user.picture} alt="" />
          ) : (
            <img src={avatar} alt="" />
          )}
        </div>
        <div className="categorias-container">
          <div className="dropdawn1">
            <Dropdawm titulo={"ELIGE UNA CATEGORIA"} categorias={categorias} />
          </div>
          {/* <div className="dropdawn2">
            <Dropdawm titulo={"ELIGE UNA DIFICULTAD"} categorias={niveles} />
          </div> */}
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
