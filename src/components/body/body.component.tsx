import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";
import { TextEditor } from "../text-editor/text-editor.component";

import "./body.styles.css";

export const Body = () => {
  return (
    <article className="article-content">
      <TextEditor readOnly={true} />
    </article>
  );
};
