import React from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./styles/Footer.scss";

function Footer(props) {
  return (
    <div className="footer">
      <div className="contacto_container">
        <h3>Contacto</h3>
        <div className="contacto">
          <div className="contacto_item">
            <FaMapMarkerAlt className="contacto_icon" />
            <p>Colima, Col</p>
          </div>
          <div className="contacto_item">
            <FaPhone className="contacto_icon" />
            <p>312 169 8253</p>
          </div>
          <div className="contacto_item">
            <MdEmail className="contacto_icon" />
            <p>edsenxx@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="second_level">
        <p>Eduardo Serrano Jaime</p>
      </div>
    </div>
  );
}

export default Footer;
