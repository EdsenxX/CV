import React, { Component } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import "./styles/Home.scss";
import "../animated.css";
import Profile from "../assets/images/profile.jpg";

import Hobbies from "../components/Hobbies";
import Estudios from "../components/Estudios";
import Cursos from "../components/Cursos";
import Actitudes from "../components/Actitudes";
import Experiencia from "../components/Experiencia";
import Conocimiento from "../components/Conocimiento";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home_container">
          <div className="Hero_container">
            <div className="Hero animated slideInDown">
              <div className="profile_img">
                <img src={Profile} alt="" />
              </div>
              <div className="description">
                <h1>Eduardo Serrano Jaime</h1>
                <p>Frontend</p>
              </div>
              <div className="social_networks_container">
                <ul className="social_networks">
                  <li>
                    <a
                      href="https://www.facebook.com/EduardoSerranoJaime"
                      target="blank"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/eduardo.serrano.j/"
                      target="blank"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/eduardo15484" target="blank">
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="content_container">
            <div className="content">
              <div className="content_whole about_me">
                <p>
                  Soy un amante de aprender nuevas tecnologías para el
                  desarrollo de software especialmente para el desarrollo de
                  aplicaciones webs
                </p>
                <p>
                  Soy estudiante de Ingeniería en Sistemas Computacionales en el
                  Instituto tecnológico de colima y desarrollador de
                  aplicaciones web en la Unidad Estatal de Protección Civil
                  Colima
                </p>
              </div>
              <Conocimiento />
              <Experiencia />
              <Estudios />
              <Cursos />
              <Hobbies />
              <Actitudes />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
