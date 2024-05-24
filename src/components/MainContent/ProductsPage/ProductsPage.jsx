import { useState, useEffect } from "react"
import styles from "./ProductsPage.module.css"
import ProductCard from "./ProductCard/ProductCard"
import ProductsSearch from "./ProductsSearch/ProductsSearch"
import { fetchExperiences } from "./productsSlice"
import { useDispatch, useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDragon } from "@fortawesome/free-solid-svg-icons"

function Products() {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()
  const selector = useSelector((state) => state.dragonStore.dragonExperiences)
  const isLoading = useSelector((state) => state.dragonStore.isLoading)
  const hasError = useSelector((state) => state.dragonStore.hasError)

  useEffect(() => {
    dispatch(fetchExperiences())
  }, [dispatch])
  if (isLoading) {
    return (
      <>
        <FontAwesomeIcon icon={faDragon} className="fa-2xl" />
        <p>Loading...</p>
      </>
    )
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

  const sOrNoS = selector.length === 1 ? "" : "s"

  return (
    <main className={styles.productsContainer}>
      <section>
        <ProductsSearch input={input} setInput={setInput} />
      </section>
      <section style={styles.productsFound}>
        <p>
          {selector.length} product{sOrNoS} found
        </p>
      </section>
      <section className={styles.productsList}>
        {selector.map((experience) => {
          return (
            <ProductCard
              key={experience.id}
              title={experience.title}
              desc={experience.description}
              stars={experience.stars}
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
