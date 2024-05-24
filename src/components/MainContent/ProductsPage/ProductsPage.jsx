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
        <section>
          <ProductsSearch input={input} setInput={setInput} />
        </section>
        <section style={styles.productsFound}>
          <p>Finding the perfect products for you...</p>
        </section>
        <div className={styles.loading}>
          <FontAwesomeIcon icon={faDragon} className="fa-2xl" />
          <p>Loading...</p>
        </div>
      </>
    )
  }

  if (hasError) {
    return (
      <>
        <section>
          <ProductsSearch input={input} setInput={setInput} />
        </section>
        <section style={styles.productsFound}>
          <p>Who ate all the products?</p>
        </section>
        <div>
          <h4>You broke it...</h4>
          <p>I hope you're ready for a can of whoop ass.</p>
          <img
            src="assets/dragon-napoleon-dynamite-instructor.png"
            alt="Cool looking martial arts instructor, looking menacingly over his shoulder."
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
