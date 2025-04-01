import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";
import { init, send } from "emailjs-com";

function Contact() {
  init("user_B7JHqpbpBbJ0WyS0JjPH2");

  const [toSend, setToSend] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (!toSend.from_name) {
      setError(true);
      setMessage("Name is required");
    } else if (!toSend.reply_to) {
      setError(true);
      setMessage("Email is required");
    } else if (!toSend.subject) {
      setError(true);
      setMessage("Subject is required");
    } else if (!toSend.message) {
      setError(true);
      setMessage("Message is required");
    } else {
      send(
        "service_09ynvul",
        "template_9ofonzf",
        toSend,
        "user_B7JHqpbpBbJ0WyS0JjPH2"
      )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });

      setError(false);
      setMessage("Tu mensaje ha sido enviado!!!");
    }
  };

  const handleChange = (event) => {
    setToSend({
      ...toSend,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (error && message) {
      return <div className="alert alert-danger mt-4">{message}</div>;
    } else if (!error && message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    } else {
      return null;
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <Pagetitle title="Contáctame" />

        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h3>Vamos a hablar!</h3>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p>
                  ¿No te gustan los formularios? Enviame un{" "}
                  <a href="mailto:cyaco33@gmail.com">email</a> o escribe al{" "}
                  <a
                    href="https://wa.me/+51932001032"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Enlace a WhatsApp"
                  >
                    whatsApp
                  </a>
                  . 👋
                </p>
              </ScrollAnimation>
            </div>
          </div>

          <div className="col-md-8">
            <form
              id="contact-form"
              className="contact-form mt-6"
              onSubmit={submitHandler}
            >
              <div className="row">
                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="from_name"
                      id="InputName"
                      placeholder="Nombre"
                      onChange={handleChange}
                      value={toSend.from_name}
                    />
                  </div>
                </div>

                <div className="column col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail"
                      name="reply_to"
                      placeholder="Email"
                      onChange={handleChange}
                      value={toSend.reply_to}
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="InputSubject"
                      name="subject"
                      placeholder="Asunto"
                      onChange={handleChange}
                      value={toSend.subject}
                    />
                  </div>
                </div>

                <div className="column col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="InputMessage"
                      className="form-control"
                      rows="5"
                      placeholder="Mensage"
                      onChange={handleChange}
                      value={toSend.message}
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                name="submit"
                id="submit"
                value="Submit"
                className="btn btn-default"
              >
                Enviar Mensaje
              </button>
            </form>
            {handleAlerts()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
