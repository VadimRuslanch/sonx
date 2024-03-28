import styles from './infoPressKit.module.sass'
import PhotoSlideComponent from "@/components/Main/InfoPressKit/PhotoSlider/photoSlider";
import Image from "next/image";
import Link from "next/link";

import VideoSlider from "@/components/Main/InfoPressKit/VideoSlider/videoSlider";

import arrowLink from '@/../../../../public/images/arrow-link.svg'

function InfoPressKitComponent() {

    return (
        <section className={styles.infoPressContainer}>

            <div className={styles.titleContainer}>
                <h2 className={styles.title}>SONX</h2>
            </div>


            <div className={styles.infoContainer}>
                <h3 className={styles.titleBlock}>О&nbsp;нас</h3>
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
                <p className={styles.aboutBlock}>Завтра добавлю фото</p>

                {/*<PhotoSlideComponent/>*/}
            </div>

            <div>
                <h3 className={styles.titleBlock}>Видео</h3>
                <VideoSlider/>
            </div>


            <div className={styles.infoContainer}>
                <h3 className={styles.eventTitle}>Ближайшие концерты</h3>
                <div className={styles.eventList}>

                    <div className={styles.eventItem}>
                        <h4 className={styles.eventArea}>Tangiers Lounge</h4>
                        <span className={styles.eventText}>
                            12 апреля 2024 г.
                        </span>
                        <span className={styles.eventText}>
                            г. Ростов-на-Дону, ул. Пушкинская, дом 116
                        </span>

                        {/*<p className={styles.eventDescription}>Мое описание</p>*/}
                        {/*<Link className={styles.eventLink} href='/'>*/}
                        {/*    <span className={styles.eventLinkText}>Узнать подробнее</span>*/}
                        {/*    <Image className={styles.eventlinkImg} src={arrowLink} alt={'стрелочка'}/>*/}
                        {/*</Link>*/}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default InfoPressKitComponent