import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ContainerHeader = styled.div`
  display:flex;
  justify-content:center;
`


function HeaderBlog({ light }) {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleMobilenav = (e) => {
    e.preventDefault();
    setToggleNavbar(!toggleNavbar);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content-3")) {
      setToggleNavbar(false);
    }
  });

  return (
    <header
      className={
        light
          ? "desktop-header-3 fixed-top light"
          : "desktop-header-3 fixed-top"
      }
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          
          <button
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbarNavDropdown"
            data-toggle="collapse"
            type="button"
            onClick={handleMobilenav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ContainerHeader
            className={
              toggleNavbar
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ml-auto scrollspy">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="/portfolio"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="/portfolio"
                >
                  Acerca
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="/portfolio"
                >
                  Experiencia
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="/portfolio"
                >
                  Proyectos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="/portfolio"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="/portfolio"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </ContainerHeader>
        </nav>
      </div>
    </header>
  );
}

export default HeaderBlog;
