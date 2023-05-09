import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'
import { getItems } from "../../actions/itemActions";
import { useEffect } from 'react';
import ProductCard from "./ProductCard/ProductCard";
import CategoryCard from './CategoryCard/CategoryCard';

const category = [
    {
        'id': 1,
        'photo' : 'https://m.media-amazon.com/images/I/614BVAAywBL._AC_UL1500_.jpg',
    },
    {
        'id': 2,
        'photo' : 'https://m.media-amazon.com/images/I/614BVAAywBL._AC_UL1500_.jpg',
    },
    {
        'id': 3,
        'photo' : 'https://m.media-amazon.com/images/I/614BVAAywBL._AC_UL1500_.jpg',
    },
    {
        'id': 4,
        'photo' : 'https://m.media-amazon.com/images/I/614BVAAywBL._AC_UL1500_.jpg',
    },
    {
        'id': 5,
        'photo' : 'https://m.media-amazon.com/images/I/614BVAAywBL._AC_UL1500_.jpg',
    },
    {
        'id': 6,
        'photo' : 'https://m.media-amazon.com/images/I/614BVAAywBL._AC_UL1500_.jpg',
    }
]



const ProductBanner = ()=>{

    const { items } = useSelector((state)=>state.itemReducer)

    const dispatch = useDispatch();

    useEffect(()=>{

        dispatch(getItems('api/product/'))

    },[dispatch])

    return (
        <div className={styles.container}>
            <div className={styles.new_product_container}>
                <h2>New Arrivals</h2>
                <div className={styles.category_product_container}>
                   <div className={styles.category_product}>
                   {items.slice(0,4).map((e,i)=>{
                        return(
                            <CategoryCard
                            key={i}
                            price={e.price}
                            title={e.title}
                            photo={e.thumbnail}
                            link={e.id}
                            />
                        )
                    })}
                   </div>
                </div>
            </div>
        </div>
    )
}

export default ProductBanner;