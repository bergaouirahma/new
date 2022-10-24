import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../style/contact.css";

function Contact() {
  const [contactData, setContactData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });
  const [valideForm, setValidForm] = useState({
    message: false,
  });
  const [emailValid, setEmailValid] = useState(false);
  const [nomValid, setNomValid] = useState(false);
  const [formError, setFormError] = useState(false);
  const [contactErreur, setContactErreur] = useState(true);
  const [btnForm, setBtnForm] = useState(false);
  const onChange = (e) => {
    formError && setFormError(false);
    setContactData({ ...contactData, [e.target.id]: e.target.value });
    e.target.id === "message" &&
      setValidForm({ ...valideForm, message: false });
    e.target.id === "email" && setEmailValid(false);
    e.target.id === "nom" && setNomValid(false);
  };
  const input_fields = {
    message: /[a-zA-Z0-9]/,
    nom: /[a-zA-Z]/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input_fields.email.test(contactData.email)) setEmailValid(true);
    else setEmailValid(false);
    if (!input_fields.message.test(contactData.message))
      setValidForm({ ...valideForm, message: true });
    else setValidForm({ ...valideForm, message: false });
    if (!input_fields.nom.test(contactData.nom)) setNomValid(true);
    else setNomValid(false);
    if (
      !valideForm.message &&
      !emailValid &&
      !nomValid &&
      contactData.email.length !== 0 &&
      contactData.message.length !== 0 &&
      contactData.nom.length !== 0
    ) {
      setBtnForm(true);
      let text = document.getElementById("message").value;
      text = text.replace(/\r?\n/g, "<br />");
      document.getElementById("message").value = text;
      emailjs
        .sendForm(
          "service_ecn2dc4",
          "template_xpdxjdh",
          e.target,
          "user_zvV31Tvb56n2EU6riKU7R"
        )
        .then(
          (result) => {
            emailjs
            .sendForm(
              "service_ecn2dc4",
              "template_xpdxjdh",
              e.target,
              "user_zvV31Tvb56n2EU6riKU7R"
            ).then((res)=>{
              setContactErreur(false);
              setTimeout(() => {
                setContactErreur(true);
              }, 1000);
              setContactData({
                ...contactData,
                nom: "",
                email: "",
                sujet: "",
                message: "",
              });
              setBtnForm(false);
            })
          },
          (error) => {
            setContactErreur(true);
            setBtnForm(false);
          }
        );
    
    } else setFormError(true);
  };
  return (
    <div>
      <div style={{ position: "relative" }}>
        <div
          className="contact_img"
          style={{
            width: "100%",
            height: 350,
            backgroundImage: "url(IMG4.jpg)",
          }}
        ></div>
      </div>

      <div className="contc">
        <h3>Vous avez des questions, demandez un devis ?</h3>
        <p>
        Veuillez indiquer vos coordonnées et votre demande,
        <br />
        Cf Rénovations vous répondra dans les plus brefs délais.
        </p>
      </div>

      <div className="row" style={{ margin: 0, width: "100%" }}>
        <div
          className="col-lg-6 col-12 container"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form className="text-center w-100" action="#!" onSubmit={onSubmit}>
            <input
              type="text"
              id="nom"
              value={contactData.nom}
              className="form-control mb-4"
              placeholder="Nom*"
              onChange={onChange}
              style={{ border: nomValid && "1px solid red" }}
              name="nom"
            />
            <input
              type="email"
              id="email"
              value={contactData.email}
              className="form-control mb-4"
              placeholder="E-mail*"
              onChange={onChange}
              style={{ border: emailValid && "1px solid red" }}
              name="email"
            />
            <input
              type="text"
              id="sujet"
              value={contactData.sujet}
              className="form-control mb-4"
              placeholder="Sujet"
              onChange={onChange}
              name="sujet"
            />
            <div className="form-group">
              <textarea
                className="form-control rounded-0"
                id="message"
                value={contactData.message}
                rows="5"
                placeholder="Message*"
                onChange={onChange}
                style={{ border: valideForm.message && "1px solid red" }}
                name="message"
              ></textarea>
            </div>
            <div
              style={{
                width: "100%",
                textAlign: "start",
                color: "gray",
                marginBottom: 10,
              }}
            >
              *Champs requis
            </div>
            <button
              className="btn  btn-block"
              type="submit"
              style={{ background: "#252e44", color: "white" }}
              disabled={btnForm}
            >
              Envoyer
            </button>
          </form>
          <div
            className="erreur-form"
            style={{ display: !formError && "none" }}
          >
            <p>
              Un ou plusieurs champs contiennent une erreur Veuillez vérifier
              et essayer à nouveau.
            </p>
          </div>
        </div>
      </div>

      <div
        className="contact-alert"
        style={{
          opacity: contactErreur && 0,
          visibility: contactErreur && "hidden",
        }}
      >
        Votre message a été envoyé, merci de votre confiance
      </div>
    </div>
  );
}

export default Contact;
