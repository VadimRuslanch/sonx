import styles from './eventCard.module.sass'
import Link from "next/link";
import Image from "next/image";
import photo_1 from '@/../../../../../public/images/photo-1.png'

function EventCard(){
    return(
        <div className={styles.event}>
            <div className={styles.eventAbout}>
                <Image className={styles.img} src={photo_1} alt={'#'}/>
                <div className={styles.texts}>
                    <p className={styles.date}>Friday, October 13, 2023</p>
                </div>
            </div>
            <Link href={'#'}/>
        </div>
    )
}

export default EventCard