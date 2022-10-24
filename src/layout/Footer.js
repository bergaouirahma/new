import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/footer.css";
function Footer() {
  return (
    <div>
      <div className="footer" style={{ backgroundImage: "url(CONTACT.jpg)" }}>
        <div className="row">
          <div className="col-lg-3 col-12 logo-footer ">
            <div className="logo-footer2">
              <img
                src="logo.png"
                alt="logo"
                style={{ width: 200, height: 200 }}
              />
            </div>
          </div>
          <div className="col-lg-3 col-12 footer-section">
            <div style={{ border: "none" }}>
              <Link to="/">
                <p>Accueil</p>
              </Link>
              <Link to="/CfRénovation">
                <p>CF Rénovations</p>
              </Link>
              <Link to="/rénovation">
                <p>Nos Métiers</p>
              </Link>
              <Link to="/realisations">
                <p>Nos Réalisations</p>
              </Link>
              <Link to="/contact">
                <p>Contact</p>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-12 footer-section">
            <h4>Contact</h4>
            <div>
              <span>
                <i className="fas fa-home"></i>
                11 RUE LOUIS CHRISTIAENS 59800 LILLE appartement 203
              </span>
              <br />

              <span>
                <i className="fas fa-phone"></i>   &nbsp;  &nbsp; +334 06035 70754
                
              </span>
              <br />
              <span>
                <i className="fas fa-envelope"></i> &nbsp;  &nbsp; Cfrenovations@outlook.fr
              </span>
            </div>
          </div>
          <div className="col-lg-3 col-12 footer-social" style={{ padding: 0 }}>
            <h4>SUIVEZ NOUS</h4>
            <div style={{ paddingTop: 10 }}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="facebook.png"
                  alt="facebook"
                  width="40px"
                  height="40px"
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="instagram.png"
                  alt="instagram"
                  width="40px"
                  height="40px"
                />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="twitter.png"
                  alt="twitter"
                  width="40px"
                  height="40px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
