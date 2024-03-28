import styles from './intro.module.sass'
import Image from "next/image";

function Intro(): JSX.Element {
    return (
        <section className={styles.intro}>
            <Image src='/intro-photo.jpg'
                   alt={'photo'}
                   className={styles.image}
                   fill={true}
                   quality={90}
            />

            <a target='_blank' href='https://vk.com/daneeldox?from=search'
               className={`${styles.link} ${styles.link1}`}>Даниил Дохов</a>

            <a target='_blank' href='https://vk.com/iamglebpetrov'
               className={`${styles.link} ${styles.link2}`}>Глеб Петров</a>

            <a target='_blank' href='https://vk.com/kustan?from=search'
               className={`${styles.link} ${styles.link3}`}>Костя Кустан</a>

        </section>
    )
}

export default Intro