import "./home.css";
import arrow from "../../assets/meesees.png";

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
          <button
            className="
          "
          >
            JUGUEMOS!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
