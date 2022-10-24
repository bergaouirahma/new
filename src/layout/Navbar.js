import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MDBCollapse } from "mdbreact";
import { MDBIcon } from "mdbreact";
import "../style/navbar.css";
function Navbar() {
  const location = useLocation();
  const [drop, setDrop] = useState({ valeur: 0 });
  const [size, setSize] = useState(false);
  const [clk, setClk] = useState(false);
  const [collapseID, setCollapseID] = useState("");
  const [colNum, setColNum] = useState(0);
  const [scrol, setScrol] = useState(false);
  const toggleCollapse = (collapse) => {
    setCollapseID(collapse !== collapseID ? collapse : "");
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 991) {
        setSize(true);
      } else {
        setSize(false);
      }
    });
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) setScrol(true);
      else setScrol(false);
    });
  });

  useEffect(() => {
    if (window.innerWidth <= 991) {
      setSize(true);
    }
    if (window.scrollY > 70) setScrol(true);
  }, []);

  function onClick() {
    clk && setClk(false);
  }

  return (
    <div>
      {size ? (
        <div className="navb-small">
          <div
            className="row"
            style={{
              height: !clk && 70,
              transition: "all 0.4s",
              margin: 0,
              width: "100%",
              boxShadow: "0px 1px 5px 0px rgba(254,187,91)",
            }}
          >
            <div
              className="col-6 pad"
              style={{
                height: 70,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Link to="/"></Link>
            </div>
            <div
              className="col-6 icon"
              style={{
                height: 70,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                fontSize: 25,
              }}
            >
              <MDBIcon
                icon={clk ? "times" : "align-justify"}
                className="white-text"
                onClick={() => setClk(!clk)}
              />
            </div>

            <div
              className="col-10 pad"
              style={{
                marginBottom: clk && 15,
                lineHeight: "23px",
                overflow: "hidden",
              }}
            >
              <ul
                className="ul_drop"
                style={{
                  listStyleType: "none",
                  padding: 0,
                  margin: 0,
                  fontWeight: 500,
                  height: !clk && 0,
                }}
              >
                <li>
                  <Link to="/">
                    {" "}
                    <span
                      style={{
                        color: location.pathname === "/" && "#0c0c0c",
                      }}
                      onClick={onClick}
                    >
                      Accueil
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/CfRénovation">
                    <span
                      style={{
                        color:
                          location.pathname === "/CfRénovation" && "#0c0c0c",
                      }}
                      onClick={onClick}
                    >
                      CF rénovations
                    </span>{" "}
                  </Link>
                </li>
                <li>
                  <span
                    onClick={() => {
                      toggleCollapse("basicCollapse");
                      setColNum(collapseID && colNum === 1 ? 0 : 1);
                    }}
                    style={{
                      color:
                        (location.pathname === "/rénovation" ||
                          location.pathname === "/peinture" ||
                          location.pathname === "/isolation " ||
                          location.pathname === "/maçonnerie") &&
                        "#0c0c0c",
                    }}
                  >
                    Nos Métiers
                  </span>
                  <MDBCollapse
                    id="basicCollapse"
                    isOpen={colNum === 1 && collapseID}
                  >
                    <ul
                      style={{
                        listStyleType: "none",
                        paddingLeft: 10,
                        margin: 0,
                      }}
                    >
                      <li>
                        <Link
                          to="/rénovation"
                          style={{
                            fontSize: 16,
                            color:
                              location.pathname === "/rénovation"
                                ? "#0c0c0c"
                                : "white",
                          }}
                          onClick={onClick}
                        >
                          Rénovation
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/peinture"
                          style={{
                            fontSize: 16,
                            color:
                              location.pathname === "/peinture"
                                ? "#0c0c0c"
                                : "white",
                          }}
                          onClick={onClick}
                        >
                          Peinture
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/isolation"
                          style={{
                            fontSize: 16,
                            color:
                              location.pathname === "/isolation"
                                ? "#0c0c0c"
                                : "white",
                          }}
                          onClick={onClick}
                        >
                          Isolation de L'extérieur
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/maçonnerie"
                          style={{
                            fontSize: 16,
                            color:
                              location.pathname === "/maçonnerie"
                                ? "#0c0c0c"
                                : "white",
                          }}
                          onClick={onClick}
                        >
                          Maçonnerie et gros œuvre
                        </Link>
                      </li>
                    </ul>
                  </MDBCollapse>
                </li>

                <li>
                  <Link to="/realisations">
                    <span
                      style={{
                        color:
                          location.pathname === "/realisations" && "#0c0c0c",
                      }}
                      onClick={onClick}
                    >
                      Nos Réalisations
                    </span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <span
                      style={{
                        color: location.pathname === "/contact" && "#0c0c0c",
                      }}
                      onClick={onClick}
                    >
                      Contact
                    </span>{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="navb"
          style={{
            padding: (scrol || location.pathname !== "/") && 0,
            background: (scrol || location.pathname !== "/") && "#febb5b",
          }}
        >
          <div>
            <div className="nav-logo">
              <Link to="/"></Link>
            </div>
            <div
              className="lists"
              style={{
                background:
                  (scrol || location.pathname !== "/") && "transparent",
              }}
            >
              <div className="drop">
                <Link
                  to="/"
                  style={{ color: location.pathname === "/" && "#0c0c0c" }}
                >
                  Accueil
                </Link>
              </div>
              <div className="drop">
                <Link
                  to="/CfRénovation"
                  style={{
                    color: location.pathname === "/CfRénovation" && "#0c0c0c",
                  }}
                >
                  CF rénovations
                </Link>
              </div>
              <div className="drop">
                <span
                  onMouseEnter={() => {
                    setDrop({ ...drop, valeur: 2 });
                  }}
                  onClick={() => {
                    setDrop({ ...drop, valeur: 2 });
                  }}
                  style={{
                    color:
                      (location.pathname === "/rénovation" ||
                        location.pathname === "/peinture" ||
                        location.pathname === "/isolation" ||
                        location.pathname === "/maçonnerie") &&
                      "#0c0c0c",
                  }}
                >
                  Nos Metiers
                  <MDBIcon icon="angle-down" />
                </span>
                <div
                  style={{
                    position: "absolute",
                    top: 35,
                    right: 0,
                    width: "max-content",
                    transition: "0.4s",
                    display: drop.valeur === 2 ? "block" : "none",
                  }}
                  onMouseLeave={() => {
                    setDrop({ ...drop, valeur: 0 });
                  }}
                >
                  <ul
                    style={{
                      listStyleType: "none",
                      padding: 0,
                      margin: 0,
                      height: drop.valeur !== 2 && 0,
                      transition: "height 0.6s linear",
                    }}
                  >
                    <li>
                      <Link
                        to="/rénovation"
                        style={{
                          fontSize: 16,
                          color:
                            location.pathname === "/rénovation" && "#0c0c0c",
                        }}
                      >
                        Rénovation
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/peinture"
                        style={{
                          fontSize: 16,
                          color: location.pathname === "/peinture" && "#0c0c0c",
                        }}
                      >
                        Peinture
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/isolation"
                        style={{
                          fontSize: 16,
                          color:
                            location.pathname === "/isolation" && "#0c0c0c",
                        }}
                      >
                        Isolation de L'extérieur
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/maçonnerie"
                        style={{
                          fontSize: 16,
                          color:
                            location.pathname === "/maçonnerie" && "#0c0c0c",
                        }}
                      >
                        Maçonnerie et gros œuvre
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="drop">
                <Link
                  to="/realisations"
                  style={{
                    color: location.pathname === "/realisations" && "#0c0c0c",
                  }}
                >
                  Nos Réalisations
                </Link>
              </div>
              <div className="drop">
                <Link
                  to="/contact"
                  style={{
                    color: location.pathname === "/contact" && "#0c0c0c",
                  }}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
