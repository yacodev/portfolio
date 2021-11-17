import Pagetitle from "../elements/Pagetitle";
import pdf from "../../resume/CV_carlos_yaco.pdf"

const aboutContent = {
  name: "Carlos",
  avatarImage: "/images/avatar-2.svg",
  content:[
    `Soy desarrollador full-Stack, disfruto usar la tecnología como una herramienta para resolver problemas y mejorar la vida de los demás. Tengo dos años de experiencia liderando y trabajando con equipos para desarrollar software en el sector de la Construcción, y en este periodo pude fundar mi start-up (Construtec), fue una gran experiencia.`,
    `Antes trabaja como Ingeniero de Proyectos en el sector de la Construcción, trabaje en el gobierno Peruano construyendo pistas, escuelas y hospitales, pero siempre quise aprender a programar para comenzar a desarrollar soluciones basadas en software, por eso comencé a estudiar en Platzi y me inscribí en el Bootcamp de codeable, fue una de las mejores decisiones de mi vida.`,
    `Disfruto leyendo libros sobre empresas de tecnología y todo lo relacionado con el emprendimiento. Espero poder colaborar y aplicar mis habilidades de liderazgo para ayudar a resolver todo tipo de problemas en la industria de la tecnología`]
};


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
                  <p>{aboutContent.content[0]}</p>
                  <p>{aboutContent.content[1]}</p>
                  <p>{aboutContent.content[2]}</p>
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
