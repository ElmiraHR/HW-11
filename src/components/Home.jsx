// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css"; // Импорт CSS-модулей

const Home = () => (
  <div className={styles.home}>
    <h1>Welcome to My Blog</h1>
    <p>Explore the articles and enjoy reading!</p>
    <Link to="/articles" className={styles.link}>
      Go to Articles
    </Link>
  </div>
);

export default Home;
