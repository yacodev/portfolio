import Pagetitle from "../elements/Pagetitle";
import pdf from "../../resume/CV_carlos_yaco.pdf"


function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="Acerca de mi" />
        <div className="row">

          <div className="col-md-12 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-12">
                  <p> <strong> Soy desarrollador full-Stack 👨🏻‍💻,</strong>  creo que la tecnología es una herramienta para resolver problemas, entregar valor y hacer más eficientes los procesos.</p>
                  <p> <strong> Tengo dos años de experiencia </strong> trabajando con equipos y desarrollando software para el sector de la Construcción. </p>
                  <p>Tuve la oportunidad de <strong> fundar una startup,</strong> lo arruinamos 😢, pero aun si fue una  de las mejores  experiencias de mi vida😁.</p>
                  <p>Disfruto leyendo libros 📚 sobre startups, emprendimiento y un poco de ciencia ficción. Me gusta trabajar en ideas innovadores, colaborar con el equipo poniendo mi granito de arrena y <strong> tener una gran aventura.</strong></p>
                  <div className="mt-3">
                    <a href={pdf} className="btn btn-default">
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
