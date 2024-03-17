import styles from './contactAbout.module.sass';

function ContactAbout() {
    return (
        <div className={styles.about}>
            <h3 className={styles.title}>Связаться с нами</h3>
            <div className={styles.info}>
                <h5 className={styles.heading}>Моя инфорамция заголовок</h5>
                <p className={styles.text}>Моя информация информации</p>
            </div>
        </div>
    )
}

export default ContactAbout