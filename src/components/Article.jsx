// src/components/Article.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Article.module.css";

const articles = [
  {
    id: 1,
    title: "Flowers",
    content:
      "Flowers are nature's epitome of beauty, serving as symbols of life, love, and renewal across cultures. Their vibrant colors, intricate patterns, and delicate fragrances captivate the senses and have inspired art, literature, and traditions throughout history. From the graceful elegance of roses to the cheerful simplicity of daisies, each flower species carries its own unique charm and symbolism. Flowers not only enhance the aesthetic appeal of gardens and landscapes but also play a crucial role in ecosystems by attracting pollinators such as bees, butterflies, and birds. This interaction facilitates plant reproduction, contributing to the biodiversity and health of the environment.",
    images: [
      "/assets/fl1.jpg",
      "/assets/fl2.jpg",
      "/assets/fl3.jpg",
      "/assets/fl4.jpg",
    ],
  },
  {
    id: 2,
    title: "Animals",
    content:
      "Animals are an integral part of the Earth's biodiversity, showcasing a vast range of forms and behaviors that contribute to the balance of ecosystems. From the smallest insects to the largest mammals, each species plays a unique role in its habitat. For instance, bees pollinate flowers, aiding in plant reproduction, while apex predators like lions help maintain the population balance of their prey. The diversity of animal life, from the colorful plumage of tropical birds to the intricate social structures of primates, reflects the adaptability and resilience of life on Earth. Studying animals provides insights into evolutionary processes, ecological relationships, and the sheer ingenuity of nature in adapting to various environments.",
    images: [
      "/assets/an1.jpg",
      "/assets/an2.jpg",
      "/assets/an3.jpg",
      "/assets/an4.jpg",
    ],
  },
  {
    id: 3,
    title: "Nature",
    content:
      "Nature, in all its grandeur, serves as a constant reminder of the world's inherent beauty and complexity. From the soaring mountains and deep valleys to the vast oceans and dense forests, the natural world is a symphony of life and color. Each ecosystem, whether it be a lush rainforest or a barren desert, has evolved over millennia, creating a delicate balance that sustains a myriad of life forms. This balance, although resilient, is also fragile, highlighting the importance of preserving our natural habitats. In nature, one can find solace and inspiration, a retreat from the hustle and bustle of modern life, where the rhythm of the seasons and the songs of the wild provide a backdrop for reflection and rejuvenation.",
    images: [
      "/assets/nat1.jpg",
      "/assets/nat2.jpg",
      "/assets/nat3.jpg",
      "/assets/nat4.jpg",
    ],
  },
  {
    id: 4,
    title: "City",
    content:
      "Cities are dynamic hubs of human activity, representing the pinnacle of cultural and economic development. They are centers of innovation, where diverse groups of people converge to exchange ideas, create art, and drive technological advancements. Urban environments offer a myriad of opportunities for education, employment, and entertainment, making them attractive destinations for people from various backgrounds. The architectural landscapes of cities, from towering skyscrapers to historic landmarks, reflect the evolution of human civilization and the adaptability of urban planning to accommodate growing populations. Despite their complexity, cities are designed to facilitate the efficient movement of people and goods, providing essential services and fostering a sense of community.",
    images: [
      "/assets/city1.jpg",
      "/assets/city2.jpg",
      "/assets/city3.jpg",
      "/assets/city4.jpg",
    ],
  },
];

const Article = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className={styles.article}>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <div className={styles.imageContainer}>
        {article.images.map((image, index) => (
          <img key={index} src={image} alt={`${article.title} ${index + 1}`} />
        ))}
      </div>
      <Link to="/articles" className={styles.link}>
        Back to Articles
      </Link>
    </div>
  );
};

export default Article;
