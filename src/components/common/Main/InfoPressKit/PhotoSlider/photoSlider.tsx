'use client'

import styles from './photoSlider.module.sass'

import Slider from "react-slick";
import img from '@/assets/images/photoGallery/photo1.jpg'
import Image from "next/image";
import {photoGallery} from '@/components/utils/constants'

function photoSlideComponent() {
    const settings = {
        variableWidth: true,
        slidesToShow: 3, // Значение по умолчанию для широких экранов
        slidesToScroll: 2,
        speed: 500,
        responsive: [
            {
                breakpoint: 768, // Максимальная ширина для этого диапазона настроек
                settings: {
                    slidesToShow: 1, // Отображать только один слайд
                    slidesToScroll: 1, // Прокручивать по одному слайду
                    variableWidth: false // Вы можете отключить это, если хотите, чтобы слайды были одинаковой ширины
                }
            },
            {
                breakpoint: 320, // Этот breakpoint и ниже будет использовать настройки указанные для 768, если нет более специфичных настроек
                settings: {
                    slidesToShow: 1, // Это не обязательно, если вы хотите те же настройки, что и для 768px
                    slidesToScroll: 1, // Аналогично
                    variableWidth: false // Аналогично
                }
            }
        ]
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

            </Slider>

        </div>
    )
}

export default photoSlideComponent