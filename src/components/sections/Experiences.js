import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Desarrollador Full stack",
    years: "2021",
    content:
      "Programa de Educación intensivo en Full-stack web development (Tiempo completo, 6 meses) por Codeable (www.codeable.la).",
  },
  {
    id: 2,
    title: "Master",
    years: "2017 - 2018",
    content:
      "Master en Planificación y gestión en Ingenieria por la Universidad Politécnica de Valencia - España",
  },
  {
    id: 3,
    title: "Ingeniero Electrónico",
    years: "2003 - 2008",
    content:
      "Ingeniero Electrónico por la Universidad Nacional de San Antonio Abad del Cusco - Perú",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Desarrollador Front-end ",
    years: "Agosto 2020 – Diciembre 2020",
    content:
      "Dirección Regional de Vivienda Construcción y Saneamiento",
  },
  {
    id: 2,
    title: "Fundador - CEO - Desarrollador web",
    years: "Julio 2019 – Julio 2020",
    content:
      "Construtec Perú fue una start-up de desarrollo de software para el sector de la construcción. Nosotros desarrollamos el software CPIP (Control de Proyectos de Inversión Pública).",
  },
  {
    id: 3,
    title: "Product Owner",
    years: "Octubre 2019 – Diciembre 2019",
    content:
      "Smart Cities Peru es una compañia de desarrollo de software.",
  },
  
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experiencia" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
