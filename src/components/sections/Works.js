import React, { useState, useEffect } from "react";
import Pagetitle from "../elements/Pagetitle";
import Portfolio from "../elements/Portfolio";

const allData = [
  {
    id: 1,
    title: "Project Managment Illustration",
    category: "art",
    image: "images/works/1.svg",
    popupLink: ["images/works/1.svg"],
  },
  {
    id: 2,
    title: "Guest App Walkthrough Screens",
    category: "creative",
    image: "images/works/2.svg",
    popupLink: [
      "images/works/2.svg",
      "images/works/5.svg",
      "images/works/6.svg",
    ],
  },
  {
    id: 3,
    title: "Delivery App Wireframe",
    category: "branding",
    image: "images/works/3.svg",
    popupLink: ["https://www.youtube.com/watch?v=qf9z4ulfmYw"],
  }
];

function Works() {  
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems(allData);

  }, []);

  
  return (
    <section id="works">
      <div className="container">
        <Pagetitle title="Recent Works" />
        {/* Start Portfolio Items */}
        <div className="row portfolio-wrapper">
          {visibleItems.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
              <Portfolio portfolio={item} />
            </div>
          ))}
        </div>
        {/* End Portfolio Items */}
      </div>
    </section>
  );
}

export default Works;
