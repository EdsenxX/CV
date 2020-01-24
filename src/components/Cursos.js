import React from "react";
import { FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

import "./styles/Cursos.scss";

function Cursos(props) {
  return (
    <div className="cursos_container">
      <h2>Cursos</h2>
      <div className="cursos">
        <div className="curso">
          <FaPython className="curso_icon" />
          <p>Python</p>
        </div>
        <div className="curso">
          <FaReact className="curso_icon" />
          <p>React.js</p>
        </div>
        <div className="curso">
          <FaReact className="curso_icon" />
          <p>React Native</p>
        </div>
        <div className="curso">
          <IoLogoJavascript className="curso_icon" />
          <p>JavaScript</p>
        </div>
      </div>
      <a href="https://platzi.com/@Edsen/" target="blank" className="button">
        Ver perfil de platzi
      </a>
    </div>
  );
}

export default Cursos;
