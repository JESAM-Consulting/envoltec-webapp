import React from "react";
import "./header.scss";
import Logo from "../../../assets/logo/logo.svg";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const navigate = useHistory();

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
            {/* <div className="header-nav-alignment">
              <ul>
                <li>Home-Office</li>
                <li>Standort unabhängig</li>
              </ul>
            </div> */}
            <a
              href="#contactForm"
              className="jetzt-details-alignment"
              onClick={handleOnClickAuthenticate}>
              <h6>Jetzt bewerben</h6>
              <p>in 30 Sek. ohne Lebenslauf</p>
            </a>
          </div>
        </div>

        <div className="mobile-header-alignment">
          <div className="mobile-view-main-alignment">
            <div className="mobile-logo-alignment">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="mobile-header-details-alignment">
              <a
                href="#contactForm"
                className="jetzt-details-alignment"
                onClick={handleOnClickAuthenticate}>
                <h6>Jetzt bewerben</h6>
                <p>in 30 Sek. ohne Lebenslauf</p>
              </a>
            </div>
          </div>
          {/* <div className="mobile-header-option-alignment">
            <ul>
              <li>Home-Office</li>
              <li>Standort unabhängig</li>
            </ul>
          </div> */}
        </div>

        <div className="heading-alignment">
          <motion.h1
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,

              transition: {
                duration: 1,
                ease: "linear",
              },
            }}>
            <span>Werde</span> <span>Energieberater</span> unabhängig werden,
            Stromkosten reduzieren und gemeinsam eine saubere Zukunft gestalten.
          </motion.h1>
        </div>
      </div>
    </div>
  );
}
