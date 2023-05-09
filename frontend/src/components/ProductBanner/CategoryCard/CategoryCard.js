
import styles from './styles.module.css'

const CategoryCard = ({price,title,photo,link})=>{

    return (
        <div className={styles.container}>
            <div className={styles.product_image_wrapper}>
         <img src={`${process.env.REACT_APP_API_URL}api/images/${link}/`} alt={title} />
         </div>
        <div className={styles.product_info}>
            <p className={styles.product_name}>{title}</p>
            <p className={styles.product_price}>{price}$</p>
        </div>
        </div>
    )
}

export default CategoryCard;