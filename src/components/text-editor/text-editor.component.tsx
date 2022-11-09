import React, { useState } from "react";
import ReactQuill from "react-quill";
import { I_Article } from "../../app/slices/article.slice";
import { formats, modules } from "./text-editor.config";

import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/atom-one-dark.css";
import "./text-editor.styles.css";

interface I_TextEditor {
  articleContent: I_Article;
}

export const TextEditor = ({ articleContent }: I_TextEditor) => {
  const editorTheme = "bubble";

  const [article, setArticle] = useState(articleContent.content);

  return (
    <>
      <ReactQuill
        value={article}
        onChange={setArticle}
        theme={editorTheme}
        readOnly={true}
        modules={modules}
        formats={formats}
      />
    </>
  );
};
