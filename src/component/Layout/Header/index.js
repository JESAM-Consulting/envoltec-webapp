import React from "react";
import "./header.scss";
import Logo from "../../../assets/logo/logo.svg";
import { useHistory } from "react-router-dom";
export default function Header() {

  const navigate = useHistory()

  const handleOnClickAuthenticate = () => {
    if (window.location.pathname !== "/") {
      navigate.push("/");
    }
  };
  return (
    <div className="header-section">
      <div className="container">
        <div className="header-alignment">
          <div className="logo-alignment">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="header-details-alignment">
            <div className="header-nav-alignment">
              <ul>
                <li>Home-Office</li>
                <li>Standort unabhängig</li>
              </ul>
            </div>
            <a href="#contactForm" className="jetzt-details-alignment" onClick={handleOnClickAuthenticate} >
                <h6>Jetzt bewerben</h6>
                <p>in 30 Sek. ohne Lebenslauf</p>
            </a>
          </div>
        </div>

        <div className="heading-alignment">
          <h1>
            <span>Werde</span> <span>Energieberater</span> unabhängig werden,
            Stromkosten reduzieren und gemeinsam eine saubere Zukunft gestalten.
          </h1>
        </div>
      </div>
    </div>
  );
}
