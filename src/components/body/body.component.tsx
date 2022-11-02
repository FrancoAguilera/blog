import React, { useState, useEffect } from "react";
import parse from "html-react-parser";

import "./body.styles.css";

import { articles } from "../../mocks/articles.ts";

export const Body = () => {
  const [article, setArticle] = useState("");

  useEffect(() => {
    setArticle(articles[0].content);

    console.log(article);
  }, []);

  return <article className="article-content">{parse(article)}</article>;
};
