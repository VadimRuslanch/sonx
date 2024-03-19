'use client'

import styles from './photoSlider.module.sass'

import Slider from "react-slick";
import img from '@/assets/images/photoGallery/photo1.jpg'
import Image from "next/image";
import {photoGallery} from '@/components/utils/constants'

function photoSlideComponent() {
    const settings = {
        adaptiveHeight: true,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500
    };

    return (
        <div className={styles.sliderContainer}>

            <Slider {...settings} className={styles.sliderWr}>

                {photoGallery.map((imgSrc, index) => (
                    <div className={styles.slide} key={index}>
                        <Image
                            className={styles.slideImg}
                            src={imgSrc}
                            alt={`Фото`}
                            width={280}
                            height={250}
                            layout="responsive"
                        />
                    </div>
                ))}

                {/*<div className={styles.slide}>*/}
                {/*    <Image className={styles.slideImg} src={img} alt={'Photo'}/>*/}
                {/*</div>*/}

                {/*<div className={styles.slide}>*/}
                {/*    <Image className={styles.slideImg} src={img} alt={'Photo'}/>*/}
                {/*</div>*/}

                {/*<div className={styles.slide}>*/}
                {/*    <Image className={styles.slideImg} src={img} alt={'Photo'}/>*/}
                {/*</div>*/}

                {/*<div className={styles.slide}>*/}
                {/*    <Image className={styles.slideImg} src={img} alt={'Photo'}/>*/}
                {/*</div>*/}

                {/*<div className={styles.slide}>*/}
                {/*    <Image className={styles.slideImg} src={img} alt={'Photo'}/>*/}
                {/*</div>*/}

            </Slider>

        </div>
    )
}

export default photoSlideComponent