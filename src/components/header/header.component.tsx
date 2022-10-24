import React from "react";
import "./header.styles.css";

type Props = {};

export const Header = (props: Props) => {
  return (
    <div className="header">
      <div className="header-image">
        <img className="box-shadow" src="/profile.jpg" alt="" />
      </div>
      <div className="header-data">
        <h2>Franco Aguilera</h2>
        <h3>
          <i>"Psiconauta del inconsciente, yo todo lo entiendo, yo todo lo entiendo..."</i>
        </h3>
      </div>
    </div>
  );
};
