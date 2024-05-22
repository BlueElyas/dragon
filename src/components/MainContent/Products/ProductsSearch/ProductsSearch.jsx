import styles from "./ProductsSearch.module.css"

function ProductsSearch({ input, setInput }) {
  // Update input to controlled via state, prop passed down from products page
  function handleChange(e) {
    setInput(e.target.value)
  }
  return (
    <>
      <div className={styles.wrapper}>
        <input
          value={input}
          placeholder="Search products"
          onChange={handleChange}
          className={styles.input}
        />
      </div>
    </>
  )
}

export default ProductsSearch
