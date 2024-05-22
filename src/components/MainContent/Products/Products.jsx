import React, { useState } from "react"
import styles from "./Products.module.css"
import ProductCard from "./ProductCard/ProductCard"
import ProductsSearch from "./ProductsSearch/ProductsSearch"
function Products() {
  const [input, setInput] = useState("")

  return (
    <main className={styles.productsContainer}>
      <section>
        <ProductsSearch/>
      </section>
      <section style={styles.productsFound}>
        <p>6 products found</p>
      </section>
      <section className={styles.productsList}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </main>
  )
}

export default Products
