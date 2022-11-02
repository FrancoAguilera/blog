import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import parse from "html-react-parser";
import { formats, modules } from "../editor/editor.config.ts";

import "react-quill/dist/quill.bubble.css";
import "./body.styles.css";

import { articles } from "../../mocks/articles.ts";

export const Body = () => {
  const [article, setArticle] = useState("");

  useEffect(() => {
    setArticle(articles[0].content);

    console.log(article);
  }, []);

  return (
    <article className="article-content">
      <ReactQuill value={article} readOnly={true} theme={"bubble"} modules={modules} formats={formats} />
    </article>
  );
};
