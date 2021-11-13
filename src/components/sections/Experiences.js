import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Full stack Develper",
    years: "2021",
    content:
      "Intensive full-stack web development education program (full-time, 6 months) by Codeable (www.codeable.la)	",
  },
  {
    id: 2,
    title: "Master Degree",
    years: "2017 - 2018",
    content:
      "Master’s in Project Management and Planning in Engineering by Polytechnic University of Valencia	- Spain",
  },
  {
    id: 3,
    title: "Electronic Engineer",
    years: "2003 - 2008",
    content:
      "Electronic Engineer by National University San Antonio Abad of Cusco	- Perú",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Web Designer and Product Owner",
    years: "January 2020 – December 2020",
    content:
      "Construtec Perú is a company of Software development for the construction sector. We build the software CPIP (Control of Public Investment Project).",
  },
  {
    id: 2,
    title: "Product Owner",
    years: "October 2019 – December 2019",
    content:
      "Smart Cities Peru is a Software development company	",
  },
  {
    id: 3,
    title: "Project Engineer",
    years: "January 2019 – September 2019",
    content:
      "Regional Government of Cusco",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
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
