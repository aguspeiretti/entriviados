import React, { useState } from "react";
import "./dropdawn.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Dropdawm = ({ titulo, categorias }) => {
  const [dropdawn, setDropdawn] = useState(false);

  const abrircerrardropdawn = () => {
    setDropdawn(!dropdawn);
  };

  const elegido = (e) => {
    console.log(e.target.value);
    localStorage.setItem(`${e.target.value}`, e.target.value);
  };
  return (
    <div className="dropdawn">
      <Dropdown isOpen={dropdawn} toggle={abrircerrardropdawn} direction="up">
        <DropdownToggle caret> {titulo} </DropdownToggle>
        <DropdownMenu>
          {categorias?.map((el) => (
            <DropdownItem>
              "
              <button value={el} onClick={elegido} className="boton-dropdown">
                {el}
              </button>
              "
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Dropdawm;
