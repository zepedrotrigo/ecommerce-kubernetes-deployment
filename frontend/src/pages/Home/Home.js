import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import ProductBanner from "../../components/ProductBanner/ProductBanner";
import Footer from "../../components/Footer/Footer";


const Home = ()=>{
    return (
        <div>
            <Navbar />
            <Banner />
            <ProductBanner />
            <Footer />
        </div>
    )
}

export default Home;