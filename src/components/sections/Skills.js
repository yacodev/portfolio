import Pagetitle from "../elements/Pagetitle";
const skillsFronted = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    name: "HTML",
  },
  {
    id: 2,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    name: "CSS",
  },
  {
    id: 3,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    name: "Javascript",
  },
  {
    id: 4,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    name: "React",
  },
  {
    id: 5,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
    name: "Angular",
  },

  {
    id: 6,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    name: "Typescript",
  },
  {
    id: 7,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    name: "Next",
  },
  {
    id: 8,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    name: "Redux",
  },
  {
    id: 9,
    image:
      "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
    name: "Zustand",
  },
  {
    id: 10,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg",
    name: "Jest",
  },
  {
    id: 11,
    image: "https://www.cypress.io/_astro/cypress-logo.D87396b0.svg",
    name: "Cypress",
  },
  {
    id: 12,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    name: "Tailwind",
  },
  {
    id: 13,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
    name: "Bootstrap",
  },
  {
    id: 14,
    image: "https://vite.dev/logo.svg",
    name: "Vite",
  },
  {
    id: 15,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-original.svg",
    name: "Webpack",
  },
  {
    id: 16,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    name: "Sass",
  },

  {
    id: 17,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    name: "React Native",
  },
];

const skillsBackend = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    name: "Node",
  },
  {
    id: 2,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    name: "Express",
  },
  {
    id: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg",
    name: "Nest",
  },
  {
    id: 4,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    name: "MySQL",
  },
  {
    id: 5,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    name: "MongoDB",
  },
  {
    id: 6,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
    name: "PostgreSQL",
  },
  {
    id: 7,
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
    name: "Docker",
  },
  {
    id: 8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    name: "AWS",
  },
];

function Skills() {
  const renderSkills = (skills) => (
    <div className="row">
      {skills.map((skill) => (
        <div
          className="col-md-1 col-3 "
          key={skill.id}
          style={{ marginBottom: "15px", marginLeft: "15px", gap: "10px" }}
        >
          <div className="client-item">
            <div
              className="inner"
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img
                src={skill.image}
                alt="skill-name"
                style={{ width: "60px", height: "60px" }}
              />
            </div>
          </div>

          <div className="client-item">
            <span>{skill?.name}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div id="skills">
      <div className="container">
        <Pagetitle title="Tecnologias:" />
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
      </div>
    </div>
  );
}

export default Skills;
