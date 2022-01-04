import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const experienceData = [
  {
    id: 1,
    title: "Desarrollador Front-end",
    years: "Agosto 2020 – Diciembre 2020",
    content:
      "Dirección Regional de Vivienda Construcción y Saneamiento",
  },
  {
    id: 2,
    title: "Fundador - Desarrollador web",
    years: "Julio 2019 – Julio 2020",
    content:
      "Construtec Perú es una start-up de desarrollo de software para el sector de la construcción.",
  },
  {
    id: 3,
    title: "Desarrollador Back-end",
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
