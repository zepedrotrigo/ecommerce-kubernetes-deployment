import { useLocation } from "react-router-dom";
import BuyingBox from "../../components/BuyingBox/BuyingBox";
import DescriptionBoxProduct from "../../components/DescriptionBoxProduct/DescriptionBoxProduct";
import Navbar from "../../components/Navbar/Navbar";
import PhotoboxProduct from "../../components/PhotoboxProduct/PhotoboxProduct";

const DetailProduct = ()=>{
    const location = useLocation()
    const { item } = location.state

    return (
        <div>
            <Navbar />
            <div style={{display:'flex'}}>
                <PhotoboxProduct id={item?.id} thumbnail={item?.thumbnail}/>
                <DescriptionBoxProduct item={item} />
                <BuyingBox productId={item?.id} stock={item?.stock} />
            </div>
        </div>
    )
}

export default DetailProduct;