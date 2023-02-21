import React, { useState } from "react";
import "./wertschätzungSection.scss";
import RightIcon from "../../../assets/icons/nav-right.svg";
import ClockIcon from "../../../assets/icons/lg-clock.svg";
import HomeIcon from "../../../assets/icons/lg-home.svg";
import LocationIcon from "../../../assets/icons/lg-location.svg";
import XmldIcon from "../../../assets/icons/xmld.svg";
import DinIcon from "../../../assets/icons/din.svg";
import InformationArrow from "../../../assets/icons/information-arrow.svg";
import { NavLink, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ApiPost } from "../../../helpers/API/ApiData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function WertschätzungSection() {
  const [teamData, setTeamData] = useState({});
  const [errors, setErrors] = useState({});
  const [checkTrems, setCheckTerms] = useState(false);
  const history = useHistory();
  let { id } = useParams();
  console.log(id, "useparams@@@");
  const onhandleChange = (e) => {
    // e.target.value.replace(/[^a-zA-Z]/g, "");
    const { name, value } = e.target;
    setTeamData({ ...teamData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  console.log("teamDatateamData",teamData);

  const formValidation = () => {
    let formvalied = true;
    let errors = {};
    if (!teamData?.salutation) {
      formvalied = false;
      errors["salutation"] = "*Bitte überprüfen Sie ihre Eingabe";
    }
    if (!teamData?.fullName?.trim()) {
      formvalied = false;
      errors["fullName"] = "*Bitte überprüfen Sie ihre Eingabe";
    }
    if (!teamData?.email) {
      formvalied = false;
      errors["email"] = "*Bitte überprüfen Sie ihre Eingabe";
    }
    if (!teamData?.phone) {
      formvalied = false;
      errors["phone"] = "*Bitte überprüfen Sie ihre Eingabe";
    }
    if (!teamData?.postalCode) {
      formvalied = false;
      errors["postalCode"] = "*Bitte überprüfen Sie ihre Eingabe";
    }
    if (checkTrems === false) {
      formvalied = false;
      errors["check"] = "*Bitte überprüfen Sie ihre Eingabe";
    }
    setErrors(errors);
    return formvalied;
  };

  const handleSubmitForm = async (e) => {
    if (formValidation()) {
      let data = {
        edit: id === "value1" ? true : false,
        money: id === "value2" ? true : false,
        telephone: id === "value3" ? true : false,
        like: id === "value4" ? true : false,
        calander: id === "value5" ? true : false,
        angry: id === "value6" ? true : false,
        salutation: teamData?.salutation,
        fullName: teamData?.fullName,
        email: teamData?.email,
        phone: teamData?.phone,
        postalCode: teamData?.postalCode,
      };
      ApiPost(`create-reason`, data)
        .then((res) => {
          toast.success(
            "Vielen Dank, Ihre Daten wurden erfolgreich eingereicht."
          );
          setTimeout(() => {
            history.push("/details-page");
          }, 1200);
        })
        .catch((err) => {
          toast.error("Etwas ist schief gelaufen. Bitte versuche es erneut");
        });
    }
  };
  const bindInput = (value) => {
    var regex = new RegExp("^[^0-9]*$");
    var key = String.fromCharCode(
      !value.charCode ? value.which : value.charCode
    );
    if (regex.test(key)) {
      value.preventDefault();
      return false;
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="wertschätzung-section-all-content-alignment" id="form">
        <div className="container">
          <div className="box">
            <div className="box-header-alignment">
              <div>
                <NavLink to="/">
                  <img src={RightIcon} alt="RightIcon" />
                </NavLink>
              </div>
              <div>
                <span>
                  Dein Weg zu mehr Wertschätzung und mehr Perspektive{" "}
                </span>
              </div>
            </div>

            <div className="grid" id="form">
              <div className="grid-items">
                <div className="all-input-style-box-design">
                  <div className="input select-width">
                    <label>Anrede</label>
                    <select
                      className={`form-control rounded-lg custom-style`}
                      onChange={(e) => {
                        onhandleChange(e);
                      }}
                      defaultValue={teamData?.salutation}
                      name="salutation"
                    >
                      <option selected disabled>Anrede</option>
                      <option value="mr">Herr</option>
                      <option value="mrs">Frau</option>
                    </select>
                    <span
                      style={{
                        color: "red",
                        top: "5px",
                        fontSize: "12px",
                      }}
                    >
                      {errors["salutation"]}
                    </span>
                  </div>
                  <div className="input">
                    <label>Vor- Nachname</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={teamData?.fullName}
                      onChange={(e) => {
                        onhandleChange(e);
                      }}
                    />
                    <span
                      style={{
                        color: "red",
                        top: "5px",
                        fontSize: "12px",
                      }}
                    >
                      {errors["fullName"]}
                    </span>
                  </div>
                  <div className="input">
                    <label>E-Mail</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={teamData?.email}
                      onChange={(e) => {
                        onhandleChange(e);
                      }}
                    />
                    <span
                      style={{
                        color: "red",
                        top: "5px",
                        fontSize: "12px",
                      }}
                    >
                      {errors["email"]}
                    </span>
                  </div>
                  <div className="input">
                    <label>Telefonnummer</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={teamData?.phone}
                      onChange={(e) => {
                        onhandleChange(e);
                      }}
                      onKeyPress={bindInput}
                    />
                    <span
                      style={{
                        color: "red",
                        top: "5px",
                        fontSize: "12px",
                      }}
                    >
                      {errors["phone"]}
                    </span>
                  </div>
                  <div className="input">
                    <label>Postleitzahl</label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      maxLength={5}
                      value={teamData?.postalCode}
                      onChange={(e) => {
                        onhandleChange(e);
                      }}
                      onKeyPress={bindInput}
                    />
                    <span
                      style={{
                        color: "red",
                        top: "5px",
                        fontSize: "12px",
                      }}
                    >
                      {errors["postalCode"]}
                    </span>
                  </div>
                  <div className="checkbox-all-content-alignment">
                    <div className="relativ-div">
                      <input
                        type="checkbox"
                        name="check"
                        id="id"
                        checked={checkTrems}
                        onChange={(e) => setCheckTerms(e.target.checked)}
                      />
                      <label htmlFor="id"></label>
                    </div>
                    <div className="relativ-div">
                      <span>
                        Ich habe die geltenden <a>Datenschutzhinweise</a> zur
                        Kenntnis genommen.
                      </span>
                    </div>
                  </div>
                  {checkTrems === false && (
                    <span style={{ color: "#d92c2c", fontSize: "12px" }}>
                      {errors?.check}
                    </span>
                  )}
                  <div className="button-design">
                    {/* <NavLink to="/details-page"> */}
                    <button onClick={(e) => handleSubmitForm(e)}>
                      Bewerbung absenden
                    </button>
                    {/* </NavLink> */}
                  </div>
                  <div className="mobile-view-information-set">
                    <p>WEITERE  INFORMATIONEN</p>
                    <div className="information-arrow-design">
                      <img src={InformationArrow} alt="InformationArrow"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-items">
                <div className="icon-text-alignment">
                  <div className="icon-text-grid">
                    <div className="icon-text-grid-items">
                      <img src={ClockIcon} alt="ClockIcon" />
                    </div>
                    <div className="icon-text-grid-items">
                      <p>Voll-/Teilzeit und selbständig</p>
                      <span>
                        flexible Arbeitszeiten keine Kernzeiten unbefristete
                        Einstellung nach Probezeit.
                      </span>
                    </div>
                  </div>
                  <div className="icon-text-grid">
                    <div className="icon-text-grid-items">
                      <img src={HomeIcon} alt="HomeIcon" />
                    </div>
                    <div className="icon-text-grid-items">
                      <p>Home-Office</p>
                      <span>
                        Das Durschnittseinkommen eines FE Finance Beraters
                        beträgt ca. 112.000€.
                      </span>
                    </div>
                  </div>
                  <div className="icon-text-grid">
                    <div className="icon-text-grid-items">
                      <img src={LocationIcon} alt="LocationIcon" />
                    </div>
                    <div className="icon-text-grid-items">
                      <p>Standort unabhängig</p>
                      <span>
                        über 30 Standorte in Deutschland moderne Offices
                      </span>
                    </div>
                  </div>
                </div>
                <div className="sec-grid">
                  <div className="sec-grid-items"></div>
                  <div className="sec-grid-items">
                    <div className="all-logo-alignment">
                      <div className="first-logo">
                        <span>verbraucherschutzkonform nach</span>
                        <img src={XmldIcon} alt="XmldIcon" />
                      </div>
                      <div className="sec-logo">
                        <span>Beratung nach DIN Norm 77230</span>
                        <img src={DinIcon} alt="DinIcon" />
                        <p>
                          in Zusammenarbeit mit Stiftung Warentest erarbeitet
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
