import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const experienceData = [
  {
    id: 1,
    title: "Desarrollador Front-end Sr.",
    years: "Abril 2024 – Febrero 2025",
    content: "Indra - Rimac Seguros",
    description: [
      "Desarrollo de una aplicación web  para corredores, para la optimización de la emisión de nuevos seguros (Proyecto finalizado).",
      "Implementación de micro-frontends y optimización del rendimiento.",
      "Creación de pruebas unitarias con Jest para garantizar la calidad del código.",
    ],
    achievements: [" Entrega del proyecto en el tiempo establecido."],
    technologies:
      "Tailwind, Sass, Javascript, React, Typescript, Redux, Zustand,Micro-frontends, Jest, AWS",
  },
  {
    id: 2,
    title: "Desarrollador Front-end",
    years: "Enero 2022 – Diciembre 2023",
    content: "DEUNA: Libera el poder de tu  e-commerce (Startup )",
    description: [
      "Desarrollo de la plataforma de administración para que los comercios gestionen sus ordenes de compra, pasarelas de pago, promociones y clientes, tanto la versión 1 y 2.",
      "Implementar tanto las pruebas unitarias y pruebas E2E.",
      "Implementación de Storybook para documentación de componentes reutilizables.",
      "Documentación y desarrollo de ejemplos de implementación del: SDK, payment-widget, de las API de DEUNA.",
    ],
    achievements: [
      "Generar una cultura de testing en el equipo,pasando de no tener cobertura a tener un mínimo del 70% de cobertura.",
    ],
    technologies:
      "Material UI, Bootstrap, Javascript, React, Typescript,  NextJs, Storybook, Redux, styled components,  pruebas unitarias con Jest y Cypress, AWS",
  },
  {
    id: 3,
    title: "Desarrollador Fullstack enfocado en Frontend",
    years: "Enero 2021 – Diciembre 2021",
    content: "Construtec: Software para la construcción. (Startup)",
    description: [
      "Liderar al equipo de frontend de la empresa.",
      "Desarrollo de la plataforma web para la gestión de almacenes y valorizaciones de obra.",
      "Colaborar para desarrollo del backend con el modulo gestión de almacenes.",
    ],
    achievements: ["Ganamos Startup Perú 9G"],
    technologies:
      "Material UI, Javascript, Angular, React, Typescript, Next.js, Context API, Node.js, Nest.js, PostgreSQL, Docker, AWS",
  },
  {
    id: 4,
    title: "Desarrollador Full stack",
    years: "Enero 2020 – Diciembre 2020",
    content: "Smart Cities Peru: Software factory",
    description: [
      "Desarrollo de una aplicación web para brindar capacitación al personal de las municipalidades de toda la región Cusco (http://lacasadelatm.com).",
      "Desarrollamos una plataforma web para realizar el seguimiento a la ejecución de Proyectos de Inversión Pública para el Gobierno Regional del Cusco.",
    ],
    achievements: [
      "Lograr un 90% de satisfacción del cliente con el producto final.",
    ],
    technologies:
      "Javascript, React, React Native, Angular, Typescript, Node.js, Nest.js MySQL, Dockers.",
  },
  {
    id: 5,
    title: "Product owner ",
    years: "Enero 2016 – Agosto 2017",
    content: "Construinnova Perú",
    description: [
      "Desarrollamos un software de escritorio para el control de proyectos de inversión  pública (CPIP).",
      "Diseño del Producto e implementación de modelos de negocio.",
      "Desarrolle la website del CPIP",
      "Lideré a un equipo de tres ingenieros durante el proceso de desarrollo del software CPIP usando Java.",
    ],
    technologies: "SCRUM, Jira, Github",
  },
  {
    id: 6,
    title: "Cofundador - CEO",
    years: "Enero 2013 – Diciembre 2014",
    content: "Evertech.",
    description: [
      "Cofunde la startup Evertech",
      "Desarrollamos un producto en  hardaware basado en la rasberry pi para hacer publicidad en vehiculos de transporte público.",
      "Desarrolle la landing page de  Evertech, las campañas de publicidad y  encargado de las ventas.",
      "Diseñe el modelo de negocio.",
    ],
    technologies: "Python, Rasberry pi ",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experiencia como Desarrollador:" />
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
