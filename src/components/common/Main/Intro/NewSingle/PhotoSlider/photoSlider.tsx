'use client'

import styles from './photoSlider.module.sass'

import Slider from "react-slick";

function photoSlideComponent() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div className={styles.sliderContainer}>
            <Slider {...settings}>
                <div className={styles.slide}>

                </div>
                <div className={styles.slide}>

                </div>
                <div className={styles.slide}>

                </div>
                <div className={styles.slide}>

                </div>
                <div className={styles.slide}>

                </div>
                <div className={styles.slide}>

                </div>
            </Slider>
        </div>
    )
}

export default photoSlideComponent