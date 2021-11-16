import Work from "../elements/Work";
import Pagetitle from "../elements/Pagetitle";

const allWorks = [
  {
    id: 1,
    title: "Plataforma de Capacitación para ATMs",
    image: "images/works/work3_capacitation.png",
    filesource: "../../works/capacitation.md",
    description: "Desarrollamos la plataforma web para realizar capacitaciones al personal de las ATMs en la región del Cusco.",
    category: "Proyecto",
  },
  {
    id: 2,
    title: "Construtec",
    image: "images/works/work1_construtec.png",
    filesource: "../../works/construtec.md",
    description: "Desarrolle la pagina web de la empresa y dirigí al equipo durante el desarrollo del software CPIP.",
    category: "Proyecto"
  },
  {
    id: 3,
    title: "Seguimiento a la ejecución de proyectos de Inversión",
    image: "images/works/work2_spip.png",
    filesource: "../../works/spip.md",
    description: "Desarrollamos la plataforma web para realizar el seguimiento al avance de las obras del gobierno regional de Cusco.",
    category: "Proyecto",
  },
  
];

function Works() {
  return (
    <section id="blog">
      <div className="container">
        <Pagetitle title="Trabajos" />
        <div className="row blog-wrapper">
          {allWorks.map((workItem) => (
            <div className="col-md-4" key={workItem.id} style={{marginTop:"15px"}}>
              <Work workData={workItem} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;