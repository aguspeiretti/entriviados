import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home/Home";
import Params from "./pages/params/Params";
import Game from "./pages/game/Game";
import Presentation from "./pages/Presentation/Presentation";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tuNombre" element={<Presentation />} />
          <Route path="/Parametros" element={<Params />} />
          <Route path="/Game" element={<Game />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
