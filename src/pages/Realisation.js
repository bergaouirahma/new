import React, { useEffect } from "react";
import "../style/realisation.css";
function Realisation() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let reveal = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveal.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveal[i].getBoundingClientRect().top;
        let revealPoint = 150;
        if (revealTop < windowHeight - revealPoint)
          reveal[i].classList.add("active");
      }
    });
  });
  return (
    <div>
      <div className="reali">
        <h3> Nos Réalisations</h3>
        <p>
          Nous intervenons dans tous les métiers du bâtiment. Que ce soit pour
          des travaux difficiles à atteindre, des travaux de structure ou de
          rénovation, notre équipe est prête à intervenir dans les plus brefs
          délais. Le tout avec un suivi de qualité des chantiers. De plus, nous
          entreprenons des travaux d'économie d'énergie.
        </p>
      </div>
      <div className="examp">
        <h3>RÉNOVATION COMPLÈTE DE SALLE DE BAINS</h3>
        <div>
          <div>
            <img src="img1.jpg" alt="avant" />
            <span>AVANT</span>
          </div>
          <div>
            <img src="img1.jpg" alt="aprés" />
            <span>après</span>
          </div>
        </div>
      </div>
      <div className="examp reveal">
        <h3>RÉNOVATION PARQUET</h3>
        <div>
          <div>
            <img src="img1.jpg" alt="avant" />
            <span>AVANT</span>
          </div>
          <div>
            <img src="img1.jpg" alt="aprés" />
            <span>Après</span>
          </div>
        </div>
      </div>
      <div className="examp reveal">
        <h3>Rénovation d’escaliers</h3>
        <div>
          <div>
            <img src="img1.jpg" alt="avant" />
            <span>AVANT</span>
          </div>
          <div>
            <img src="img1.jpg" alt="aprés" />
            <span>après</span>
          </div>
        </div>
      </div>
      <div className="examp reveal">
        <h3>RÉALISATION DE CHAMBRE</h3>
        <div>
          <div>
            <img src="img1.jpg" alt="avant" />
            <span>AVANT</span>
          </div>
          <div>
            <img src="img1.jpg" alt="aprés" />
            <span>après</span>
          </div>
        </div>
      </div>
      <div className="examp reveal">
        <h3>étanchéité d'un toit-terrasse</h3>
        <div>
          <div>
            <img src="img1.jpg" alt="avant" />
            <img src="img1.jpg" alt="logo" />
          </div>
          <div>
            <img src="img1.jpg" alt="aprés" />
            <img src="img1.jpg" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Realisation;
