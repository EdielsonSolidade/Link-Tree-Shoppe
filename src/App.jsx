import "./App.css";
import minhaImagem from "./assets/Me.png";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="container-main">
        <div className="header-link-tree">
          <img src={minhaImagem} className="foto-perfil" alt="FotoAqui" />
          <h2 className="my-name">
            Edielson <br /> <span className="sobrenome">Solidade</span>
          </h2>
        </div>

        <div className="about-me">
          <p>Hi, Welcome. That's my links here</p>
        </div>

        <div className="all-links">
          <ul className="appendChild-links">
            <a href="https://www.instagram.com/its.edi_tor/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={40} color="#e400ff" opacity={0.7} />
              Instagram
            </a>
          </ul>
          <ul className="appendChild-links">
            <a href="https://www.linkedin.com/in/edielsonsolidade/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} color="#0023ff" />
              LinkedIN
            </a>
          </ul>

          <ul className="appendChild-links">
            <a href="https://github.com/EdielsonSolidade" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} color="#000000" />
              Github
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
