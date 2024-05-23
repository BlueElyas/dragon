import React from "react"
import styles from "./ProductCard.module.css"

function ProductCard({ image, title, desc, rating, price }) {
  return (
    <article className={styles.card}>
      <img src={image} alt="" className={styles.img} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <p className={styles.rating}>{rating}</p>
      <p className={styles.price}>£{price}</p>
    </article>
  )
}

export default ProductCard
