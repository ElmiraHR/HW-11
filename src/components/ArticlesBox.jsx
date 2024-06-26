import styles from "./ArticlesBox.module.css";
import React from "react";
import { Link } from "react-router-dom";


const articles = [
    { id: 1, title: "Flowers" },
    { id: 2, title: "Animals" },
    { id: 3, title: "Nature" },
    { id: 4, title: "City" },
  ];

function ArticlesBox () {
    return (
    <div className={styles.ArticlesBox}>
     <div className={styles.Box}>
       <h3>Nature</h3>
     <p>This page is dedicated to the beauty and diversity of nature. You'll find stunning photographs of forests, mountains, rivers, and oceans. The descriptions are complemented by information on natural phenomena, climate, and ecosystems, highlighting the uniqueness of each natural area.</p> 
     <img className={styles.img} src="/assets/scr.png"/>
     </div>
     <div className={styles.Box}>
     <h3>Flowers</h3>
     <p>The page devoted to flowers showcases vibrant and colorful images of various flowering plants. Here you can learn about different flower varieties, their symbolism, places of growth, and care tips. Fascinating facts and advice make the world of flowers more accessible and intriguing.</p>
     <img className={styles.img} src="/assets/scr.png"/>
     </div>
     <div className={styles.Box}>
     <h3>Animals</h3>
     <p>
     This page explores the diversity of the animal kingdom. Visitors are presented with photos and descriptions of numerous animal species, from exotic to familiar. Each section includes information on their behaviors, habitats, and interesting traits, providing a deeper understanding and appreciation of the fascinating world of fauna.</p>
     <img className={styles.img} src="/assets/scr.png"/>
     </div>
     <div className={styles.Box}>
     <h3>City</h3>
     <p>
     The city page features magnificent images of urban architecture, streets, and landmarks. The descriptions include intriguing facts about famous metropolises, their history, culture, and urban life characteristics. This section inspires travel and exploration of various cityscapes.</p>
     <img className={styles.img} src="/assets/scr.png"/>
     </div>

    </div>

    )
}
export default ArticlesBox;