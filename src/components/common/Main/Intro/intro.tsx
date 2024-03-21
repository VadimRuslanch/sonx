import styles from './intro.module.sass'

function Intro(): JSX.Element {
    return (
        <div className={styles.intro}>

            <a target='_blank' href='https://vk.com/daneeldox?from=search'
               className={`${styles.link} ${styles.link1}`}>Даниил Дохов</a>

            <a target='_blank' href='https://vk.com/iamglebpetrov'
               className={`${styles.link} ${styles.link2}`}>Глеб Петров</a>

            <a target='_blank' href='https://vk.com/kustan?from=search'
               className={`${styles.link} ${styles.link3}`}>Костя Кустан</a>

        </div>
    )
}

export default Intro