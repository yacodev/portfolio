import Pagetitle from "../elements/Pagetitle";
import pdf from "../../resume/Desarrollador-frontend-carlos-yaco.pdf";

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="Quien Soy" />
        <div className="row">
          <div className="col-md-12 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    Hola, mi nombre es Carlos Yaco, me gustan diferentes áreas
                    de la Ingeniería, entre ellas me dedico
                    <strong>
                      {" "}
                      al desarrollo de software 👨🏻‍💻 (tanto frontend como backend)
                      tengo más de 5 años de experiencia.
                    </strong>{" "}
                    Creo que la tecnología es una de las principales
                    herramientas para resolver problemas, mejorar la calidad de
                    vida y hacer más eficientes los procesos.
                  </p>
                  <p>
                    Me encanta el emprendimiento, la innovación, el desarrollo
                    de productos, los side projects. Años atrás
                    <strong>
                      {" "}
                      funde una startup (Evertech) juntos a uno de mis amigos,
                    </strong>{" "}
                    lo arruinamos 😢, pero aun si fue una de las mejores
                    experiencias de mi vida😁. Tambien forme parte del equipo
                    fundador de
                    <strong>
                      "Construtec" un SAAS para la gestión de almacenes y
                      valorizaciones de obra, con este emprendimiento logramos
                      ganar Startup Perú 9G
                    </strong>{" "}
                  </p>

                  <p>
                    {" "}
                    <strong> Tengo más de 5 años de experiencia </strong>{" "}
                    trabajando tanto en startups de Silicon Valley, software
                    factories, como en emprendimientos nacionales, trabaje
                    principalmente
                    <strong>
                      como desarrollador de software enfocado en el frontend con
                      React, Angular, Next.js y Typescript además de experiencia
                      en backend con Node.js, Nest.js y Express.js.
                    </strong>{" "}
                  </p>

                  <p>
                    {" "}
                    Me gusta también el sector de la Construcción,
                    <strong> soy Ingeniero Civil, </strong> trabajé por varios
                    años desempeñándome como residente y supervisor de obras,
                    tuve la oportunidad de ganar una beca para estudiar{" "}
                    <strong>
                      {" "}
                      maestria en gestión y planificación en Ingeniería{" "}
                    </strong>{" "}
                    en la Universidad Politécnica de Valencia en España, fue una
                    de las mejores experiencias de mi vida.😃
                  </p>

                  <p>
                    Disfruto leyendo libros 📚 sobre startups, emprendimiento,
                    biografias y ciencia ficción. Me gusta trabajar en ideas
                    innovadores, principlamente en startups😁 , colaborar con el
                    equipo poniendo mi granito de arrena y{" "}
                    <strong> tener una gran aventura.</strong>
                  </p>
                  <div className="mt-3">
                    <a
                      href={pdf}
                      className="btn btn-default"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Descargar C.V.
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
      </div>
    </section>
  );
}

export default About;
