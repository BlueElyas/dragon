import React, { useState, useEffect } from "react"
import styles from "./Products.module.css"
import ProductCard from "./ProductCard/ProductCard"
import ProductsSearch from "./ProductsSearch/ProductsSearch"
import { fetchExperiences } from "./productsSlice"
import { useDispatch, useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDragon } from "@fortawesome/free-solid-svg-icons"
import { setExperiences } from "./productsSlice"

function Products() {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.dragonStore.dragonExperiences)
  const isLoading = useSelector((state) => state.dragonStore.isLoading)
  const hasError = useSelector((state) => state.dragonStore.hasError)
  console.log(isLoading)
  console.log(hasError)
  console.log(selector)

  useEffect(() => {
    dispatch(fetchExperiences())
  }, [dispatch])
  console.log(selector)
  if (isLoading) {
    return <FontAwesomeIcon icon={faDragon} className="fa-2xl" />
  }

  if (hasError) {
    return (
      <>
        <div>
          <h4>No Arkenstone for you.</h4>
          <p>Ask a new question, fool.</p>
          <img
            src="assets/dragon-napoleon-dynamite-instructor.png"
            alt=""
            style={{ width: "100px" }}
          />
        </div>
      </>
    )
  }

  return (
    <main className={styles.productsContainer}>
      <section>
        <ProductsSearch />
      </section>
      <section style={styles.productsFound}>
        <p>6 products found</p>
      </section>
      <section className={styles.productsList}>
        {selector.map((experience) => {
          return (
            <ProductCard
              key={experience.id}
              title={experience.title}
              desc={experience.description}
              rating={experience.title}
              price={experience.price}
              image={experience.image}
            />
          )
        })}
      </section>
    </main>
  )
}

export default Products
