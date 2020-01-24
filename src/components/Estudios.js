import React from "react";
import { MdSchool } from "react-icons/md";

import "./styles/Estudios.scss";

function Estudios(props) {
  return (
    <div className="estudios_container">
      <h2>Estudios</h2>
      <div className="estudios">
        <div className="estudio_item">
          <div className="icono">
            <MdSchool />
          </div>
          <div className="info">
            <p className="titulo">Ingeniero en Sistemas Computaciones</p>
            <p className="escuela">Instituto tecnologico de colima</p>
            <p className="nivel">Universidad</p>
            <p className="ano">2018-Actualmente</p>
          </div>
        </div>
        <div className="estudio_item">
          <div className="icono">
            <MdSchool />
          </div>
          <div className="info">
            <p className="titulo">Tecnico Programador</p>
            <p className="escuela">CBTis 19</p>
            <p className="nivel">Bachillerato</p>
            <p className="ano">2015-2018</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Estudios;
