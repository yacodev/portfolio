import React from "react";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import TrackVisibility from "react-on-screen";

const aboutContent = {
  name: "Carlos",
  avatarImage: "/images/avatar-2.svg",
  content:[
    `I’m a full-Stack Developer in love with technology who enjoys solving problems using software. I have two years of experience leading and working with teams to develop software for the construction sector, and in this period I founded my own startup (Construtec), it was a great experience.`,
    `Before I worked as a project manager in the construction sector, I worked for the Peruvian government building tracks, schools, and hospitals, but I always wanted to learn to develop software and try to solve problems using technology, so I started to study in Platzy and Codeable(Bootcamp), it was the best decision in my life.`,
    `I enjoy reading books about technology companies and everything related to entrepreneurship. I look forward to applying my leadership skills to help solve global problems in the technology industry`]
};

const counterData = [
  {
    id: 1,
    title: "Projects completed",
    count: 198,
    icon: "icon-fire",
  },
  {
    id: 2,
    title: "Cup of coffee",
    count: 5670,
    icon: "icon-cup",
  },
  {
    id: 3,
    title: "Satisfied clients",
    count: 427,
    icon: "icon-people",
  },
  {
    id: 4,
    title: "Nominees winner",
    count: 35,
    icon: "icon-badge",
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">

          <div className="col-md-12 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-12">
                  <p>{aboutContent.content[0]}</p>
                  <p>{aboutContent.content[1]}</p>
                  <p>{aboutContent.content[2]}</p>
                  <div className="mt-3">
                    <a href="!#" className="btn btn-default">
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        <Pagetitle title="Skills" />
        <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
