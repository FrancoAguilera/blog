import React from "react";
import "./footer.styles.css";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <div className="footer">
      <div className="contact">
        <div>
          <a href="https://github.com/FrancoAguilera" target="_blank" rel="noreferrer">
            [ :_ Github ]
          </a>
        </div>
        <div>
          <a href="https://twitter.com/Ahsen_Juan" target="_blank" rel="noreferrer">
            [ @Twitter ]
          </a>
        </div>
        <div>
          <a href="https://stackoverflow.com/users/2743774/franco-aguilera" target="_blank" rel="noreferrer">
            [ StackOverflow ]
          </a>
        </div>
      </div>
    </div>
  );
};
