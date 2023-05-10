
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Rating } from 'react-simple-star-rating';
import { addItemToCart, addToCart, getCart } from '../../actions/cartActions';
import styles from './styles.module.css'

let tokenParse = []

const BuyingBox = ({productId,stock})=>{
    const {cart,loadingCartItem, loadingCart } = useSelector((state)=>state.cartReducer)
    const {token} = useSelector((state)=>state.authReducer)
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(token !== null && token !== 'undefined'){
            tokenParse = JSON.parse(token);
            dispatch(getCart(tokenParse?.id))
        }
    },[dispatch,token])

    const addCart = (cartData,productId,quantity)=>{
        //dispatch(addToCart(tokenParse?.id,quantity));
        dispatch(addItemToCart(cartData?.id,productId,quantity));
    }

    return (
        <div className={styles.container}>
            {stock === 0 ? <h2>OUT OF STOCK</h2> : 
            <>
            <div className={styles.qty}>
                <div>
                    <span>Stock : {stock}</span>
                </div>
                <span>Qty : </span>
                <input type="number" name="qty" max={stock} min={1} onChange={(e) => setQuantity(e.target.value)}/>
            </div>
            {loadingCartItem?<div>loading . . .</div>:<div onClick={()=>{addCart(cart,productId,quantity)}} className={styles.button}>Add to Cart</div>}
            </>}
        </div>
    )
}

export default BuyingBox;