import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";
import { TextEditor } from "../text-editor/text-editor.component";
import { I_Article } from "../../app/slices/article.slice";

import "./body.styles.css";

export const Body = () => {
  const [article, setArticle] = useState<I_Article>();
  const { articles } = useSelector((state: RootState) => state);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const article = articles.find((article) => article.id === id);
      setArticle(article);
    }
  }, [id, articles]);

  if (article === undefined) {
    return <h4>Loading...</h4>;
  }

  return (
    <article className="article-content">
      <h3>{article.title}</h3>
      <TextEditor articleContent={article!} />
    </article>
  );
};
