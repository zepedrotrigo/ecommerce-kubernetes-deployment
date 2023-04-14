import styles from './styles.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import Typed from "react-typed";

const Banner = () => {
    SwiperCore.use([Autoplay]);

    return (
        <>
            <p className={styles.logoHeader}>
                <Typed
                    strings={[
                        "Sneak in style with Sneakr.",
                    ]}
                    typeSpeed={35}
                />
            </p>
            <div className={styles.container}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2000
                    }}
                >
                    <SwiperSlide>
                        <img src="sneaker1.jpg" alt="slide1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="sneaker2.jpg" alt="slide2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="sneakers7.jpg" alt="slide3" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Banner;