import React from "react";
import { FaHeadphones, FaLaptopCode, FaGuitar } from "react-icons/fa";
import { MdMovie } from "react-icons/md";

import "./styles/Hobbies.scss";

function Contacto(props) {
  return (
    <div className="hobbies_container">
      <h2>Pasatiempos</h2>
      <div className="hobbies">
        <div className="hobbie">
          <FaHeadphones className="hobbie_icon" />
          <p>Música</p>
        </div>
        <div className="hobbie">
          <FaLaptopCode className="hobbie_icon" />
          <p>Programar</p>
        </div>
        <div className="hobbie">
          <MdMovie className="hobbie_icon" />
          <p>Películas</p>
        </div>
        <div className="hobbie">
          <FaGuitar className="hobbie_icon" />
          <p>Guitarra</p>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
