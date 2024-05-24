import styles from "./SiteFooter.module.css"

function SiteFooter() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerLeft}>
        <span className={styles.footerSmallScreen}>T&C's</span>
        <span className={styles.footerWideScreen}>Terms & Conditions</span>
        <span>Cookies</span>
      </div>
      <div className={styles.footerRight}>
        <span>
          {" "}
          &#169; 2024 <em>Year of the Dagron</em>
        </span>
      </div>
    </div>
  )
}

export default SiteFooter
