import styles from "./ProductCard.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faStar as faRegular } from "@fortawesome/free-regular-svg-icons"


function ProductCard({ image, title, desc, stars, price }) {
  function setRatingCompiler(stars) {
    const emptyStars = 5 - stars
    const starsArray = []
        for(let i=0; i<stars;i++){
          starsArray.push(<FontAwesomeIcon icon={faStar}/>)
        }
        for(let i=0; i<emptyStars;i++){
          starsArray.push(<FontAwesomeIcon icon={faRegular}/>)
        }
        return starsArray.map((star)=> star)
        }
  
  return (
    <article className={styles.card}>
      <img src={image} alt="" className={styles.img} />
      <div className={styles.cardBody}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <p className={styles.stars}>{setRatingCompiler(stars)}</p>
      <p className={styles.price}>£{price}</p>
      </div>
    </article>
  )
}

export default ProductCard
