import styles from './infoPressKit.module.sass'

import EventCard from "@/components/common/Main/ElectronicPressKit/EventCard/eventCard";
import React, {useState} from "react";
import {photoGallery} from "@/components/utils/constants";
import PhotoSlideComponent from "@/components/common/Main/Intro/NewSingle/PhotoSlider/photoSlider";
import Image from "next/image";
import Link from "next/link";

import arrowLink from '@/assets/images/arrow-link.svg'

function ElectronicPressKitComponent() {

    return (
        <section className={styles.infoPressContainer}>

            <h2 className={styles.title}>SONX</h2>

            <div className={styles.infoContainer}>
                <h3 className={styles.titleBlock}>О нас</h3>
                <p className={styles.aboutBlock}>
                    Cover-trio SONX создаст в Вашем заведении романтичную и теплую атмосферу для гостей. Выступаем на
                    мероприятиях: корпоративах, праздниках, днях рождения, свадебных церемониях. Создаем негромкий фон
                    на бизнес встречах, конференциях, ресторанах, ТЦ. В концертной программе современный соул, R&B,
                    зарубежные кавер-версии хитов в стиле лаундж, а также танцевальные хиты.
                    <br/>
                    Ростов-на-Дону, рассматриваем также предложения с выездом за город.
                </p>
            </div>

            <div className={styles.infoContainer}>
                <h3 className={styles.titleBlock}>Фотогалерея</h3>
                <PhotoSlideComponent/>
            </div>

            <div className={styles.infoContainer}>
                <h3 className={styles.titleBlock}>Видео</h3>
                <div className={styles.slider}>
                    <div className={styles.sliderWr}>
                        <div className={styles.slide}></div>
                    </div>
                </div>
            </div>

            <div className={styles.infoContainer}>
                <h3 className={styles.titleBlock}>Ближайшие концерты</h3>
                <div className={styles.eventList}>

                    <div className={styles.eventItem}>
                        <h4 className={styles.eventTitle}>Tangiers Lounge</h4>
                        <span className={styles.eventDate}>
                            12 апреля 2024 г.
                            <br/>
                            г. Ростов-на-Дону, ул. Пушкинская, дом 116
                        </span>
                        <p className={styles.eventDescription}>Мое описание</p>
                        <Link className={styles.eventLink} href='/'>
                            <span className={styles.eventLinkText}>Узнать подробнее</span>
                            <Image className={styles.eventlinkImg} src={arrowLink} alt={'стрелочка'}/>
                        </Link>
                    </div>

                    <div className={styles.eventItem}>
                        <h4 className={styles.eventTitle}>Мой концерт</h4>
                        <span className={styles.eventDate}>Дата мероприятия</span>
                        <p className={styles.eventDescription}>Мое описание</p>
                        <Link className={styles.eventLink} href='/'>
                            <span className={styles.eventLinkText}>Узнать подробнее</span>
                            <Image className={styles.eventlinkImg} src={arrowLink} alt={'стрелочка'}/>
                        </Link>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default ElectronicPressKitComponent