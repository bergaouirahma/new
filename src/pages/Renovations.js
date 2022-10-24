import React from "react";
import "../style/renovation.css";
function Renovation() {
  return (
    <div className="renov">
      <div>
        <img src="IMG4.jpg" alt="CF rénovations" />
      </div>
      <div>
        <h2>Rénovation</h2>
        <p>
          <b>CF rénovations
          , un spécialiste à vos côtés !
          </b>
          <br />
          Vous souhaitez <b>rénover l’intérieur ou l’extérieur</b> de votre nouvelle maison que vous venez de l’acquérir ? Ou vous changer la décoration de votre maison actuelle ?
          <br/>
          Notre conducteur de travaux évalue avec vous les interventions nécessaires pour réaliser vos projets et met à votre disposition l’ensemble des corps de métiers dans le respect des normes actuelles.
          <br/>
          Choix des matériaux, délais de réalisation, coûts, tous ces éléments seront évalués et validés avec vous.
          <br/>
          Nos garanties :           <span>
            • Prestations soignées
            <br />
            • Études approfondies des projets
            <br />
            • Travaux de qualité.
            <br />
          </span>
        </p>
      </div>
    </div>
  );
}

export default Renovation;
