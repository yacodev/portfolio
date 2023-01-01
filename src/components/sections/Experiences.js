import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const experienceData = [
  {
    id: 1,
    title: "Desarrollador Front-end",
    years: "Enero 2021 – Actualidad",
    content: "DEUNA: Libera el poder de tu  e-commerce",
    description: [
      "Desarrollo del admin web para que puedas crear y administrar tu tienda virtual.",
      "Implementación de testing con Jest.",
      "Implementación de eventos.",
      "Documentación de todos los productos de DEUNA.",
      "Tecnologías implementadas: React , Redux, Typescript y Jest.",
    ],
  },
  {
    id: 2,
    title: "Fundador - Desarrollador web",
    years: "Julio 2020 – Diciembre 2021",
    content:
      "Construtec Perú: desarrollo de software para el sector de la construcción.",
    description: [
      "Funde la startup Construtec Perú, para desarrollar software para el sector de la construcción.",
      "Diseñe el modelo de negocio para satisfacer una necesidad del mercado, estuve también encargado de la comercialización y lanzamiento del producto.",
      "Desarrolle la website de la start-up Construtec (constructecperu.com).",
      "Lideré a un equipo de tres ingenieros durante el proceso de desarrollo del software CPIP (Control de Proyectos de Inversión Pública) usando Java.",
      "Tecnologias implementadas: HTML, CSS, Javascript y React.",
    ],
  },
  {
    id: 3,
    title: "Desarrollador Front-end",
    years: "Agosto 2020 – Diciembre 2020",
    content: "Dirección Regional de Vivienda Construcción y Saneamiento",
    description: [
      "Desarrollo de una aplicación web para brindar capacitación al personal de las municipalidades de toda la región Cusco (http://lacasadelatm.com).",
      "Dirigir al equipo de Desarrolladores utilizando la metodología SCRUM.",
      "Tecnologias implementadas Sass, React y Typescript.",
      "Diseño de la UX/UI.",
    ],
  },

  {
    id: 4,
    title: "Desarrollador Back-end",
    years: "Octubre 2019 – Diciembre 2019",
    content: "Smart Cities Peru es una compañia de desarrollo de software.",
    description: [
      "Desarrollamos una plataforma web para realizar el seguimiento a la ejecución de Proyectos de Inversión Pública para el Gobierno Regional del Cusco.",
      "Tecnologías empleadas : React con Redux y para el backend Node.js con express.js.",
    ],
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experiencia laboral:" />
        <div className="row">
          <div className="col-md-12">
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
