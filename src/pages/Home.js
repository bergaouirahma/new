import React from "react";
import "../style/home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <div>
        <div className="row ">
          <div className="col ">
            <img className="logo" src="logo.png"></img>
            <div className="titre-bloc1 ">
              <span className="span01 ">
                Entreprise
                <br />
                <br /> générale
                <br />
                <br /> de bâtiment
              </span>
            </div>

               {/* <p className="pg1 ">
               </p>
               <div className="button-plus "><Link to="/CfRénovation" className="button-plus-link " >En Savoir Plus</Link> 
               </div>*/}
          </div>

          <div className="col ">
            <div className="rectangle-2-copy "></div>
            <img className="rectangle-567" src="img1.jpg"></img>
          </div>
        </div>
        <div>
          <div>
            <div className="">
              <div className="row ">
                <div className="col">
                  <div className="Entreprise">CF rénovations</div>
                  {/*<div className="titre-boloc21 bloc-droit">
                   <span className="span01">Lorem Ipsum</span>
                  </div>
                  */}
                  <p className="pg1  ">
                    CF rénovations une Entreprise tous corps d’état située à
                    Lille  particulièrement spécialisée dans les travaux de
                    second œuvre. Nous accompagnons nos clients à la réalisation
                    de tous travaux de rénovation, construction ou
                    agrandissement.
                  </p>
                  <div className="button-plus ">
                    <Link to="/CfRénovation" className="button-plus-link ">
                      En Savoir Plus
                    </Link>
                  </div>
                </div>
                <div className="col ">
                  <div className="rectangle-2-copy0 "></div>
                  <img className="rectangle-56" src="IM2.jpg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="nos-mtiers">Réalisations</div>
          <br></br>
          <div className="row ">
            <div className="col-md-6 text-center d-flex flex-column">
              <div className="">
                <div className=" rectangle-yellow-left"></div>

                <div className="bloc-img-left">
                  <img className="block-left p-2" src="IMG5.jpg"></img>
                  <br></br>
                  <br></br>
                  <img className="block-left p-2 " src="IMG6.jpg"></img>
                </div>
                <div className="titre-bloc-left p-2 ">
                  <span className="ellipse-23">
                    <br></br>
                  </span>
                </div>
              </div>
            </div>

            <div className="col ">
              <div className="rectangle-2-copy44 "></div>
              <img className="rectangle-5-copy1" src="IMG4.jpg"></img>
              {/*<div className="button-plus "><Link to="/realisations" className="button-plus-link " >En Savoir Plus</Link> </div>
               */}
            </div>
          </div>
        </div>

        <div>
          <div className="nos-mtiers">Nos Métiers</div>
          <div className="">
            <div className="row ">
              <div className="col ">
                <div className="rectangle-2-copy-3 "></div>
                <img className="rectangle-5" src="img1.jpg"></img>
              </div>
              <div className="col">
                <div className="titre-bloc2 bloc-droit">
                  <span className="span0">
                    Spécialiste tous corps de métiers dans <br></br> le Bâtiment
                    à Lille
                  </span>
                </div>
                <p className="pg-nosMetier ">
                  Toutes nos réalisations sont encadrées par le chef de chantier
                  qui sera votre interlocuteur privilégié. Notre équipe est
                  composée de professionnels de la construction. Nos
                  collaborateurs qualifiés s'engagent à respecter les principes
                  de l'art et à prendre en compte les conseils fournis par nos
                  commerciaux qui établissent des devis en fonction de vos
                  préférences, envies et budgets.
                </p>
                <div className="button-plus ">
                  <Link to="/rénovation" className="button-plus-link ">
                    En Savoir Plus
                  </Link>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
