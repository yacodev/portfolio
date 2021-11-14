import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Desarrollador Full stack",
    years: "2021",
    content:
      "Programa de Educación intensivo en full-stack web development (Tiempo completo, 6 months) por Codeable (www.codeable.la)	",
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
    title: "Web Designer and Product Owner",
    years: "Enero 2020 – Diciembre 2020",
    content:
      "Construtec Perú es una start-up de desarrollo de software para el sector de la construcción. Nosotros desarrollamos el CPIP (Control de Proyectos de Inversión Pública).",
  },
  {
    id: 2,
    title: "Product Owner",
    years: "Octubre 2019 – Diciembre 2019",
    content:
      "Smart Cities Peru es una compañia de desarrollo de software.",
  },
  {
    id: 3,
    title: "Ingeniero de Proyectos",
    years: "Enero 2019 – Setiembre 2019",
    content:
      "Gobierno Regional del Cusco - Perú",
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
