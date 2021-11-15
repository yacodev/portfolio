import React, { useState, useEffect } from "react";
import HeaderBlog from "../components/layouts/HeaderBlog";
import Blog from "../components/elements/Blog";
import Pagination from "../components/elements/Pagination";

const allBlogs = [
  {
    id: 1,
    title: "Sistema de telemetría aplicada al monitoreo de solución madre.",
    image: "images/blog/blog_water_opt.png",
    filesource: "../../blogs/project-water.md",
    date: "Noviembre, 2021",
    author: "Carlos Yaco - Juan Vizcardo - Bengie Serrano",
    category: "Implementación",
  },
  {
    id: 2,
    title: "Eso nunca Funcionará (el nacimiento de Netflix).",
    image: "images/blog/blog_netflix_opt.png",
    filesource: "../../blogs/blog-netflix.md",
    date: "Octubre, 2021",
    author: "Carlos Yaco",
    category: "Resumen",
  },
  {
    id: 3,
    title: "Four - el ADN secreto de Amazon, Apple, Facebook y Google.",
    image: "images/blog/blog_four_opt.png",
    filesource: "../../blogs/blog-four.md",
    date: "Octubre, 2021",
    author: "Carlos Yaco",
    category: "Resumen",
  },
  {
    id: 4,
    title: "El libro negro del Emprendedor.",
    image: "images/blog/blog_entrepreneur_opt.png",
    filesource: "../../blogs/blog-entrepreneur.md",
    date: "Setiembre, 2021",
    author: "Carlos Yaco",
    category: "Resumen",
  },
  {
    id: 5,
    title: "El millonario de Silicon Valley.",
    image: "images/blog/blog_silicon_valley_opt.png",
    filesource: "../../blogs/blog-silicon-valley.md",
    date: "Setiembre, 2021",
    author: "Carlos Yaco",
    category: "Resumen",
  },
];

function Bloglist() {
  // document.body.classList.add("dark");
  //Uncomment the above line if you use dark version

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    setPosts(allBlogs);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content")) {
      setToggleMenu(false);
    }
  });

  return (
    <>
      <HeaderBlog />
      <main className={toggleMenu ? "content open" : "content"}>
        <div className="spacer" data-height="96"></div>
        <div className="blog-page-section">
          <div className="container">
            <div className="row blog-wrapper fix-spacing">
              {currentPosts.map((blogItem) => (
                <div className="col-md-6" key={blogItem.id}>
                  <Blog blogData={blogItem} />
                </div>
              ))}
            </div>
            <div className="spacer" data-height="50"></div>
            {!(posts.length > postsPerPage) ? null : (
              <Pagination
                itemsPerPage={postsPerPage}
                totalItems={posts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default Bloglist;
