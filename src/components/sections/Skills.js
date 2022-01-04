import Pagetitle from "../elements/Pagetitle";
const skillsFronted = [
  {
    id: 1,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  },
  {
    id: 2,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  },
  {
    id: 3,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    id: 5,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
  },

  {
    id: 6,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
];

const skillsBackend = [
  {
    id: 1,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    id: 2,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  },
  {
    id: 3,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
  },
  {
    id: 4,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    id: 5,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    id: 6,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
  },
  {
    id: 7,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  },
];

const skillsProcess = [
  {
    id: 1,
    image: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
  },

];


function Skills() {

  const renderSkills = (skills)=>(
    <div className="row">
      {skills.map((skill)=>(
        <div className="col-md-1 col-3" key={skill.id} style={{marginBottom: "15px", marginLeft:"15px"}}>
          <div className="client-item" >
            <div className="inner" style={{display:"flex", justifyContent:"center", width:"100%"}}>
              <img src={skill.image} alt="skill-name" style={{width: "60px", height:"60px"}}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div id="skills">
      <div className="container">
        <Pagetitle title="Conocimientos" />
        <div className="mt-3">
          <p>Frontend:</p>
          <div className="rounded bg-white shadow-dark p-3 ">
            {renderSkills(skillsFronted)}
          </div>
        </div>
        <div className="mt-3">
          <p>Backend:</p>
          <div className="rounded bg-white shadow-dark p-3">
            {renderSkills(skillsBackend)}
          </div>
        </div>
        <div className="mt-3">
          <p>Aprendiendo:</p>
          <div className="rounded bg-white shadow-dark p-3">
            {renderSkills(skillsProcess)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
