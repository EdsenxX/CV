import React from "react";

import "./styles/Experiencia.scss";
import UEPC from "../assets/images/UEPC.png";

function Experiencia(props) {
  return (
    <div className="experiencia_container">
      <h2>Experiencia</h2>
      <div className="experiencia">
        <div className="empresa">
          <div className="logo">
            <img src={UEPC} alt="" />
          </div>
          <div className="info">
            <p className="nombre_empresa">
              Unidad Estatal de Protección Civil Colima
            </p>
            <p className="puesto">Programador Web</p>
            <p className="ano">17/09/2019-Actualidad</p>
            <p className="description">
              Implementación de un sistema de inventario desarrollado para la
              web y preparado para el desarrollo de un aplicación móvil
            </p>
          </div>
        </div>
        <div className="empresa">
          <div className="logo">
            <img src={UEPC} alt="" />
          </div>
          <div className="info">
            <p className="nombre_empresa">
              Unidad Estatal de Protección Civil Colima
            </p>
            <p className="puesto">Prácticas Profesionales</p>
            <p className="ano">11/03/2018-11/06/2018</p>
            <p className="description">
              Mejora de aplicaciones web ya existentes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiencia;
