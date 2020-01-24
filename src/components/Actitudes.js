import React from "react";

import "./styles/Actitudes.scss";

function Actitudes(props) {
  return (
    <div className="actitudes_container">
      <h2>Actitudes</h2>
      <div className="actitudes">
        <ul>
          <li>Adaptabilidad</li>
          <li>Trabajo en equipo</li>
          <li>Liderazgo</li>
          <li>Empatía</li>
          <li>Lealtad</li>
          <li>Honestidad</li>
        </ul>
      </div>
    </div>
  );
}

export default Actitudes;
