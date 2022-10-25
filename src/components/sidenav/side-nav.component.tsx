import React from "react";
import "./side-nav.styles.css";

type Props = {};

export const Sidenav = ({}: Props) => {
  return (
    <nav className="navigation">
      <ul className="navigation-panel transition">
        <li className="nav-item">
          <a href="#">Lorem ipsum</a>
        </li>
        <li className="nav-item">
          <a href="#"> Officia consequatur</a>
        </li>
        <li className="nav-item">
          <a href="#">Cut este</a>
        </li>
        <li className="nav-item">
          <a href="#">Porro, deserunt</a>
        </li>
        <li className="nav-item">
          <a href="#">Maiores, labore</a>
        </li>
        <li className="nav-item">
          <a href="#">Delectus, fugit</a>
        </li>
        <li className="nav-item">
          <a href="#">necessitatibus</a>
        </li>
      </ul>
    </nav>
  );
};
