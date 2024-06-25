// src/components/Articles.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Articles.module.css";

const articles = [
  { id: 1, title: "Flowers" },
  { id: 2, title: "Animals" },
  { id: 3, title: "Nature" },
  { id: 4, title: "City" },
];

const Articles = () => (
  <div className={styles.articles}>
    <h1>Articles</h1>
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Link to={`/articles/${article.id}`} className={styles.link}>
            {article.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Articles;
