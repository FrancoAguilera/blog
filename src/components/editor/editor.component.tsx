import React, { useState } from "react";
import { I_Article } from "../../app/slices/article.slice";
import { TextEditor } from "../text-editor/text-editor.component";
import "./editor.styles.css";

export const EditorPage = () => {
  const emptyArticle: I_Article = {
    id: "",
    author: "",
    title: "",
    content: "",
    createdAt: "",
    updatedAt: "",
  };

  return (
    <div className="editor-container">
      <TextEditor readOnly={false} articleContent={emptyArticle} />
    </div>
  );
};
