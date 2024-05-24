import styles from "./ProductsSearch.module.css"
import { fetchSearchedProducts } from "../productsSlice"
import { useDispatch } from "react-redux"
import { setQuery } from "../productsSlice"

function ProductsSearch({ input, setInput }) {
  const dispatch = useDispatch()
  // Update input to controlled via state, prop passed down from products page
  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const queryParams = input.toLowerCase().trim().split(" ").join("+")

    dispatch(setQuery(queryParams))
    dispatch(fetchSearchedProducts())
  }

  return (
    <>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Search products"
          onChange={handleChange}
          className={styles.input}
        />
        <button className="ButtonPurple">Click me!</button>
      </form>
    </>
  )
}

export default ProductsSearch
