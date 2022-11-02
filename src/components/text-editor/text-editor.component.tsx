import React, { useState } from "react";
import ReactQuill from "react-quill";
import { formats, modules } from "./text-editor.config.ts";

import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/atom-one-dark.css";
import "./text-editor.styles.css";

export const TextEditor = ({ readOnly, articleContent }) => {
  const [article, setArticle] = useState(articleContent);
  let editorTheme = readOnly ? "bubble" : "snow";

  return (
    <>
      <ReactQuill
        value={article}
        onChange={setArticle}
        theme={editorTheme}
        readOnly={readOnly}
        modules={modules}
        formats={formats}
      />
    </>
  );
};
