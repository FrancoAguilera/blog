import React from "react";
import "./header.styles.css";

type Props = {};

export const Header = (props: Props) => {
  return (
    <header className="header">
      <div className="header-image">
        <img className="box-shadow" src="/profile.jpg" alt="" />
      </div>
      <div className="header-data">
        <h2>
          <i>[dev][~/self/FrancoAguilera]$</i>
          <span className="blink">_</span>
        </h2>
        <h3>
          <i>"Psiconauta del inconsciente, yo todo lo entiendo, yo todo lo entiendo..."</i>
        </h3>
      </div>
    </header>
  );
};
