import styles from './styles.module.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../actions/authActions";
import { getStore, getUser } from "../../actions/userActions";
import Navbar from '../../components/Navbar/Navbar';
import sneaker from './sneakers.png';
import StoreInfoPanel from '../../components/StoreInfoPanel/StoreInfoPanel';
import CreadStoreForm from '../../components/CreadStoreForm/CreadStoreForm';



let tokenParse = [];
let tokenReady = false
const MemberPages = ()=>{
    const { token } = useSelector((state)=>state.authReducer)
    const { user, store, isLoading } = useSelector((state)=>state.userReducer)

    const dispatch = useDispatch();
    const [showForm,setShowForm] = useState(false);
    const [storeCreated,setStoreCreated] = useState(false);

    const onClick=()=>{
        dispatch(logout());
        window.location.replace('/')
    }

    useEffect(()=>{
        if(token !== null && token !== 'undefined'){
            tokenParse = JSON.parse(token);
            tokenReady = (token !== null && token !== 'undefined')
            dispatch(getUser(tokenParse?.id));
            dispatch(getStore(tokenParse?.id));
        }

        if(!isLoading){
            if(store?.length !== 0){
                setStoreCreated(true);
            }
        }

    },[token])

    return (
       <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.userHeader}>
                <h1 className={styles.userWelcome}>Hi {user?.username}</h1>
                <div className={styles.userWelcomeImgWrapper}>
                    <img src={sneaker} alt='' />
                </div>
                </div>
                <div className={styles.infoContainer}>
                    <ul className={styles.userInfoWrapper}>
                        <div>
                        <li style={{marginBottom: '2rem'}}>Username : {isLoading?'Loading . . .':user?.username}</li>
                        <li>Email : {isLoading?'Loading . . .':user?.email}</li>
                        </div>
                        <div>
                        <li style={{marginBottom: '2rem'}}>Phone : {isLoading?'Loading . . .':user?.phone}</li>
                        <li>Address : {isLoading?'Loading . . .':user?.address}</li>
                        </div>
                    </ul>
                </div>
            </div>
            <div className={styles.logoutButtonWrapper}>
                <br />
                <br />
                <br />
                <button className={styles.logoutButton} onClick={onClick}>Logout</button>
            </div>
       </>
    )
}

export default MemberPages;