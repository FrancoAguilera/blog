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
        <h3>
          <i>"Psiconauta del inconsciente, yo todo lo entiendo, yo todo lo entiendo..."</i>
        </h3>
        <div className="contact">
          <p>
            <a href="https://github.com/FrancoAguilera" target="_blank" rel="noreferrer">
              [ :_ Github ]
            </a>
          </p>
          <p>
            <a href="https://twitter.com/Ahsen_Juan" target="_blank" rel="noreferrer">
              [ @Twitter ]
            </a>
          </p>
          <p>
            <a href="https://stackoverflow.com/users/2743774/franco-aguilera" target="_blank" rel="noreferrer">
              [ StackOverflow ]
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
