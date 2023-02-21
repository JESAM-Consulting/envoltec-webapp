import React from "react";
import "./Home.scss";
import DownArrowIcon from "../../assets/icons/down-arrow-red.svg";
import RightArrowIcon from "../../assets/icons/rightArrow.svg";
import EnvoltecImg from "../../assets/images/envoltec-img.png";
import PersonImg from "../../assets/images/person-img.png";
import BroschureImg from "../../assets/images/Broschure.png";
import WhiteRightArrowIcon from "../../assets/icons/right-white.svg";
import { useHistory , useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleOnClickAuthenticate = () => {
    if (window.location.pathname !== "/") {
      navigate.push("/");
    }
  };
  return (
    <div>
      <div className="envoltec-section">
        <div className="container">
          <div className="envoltec-alignment">
            <h2>
              Deine Karriere bei Envoltec
              <p>Deine Aufgaben in einem kurzen Video</p>
            </h2>

            <div className="bottom-arrow-alignment">
              <img src={DownArrowIcon} alt="DownArrowIcon" />
            </div>

            <div className="envoltecMain-img-alignment">
              <img src={EnvoltecImg} alt="EnvoltecImg" />
            </div>
            <div className="envoltecMain-child-details-alignment">
              <div className="envoltecMain-button-alignment">
                <a href="#contactForm" onClick={handleOnClickAuthenticate}>
                  <button>Jetzt bewerben</button>
                </a>
                <button>mehr zu Envoltec</button>
              </div>

              <div className="envoltecMain-otion-details-alignment">
                <div className="envoltecMain-gridItem-alignment">
                  <div className="option-name-alignment">
                    <div>
                      <img src={RightArrowIcon} alt="RightArrowIcon" />
                    </div>
                    <div className="option-heading-name">
                      <h4>Voll-/Teilzeit und selbständig</h4>
                    </div>
                  </div>
                  <div className="option-details-alignment">
                    <p>
                      flexible Arbeitszeiten unbefristete Einstellung nach
                      Probezeit
                    </p>
                  </div>
                </div>
                <div className="envoltecMain-gridItem-alignment">
                  <div className="option-name-alignment">
                    <div>
                      <img src={RightArrowIcon} alt="RightArrowIcon" />
                    </div>
                    <div className="option-heading-name">
                      <h4>Home-Office</h4>
                    </div>
                  </div>
                  <div className="option-details-alignment">
                    <p>Flexible Arbeitsorteund mobiles Arbeiten</p>
                  </div>
                </div>
                <div className="envoltecMain-gridItem-alignment">
                  <div className="option-name-alignment">
                    <div>
                      <img src={RightArrowIcon} alt="RightArrowIcon" />
                    </div>
                    <div className="option-heading-name">
                      <h4>Standort unabhängig</h4>
                    </div>
                  </div>
                  <div className="option-details-alignment">
                    <p>über 25 Standorte in Deutschland moderne Offices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="envoltecMain-person-details-alignment">
          <div className="container">
            <div className="envoltecMain-grid-alignment">
              <div className="envoltecMain-gridItem-alignment">
                <div className="person-img-alignment">
                  <img src={PersonImg} alt="PersonImg" />
                </div>
              </div>
              <div className="envoltecMain-gridItem-alignment">
                <div className="envoltecMain-person-all-details-alignment">
                  <h4>Wir sind die Envoltec GmbH</h4>
                  <div className="envoltecMain-person-child-details-alignment">
                    <p>
                      Mit einer Photovoltaik Anlage von Envoltec werden deine
                      Kunden unabhängig von steigenden Energiekosten. Jede neue
                      Anlage die wir erbauen ist ein Schritt in die Zukunft.
                    </p>
                    <p>
                      Wir sind der Ansprechpartner für den Traum einer eigenen
                      Photovoltaik-Anlage, egal in welcher Form, dem Budget und
                      der Größe.Aufgrund starker Partner kannst du alle Kunden
                      mit dem passenden Produkt beraten.
                    </p>
                  </div>
                  <div className="envoltec-button-alignment">
                    <button>Mehr zu FE Finance erfahren</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bearatungsportfolio-section">
          <div className="container">
            <div className="bearatungsportfolio-grid-alignment">
              <div className="bearatungsportfolio-gridItem-alignment">
                <div className="bearatungsportfolio-heading-alignment">
                  <h5>Dein Bearatungsportfolio mit </h5>
                  <p>Envoltec!</p>
                </div>

                <div className="bearatungsportfolio-steps-alignment">
                  <div className="bearatungsportfolio-steps-details-alignment">
                    <h6>01</h6>

                    <div className="steps-child-details">
                      <span>Photovoltaik</span>
                      <p>
                        Photovoltaik ist die sauberste und umweltfreundlichste
                        Art der Stromproduktion.
                      </p>
                    </div>
                  </div>
                  <div className="bearatungsportfolio-steps-details-alignment">
                    <h6>02</h6>

                    <div className="steps-child-details">
                      <span>Stromspeicher</span>
                      <p>
                        Ein Stromspeicher speichert den überschüssigen Strom
                        Ihrer Photovoltaik-Anlage zur späteren Nutzung - zum
                        Beispiel abends oder nachts. Dadurch erhöht sich der
                        Eigenverbrauchsanteil auf bis zu 70%.
                      </p>
                    </div>
                  </div>
                  <div className="bearatungsportfolio-steps-details-alignment">
                    <h6>03</h6>

                    <div className="steps-child-details">
                      <span>Stromcloud</span>
                      <p>
                        Im Sommer erzeugt Ihre Photovoltaik-Anlage mehr Strom
                        als im Winter. Der Überschüss fließt in Ihren
                        Energiespeicher. Ist dieser voll, leitet das
                        Speichersystem Ihren Strom in das virtuelle Cloudkonto
                        und wird bei Bedarf automatisch abgerufen.
                      </p>
                    </div>
                  </div>
                  <div className="bearatungsportfolio-steps-details-alignment">
                    <h6>04</h6>

                    <div className="steps-child-details">
                      <span>E-Mobilität</span>
                      <p>
                        In Verbindung mit Ihrer Photovoltaik-Anlage können Sie
                        Ihre elektrisch angetriebenen Fahrzeuge mit Ihrem
                        eigenen Strom zuhause beladen und somit deutlich
                        Spritkosten einsparen.
                      </p>
                    </div>
                  </div>
                  <div className="bearatungsportfolio-steps-details-alignment">
                    <h6>05</h6>

                    <div className="steps-child-details">
                      <span>Wärme mit Photovoltaik</span>
                      <p>
                        Ihre Photovoltaik-Anlage in Verbindung mit Wärme bringt
                        erhebliche Senkung Ihrer Heizkosten. Sowohl durch die
                        Kombination mit einer Wärmepumpe sowie eine
                        Unterstützung in der Warmwasser-Aufbereitung.
                      </p>
                    </div>
                  </div>

                  <div className="bearatungsportfolio-steps-details-alignment">
                    <div className="mobile-view-person-img-alignment">
                      <img src={PersonImg} alt="PersonImg" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bearatungsportfolio-gridItem-alignment">
                <div className="bearatungsportfolio-side-details-alignment">
                  <div className="bearatungsportfolio-side-img-alignment">
                    <img src={BroschureImg} alt="BroschureImg" />
                  </div>
                  <div className="bearatungsportfolio-banner-details-alignment">
                    <h5>Wer wir sind?</h5>
                    <p>Envoltec</p>

                    <div className="other-details-alignment">
                      <p>
                        Das Konzept von Envoltec lautet: „Erneuerbare Energie
                        für Jedermann!"
                      </p>
                      <p>
                        Unseren Kunden soll der Einstieg in die unabhängige
                        Stromversorgung so einfach wie möglich gestaltet werden.
                        Aus diesem Grund führen wir Sie bei allen Schritten
                        strukturiert, transparent und zuverlässig durch den
                        Prozessablauf.
                      </p>
                      <p>
                        Von der Erstberatung, der Installation Ihrer Anlage bis
                        hin zur Anlagenpflege und Wartung sowie weiteren
                        Serviceleistungen ,haben Sie immer einen Ansprechpartner
                        bei uns!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="liste-banner-section">
          <div className="liste-banner-details-alignemnt">
            <h6>Die Liste unserer Leistungen endet hier nicht.</h6>
            <a>
              Mehr erfahren
              <div>
                <img src={WhiteRightArrowIcon} alt="WhiteRightArrowIcon" />
              </div>
            </a>
          </div>
        </div>

        <div className="solar-details-section">
          <div className="solar-details-alignment">
            <h5>Was macht uns besonders?</h5>
            <p>
              Unseren Kunden soll der Einstieg in eineunabhängige
              Stromversorgung so einfachwie möglich gestaltet werden.
            </p>
            <div className="solar-button-alignment">
              <button>Jetzt bewerben</button>
            </div>
          </div>
        </div>
        <div className="mobile-solar-view">
          <div className="mobile-solar-details-section "></div>
          <div className="solar-details-alignment">
            <h5>Was macht uns besonders?</h5>
            <p>
              Unseren Kunden soll der Einstieg in eineunabhängige
              Stromversorgung so einfachwie möglich gestaltet werden.
            </p>
            <div className="solar-button-alignment">
              <button>Jetzt bewerben</button>
            </div>
          </div>
        </div>

        <div className="jetzt-bewerben-section" id="contactForm">
          <div className="container">
            <div className="jetzt-bewerben-heading">
              <h6>Jetzt bewerben</h6>
            </div>
            <div className="contact-bg"></div>
            <div className="contact-form-alignment">
              <div className="contact-form-heading-alignment">
                <h5>Deine Kontaktdaten</h5>
                <p>Wir melden uns binnen 24h bei dir.</p>
              </div>

              <div className="contact-form-details-alignment">
                <div className="two-grid-alignment">
                  <div className="contact-gridItem-alignment">
                    <input type="text" placeholder="Vor-Nachname" />
                  </div>
                  <div className="contact-gridItem-alignment">
                    <input type="text" placeholder="Postleitzahl" />
                  </div>
                  <div className="contact-gridItem-alignment">
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="contact-gridItem-alignment">
                    <input type="text" placeholder="Telefon" />
                  </div>
                </div>
                <div className="contact-gridItem-alignment one-grid-alignment">
                  <input
                    type="text"
                    placeholder="Hast du bereits Vertriebserfahrung?"
                  />
                </div>
                <div className="contact-gridItem-alignment one-grid-alignment">
                  <input
                    type="text"
                    placeholder="Wie viele Jahre arbeitest du im Vertrieb?"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}