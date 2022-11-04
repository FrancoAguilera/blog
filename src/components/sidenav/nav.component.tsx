import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";
import parse from "html-react-parser";

import "./nav.styles.css";

type Props = {};

export const Navigation = ({}: Props) => {
  const { articles } = useSelector((state: RootState) => state);
  const setDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString();
  };

  const articlesList = articles.map((article) => (
    <div className="article-card transition" key={article.id}>
      <Link to={`article/${article.id}`} style={{ textDecoration: "none" }}>
        <h3>{article.title}</h3>
      </Link>
      <span className="article-text">{parse(article.content)}</span>
      <div className="author-box">
        <p>Author: {article.author}</p>
      </div>
      <p className="created-at">{setDate(article.createdAt)}</p>
    </div>
  ));

  return <div className="articles-list">{articlesList}</div>;
};
