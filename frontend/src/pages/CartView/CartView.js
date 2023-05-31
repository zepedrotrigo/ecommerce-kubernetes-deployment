import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { deleteFromCart, deleteItemFromCart, getItemsCart, buyNow } from "../../actions/cartActions"
import Navbar from "../../components/Navbar/Navbar"
import styles from './styles.module.css'


let tokenParse = []
const CartView = ()=>{
    const location = useLocation()
    const { cartId } = location.state
    const {cartItem, cart} = useSelector((state)=>state.cartReducer)
    const {token} = useSelector((state)=>state.authReducer)
    const dispatch = useDispatch();

    const deleteItem = (id)=>{
        dispatch(deleteFromCart(tokenParse?.id,cart?.quantity));
        dispatch(deleteItemFromCart(id))
        window.location.replace('/cartView')
    }

    useEffect(()=>{
        if(token !== null && token !== 'undefined'){
            tokenParse = JSON.parse(token);
            dispatch(getItemsCart(cartId))
        }
    },[dispatch,token,cartId])

    const buyCart = ()=>{
        let bol = true;
        cartItem.map((e,i)=>{
            if (e.quantity > e.product_details.stock) {
                alert("Invalid quantity for product - " + e.product_details.title);
                bol = false;
            }
        });
        if (bol){
            dispatch(buyNow(cartId));
            window.location.replace('/cartView');
        }
    } 

    const getTotal = ()=>{
        let total = 0;
        cartItem.map((e,i)=>{
            total = total + (e.product_details.price * e.quantity);
        });
        return total;
    }

    const loadCart = ()=>{
        let results = [];
        cartItem.map((e,i)=>{
            results.push(<div key={i} className={styles.cartProduct}>
                <h1>{i+1}. </h1>
                <img src={`${process.env.REACT_APP_API_URL}api/images/${e.product_details.id}/`} alt={e.product_details.title} />
                <div>
                    <h2>{e.product_details?.title}</h2>
                    <h3>${e.product_details.price}</h3>
                    <h5>X{e.quantity}</h5>
                    <button onClick={()=>{deleteItem(e.id)}}>Delete</button>
                </div>
            </div>);
        });
        return results;
    }

    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <h1>Your Cart Items</h1>
                {loadCart()}
            </div>
            {cartItem.length === 0 ? <h2>Cart is Empty</h2> : <><h1>Total Price : ${getTotal()}</h1><div className={styles.button} onClick={buyCart}>
                Buy Now
            </div></>}
        </div>
    )
}

export default CartView;