import React from "react"
import styles from "./ProductCard.module.css"

function ProductCard({ title, desc, rating, price }) {
  return (
    <article className={styles.card}>
      <img src="/assets/dragon-logo.png" alt="" className={styles.img} />
      <h3 className={styles.title}>Product title</h3>
      <p className={styles.desc}>Product Description</p>
      <p className={styles.rating}>Star rating</p>
      <p className={styles.price}>£9.99</p>
    </article>
  )
}

export default ProductCard
