import { Link } from "react-router-dom";
import React from "react";
import ArticleList from "../data/articles";

const Articles = () => {
  return (
    <div className="margin">
      {ArticleList.map((article, index) => (
        <div className="art" key={index}>
            <Link to={article.slug}>
                <h3>{article.title}</h3>
            </Link>
            <h2>{article.author}</h2>
            <br></br>
        </div>
      ))}
    </div>
  );
};

export default Articles;
