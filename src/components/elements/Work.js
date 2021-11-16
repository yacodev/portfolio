import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

function Work({ workData }) {
  const { id, category, title, description, image, filesource } = workData;
  const getNospaceTitle = (filesource) => {
    let tempArr = filesource.split("/");
    let fileName = tempArr[tempArr.length - 1];
    let getName = fileName.slice(0, -3);
    return getName ;
  };
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
      style={{height: "100%"}}
    >
      <div className="blog-item rounded bg-white shadow-dark" style={{height: "100%"}}>
        <div className="thumb">
          <a href="!#">
            <span className="category">{category}</span>
          </a>
          <Link to={`/works/work-details/${id}/${getNospaceTitle(filesource)}`}>
            <img src={image} alt="blog-title" />
          </Link>
        </div>
        <div className="details" >
          <h4 className="my-0 title">
            <Link
              to={`/works/work-details/${id}/${getNospaceTitle(filesource)}`}
            >
              {title}
            </Link>
          </h4>
          <ul className="list-inline meta mb-0 mt-2">
            <li className="list-inline-item">{description}</li>
          </ul>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Work;
