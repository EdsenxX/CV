import React from "react";
import {
  FaPython,
  FaReact,
  FaMobile,
  FaGit,
  FaGithub,
  FaSass,
  FaJava
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiMysql } from "react-icons/di";

import "./styles/Conocimiento.scss";

function Conocimiento(props) {
  return (
    <div className="conocimiento">
      <h2>Conocimiento</h2>
      <div className="lenguajes">
        <div className="lenguaje">
          <IoLogoJavascript className="lenguaje-icono" />
          <p>JavaScipts</p>
        </div>
        <div className="lenguaje">
          <FaPython className="lenguaje-icono" />
          <p>Python</p>
        </div>
        <div className="lenguaje">
          <DiMysql className="lenguaje-icono" />
          <p>Mysql</p>
        </div>
        <div className="lenguaje">
          <FaGit className="lenguaje-icono" />
          <p>Git</p>
        </div>
        <div className="lenguaje">
          <FaJava className="lenguaje-icono" />
          <p>Java</p>
        </div>
      </div>
      <div className="tecnologias">
        <div className="tecnologia">
          <FaReact className="tecnologia-icono" />
          <p>Ract js</p>
        </div>
        <div className="tecnologia">
          <FaMobile className="tecnologia-icono" />
          <p>Ract Native js</p>
        </div>
        <div className="tecnologia">
          <FaPython className="tecnologia-icono" />
          <p>Flask</p>
        </div>
        <div className="tecnologia">
          <FaGithub className="tecnologia-icono" />
          <p>GitHub</p>
        </div>
        <div className="tecnologia">
          <FaSass className="tecnologia-icono" />
          <p>Sass</p>
        </div>
      </div>
    </div>
  );
}

export default Conocimiento;
