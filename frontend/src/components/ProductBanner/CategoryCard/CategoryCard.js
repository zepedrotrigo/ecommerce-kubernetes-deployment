
import styles from './styles.module.css'
import { Link } from "react-router-dom";

const CategoryCard = ({ item })=>{

    return (
        <Link
            to={'/detail_product'}
            style={{ textDecoration: 'none' }}
            state={{ item: item }}
        >
            <div className={styles.container}>
                <div className={styles.product_image_wrapper}>
                <img src={`${process.env.REACT_APP_API_URL}api/images/${item.id}/`} alt={item.title} />
                </div>
                <div className={styles.product_info}>
                    <p className={styles.product_name}>{item.title}</p>
                    <p className={styles.product_price}>{item.price}$</p>
                </div>
            </div>
        </Link>
    )
}

export default CategoryCard;