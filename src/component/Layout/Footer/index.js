import React from "react";
import "./footer.scss";
import FooterLogo from "../../../assets/logo/logo2.svg";
import RightArrow from "../../../assets/icons/rightarrowblack.svg";
export default function Footer() {
  return (
    <div>
      <div className="footer-section">
        <div className="container">
          <div className="footer-alignment">
            <div className="first-footer-part-alignment">
              <div className="logo-alignment">
                <img src={FooterLogo} alt="FooterLogo" />
              </div>
              <div className="footer-address-alignment ">
                <p>
                  Paul-Thiersch-Straße 11 <br /> 04435 Schkeuditz
                </p>
              </div>
            </div>
            <div className="footer-details-alignment">
              <div className="contact-alignment">
                <h6>
                  So erreichst du uns.
                  <p>
                    <a href="mailto:Janik.voss@envoltec.de">
                      Janik.voss@envoltec.de
                    </a>
                  </p>
                  <p>
                    <a href="tel:01734181750">01734181750</a>
                  </p>
                </h6>
              </div>

              <div className="copyRight-other-details-alignmet">
                <p>Bewirb dich bei uns! Werde ein Teil von ENVOLTEC</p>
                <div className="name-alignment">
                  <span>
                    <a href="#contactForm">Jetzt bewerben</a>
                  </span>
                  <img src={RightArrow} alt="RightArrow" />
                </div>
                <p>Copyright © 2022 ENVOLTEC. Alle Rechte vorbehalten.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
