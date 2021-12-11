import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  const style = {
    // nav: {
    //   height: '10%',
    //   background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)',
    // },
    ul: {
      display: "flex",
      padding: "10px",
      textDecoration: "none",
      justifyContent: "space-around",
      alignItems: "center",
      alignContent: "center",
      listStyleType: "none",
    },
    a: {
      color: "black",
    },
  };
  return (
    <div>
      <ul className="nav nav-tabs" style={style.ul}>
        <li className="nav-item">
          <a
            style={style.a}
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            style={style.a}
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            style={style.a}
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            style={style.a}
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
