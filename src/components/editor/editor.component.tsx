import React, { useEffect, useState } from "react";

import ReactQuill from "react-quill";
import { formats, modules } from "./editor.config.ts";

import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/atom-one-dark.css";
import "./editor.styles.css";

export const EditorPage = () => {
  const [article, setArticle] = useState("");
  const [title, setTitle] = useState("");

  const savepost = () => {
    const payload = {
      title,
      article,
    };

    console.log(payload);
  };

  const titleHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className="editor-container">
      <input value={title} onChange={titleHandleChange} className="editor-title" type="text" placeholder="Title..." />
      <ReactQuill value={article} onChange={setArticle} theme="snow" modules={modules} formats={formats} />
      <div className="editor-save">
        <button className="save-button" onClick={savepost}>
          Save
        </button>
      </div>
    </div>
  );
};
