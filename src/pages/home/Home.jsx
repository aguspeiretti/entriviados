import "./home.css";
import arrow from "../../assets/meesees.png";
import { NavLink } from "react-router-dom";
import Login from "../../Components/login/Login";
import Logout from "../../Components/logout/Logout";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="home-container">
      <div className="arrow-container">
        <div className="colores"></div>
        <img className="arrow" src={arrow} alt="" />
        <div className="texto-container">
          <h1 className="titulo">ENTRIVIADOS</h1>
          <h4>
            Bienvenidos a Entriviados, aprede y divertite, decidi tu campo y
            dificultad y testea tu cerebro buena suerte.
          </h4>
          <h4 className="registrate">
            Registrate con tu usuario y entra en el ranking o haz una jugada
            anonima.
          </h4>

          <div className="btn-login">
            {" "}
            {isAuthenticated ? (
              <>
                <Logout /> <span>LOGEADO!</span>
              </>
            ) : (
              <>
                <Login />
              </>
            )}
          </div>

          <NavLink to={isAuthenticated ? "/Parametros" : "/TuNombre"}>
            <button className="juguemos">JUGUEMOS!</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
