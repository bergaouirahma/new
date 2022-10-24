import { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router";
import "./App.css";
import React from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Isolation from "./pages/Isolation";
import Construction from "./pages/Construction";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Maconnerie from "./pages/Maconnerie";
import Peinture from "./pages/Peinture";
import CfRénovation from "./pages/CfRénovation";
import Realisation from "./pages/Realisation";
import Renovation from "./pages/Renovations";

function App() {
  const [up, setUp] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 450) {
        setUp(true);
      } else {
        setUp(false);
      }
    });
  });
  useEffect(() => {
    if (window.scrollY > 450) {
      setUp(true);
    }
  }, []);
  return (
    <div
      className="App"
      style={{ paddingTop: location.pathname !== "/" && 70 }}
    >
      <div className="App_center">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/peinture" component={Peinture} />
          <Route path="/rénovation" component={Renovation} />
          <Route path="/construction" component={Construction} />
          <Route path="/isolation" component={Isolation} />
          <Route path="/contact" component={Contact} />
          <Route path="/CfRénovation" component={CfRénovation} />
          <Route path="/maçonnerie" component={Maconnerie} />
          <Route path="/realisations" component={Realisation} />
        </Switch>
      </div>
      <Footer />
      <div
        className="top-arrow"
        style={{
          opacity: up && "1",
          overflow: up && "visible",
          top: up && "92%",
        }}
        onClick={() => window.scrollTo(0, 0)}
      >
        <i className="fas fa-angle-up"></i>
      </div>
    </div>
  );
}

export default App;
