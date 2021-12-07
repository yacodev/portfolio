import Pagetitle from "../elements/Pagetitle";
const brandlogoData = [
  {
    id: 1,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    id: 2,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    id: 3,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
  },
  {
    id: 4,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    id: 5,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  },
  {
    id: 6,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
  },
  {
    id: 7,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  },
  {
    id: 8,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  },
  {
    id: 9,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    id: 10,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    id: 11,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
  },
  {
    id: 12,
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  },
];

function Brandlogos() {
  return (
    <div id="branglogos">
      <div className="container">
      <Pagetitle title="Conocimientos" />
        <div className="row">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-1 col-4" key={brandlogo.id} style={{marginBottom: "20px"}}>
              <div className="client-item" >
                <div className="inner" style={{display:"flex", justifyContent:"center", width:"100%"}}>
                  <img src={brandlogo.image} alt="skill-name" style={{width: "60px", height:"60px"}}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brandlogos;
