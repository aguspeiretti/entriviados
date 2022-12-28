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
  console.log(categorias);
  const [dropdawn, setDropdawn] = useState(false);

  const abrircerrardropdawn = () => {
    setDropdawn(!dropdawn);
  };
  return (
    <div className="dropdawn">
      <Dropdown isOpen={dropdawn} toggle={abrircerrardropdawn} direction="up">
        <DropdownToggle caret> {titulo} </DropdownToggle>
        <DropdownMenu>
          {categorias?.map((el) => (
            <DropdownItem>"{el}"</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Dropdawm;
