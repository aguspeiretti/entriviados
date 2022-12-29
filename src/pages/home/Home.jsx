import "./home.css";
import arrow from "../../assets/meesees.png";
import { NavLink } from "react-router-dom";
import Login from "../../components/login/Login";
import Logout from "../../components/logout/Logout";

const Home = () => {
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
          <NavLink to={"/TuNombre"}>
            <button className="juguemos">JUGUEMOS!</button>
          </NavLink>
          <Login />
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Home;
