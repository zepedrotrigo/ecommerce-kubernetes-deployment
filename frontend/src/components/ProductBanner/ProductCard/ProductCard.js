
import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {

    return (
        <Link
            to={'/detail_product'}
            style={{ textDecoration: 'none' }}
            state={{ item: item }}
        >
            <div className={styles.container}>
                <div className={styles.product_card}>
                    <img src={`${process.env.REACT_APP_API_URL}api/images/${item.id}/`} alt="big-img" />
                    <div>
                        <h5>{item.title?.length > 20 ? item.title?.substring(0, 20) + '. . .' : item.title}</h5>
                        <p>{item.description?.length > 40 ? item.description?.substring(0, 40) + '. . .' : item.description}</p>
                        <h5>${item.price}</h5>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;