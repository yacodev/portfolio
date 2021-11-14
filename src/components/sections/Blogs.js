import React from "react";
import { Link } from "react-router-dom";
import Blog from "../elements/Blog";
import Pagetitle from "../elements/Pagetitle";

const allBlogs = [
  {
    id: 1,
    title: "Sistema de telemetría aplicada al monitoreo de la cantiad de solución madre en sistemas de abastecimiento rural de agua",
    image: "images/blog/blog_water.png",
    filesource: "../../blogs/project-water.md",
    date: "Noviembre, 2021",
    author: "Carlos Yaco",
    category: "Project",
  },
  {
    id: 2,
    title: "Eso nunca Funcionará (el nacimiento de Netflix)",
    image: "images/blog/blog_netflix.png",
    filesource: "../../blogs/blog-netflix.md",
    date: "Octubre, 2021",
    author: "Carlos Yaco",
    category: "Book",
  },
  {
    id: 3,
    title: "Four - el ADN secreto de Amazon, Apple, Facebook y Google",
    image: "images/blog/blog_four_opt.png",
    filesource: "../../blogs/blog-four.md",
    date: "Octubre, 2021",
    author: "Carlos Yaco",
    category: "Book",
  }
];

function Blogs() {
  return (
    <section id="blog">
      <div className="container">
        <Pagetitle title="Ultimos blogs" />
        <div className="row blog-wrapper">
          {allBlogs.map((blogItem) => (
            <div className="col-md-4" key={blogItem.id}>
              <Blog blogData={blogItem} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="spacer" data-height="30"></div>
          <Link to="/blogs" className="btn btn-default">
            Ver más
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
