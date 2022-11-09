import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { I_Article } from "../../app/slices/article.slice";
import { formats, modules } from "./text-editor.config";

import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/atom-one-dark.css";
import "./text-editor.styles.css";

interface I_TextEditor {
  readOnly: boolean;
  articleContent: I_Article;
}

export const TextEditor = ({ readOnly, articleContent }: I_TextEditor) => {
  const editorTheme = readOnly ? "bubble" : "snow";
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState(articleContent.content);

  const titleHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const articleHandleSave = () => {
    console.log(article);
  };

  return (
    <>
      {!readOnly && (
        <input value={title} onChange={titleHandleChange} className="editor-title" type="text" placeholder="Title..." />
      )}
      <ReactQuill
        value={article}
        onChange={setArticle}
        theme={editorTheme}
        readOnly={readOnly}
        modules={modules}
        formats={formats}
      />
      {!readOnly && (
        <div className="editor-save">
          <button className="btn" onClick={articleHandleSave}>
            Save
          </button>
        </div>
      )}
    </>
  );
};
