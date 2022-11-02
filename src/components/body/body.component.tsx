import React, { useState, useEffect } from "react";
import { TextEditor } from "../text-editor/text-editor.component.tsx";

import "./body.styles.css";

import { articles } from "../../mocks/articles.ts";

export const Body = () => {
  const [article, setArticle] = useState();

  useEffect(() => {
    setArticle(articles[0].content);
  }, []);

  return (
    <article className="article-content">{article && <TextEditor readOnly={true} articleContent={article} />}</article>
  );
};
