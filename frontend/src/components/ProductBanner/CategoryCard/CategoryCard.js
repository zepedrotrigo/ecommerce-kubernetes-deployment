
import styles from './styles.module.css'

const CategoryCard = ({category,photo,link})=>{

    return (
        <div className={styles.container}>
            <div className={styles.product_image_wrapper}>
         <img src={photo} alt={photo}/>
         </div>
        <div className={styles.product_info}>
            <p className={styles.product_name}>Nike Air Max 1</p>
            <p className={styles.product_price}>120€</p>
        </div>
        </div>
    )
}

export default CategoryCard;