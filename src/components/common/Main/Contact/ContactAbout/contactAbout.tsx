import styles from './contactAbout.module.sass';

function ContactAbout() {
    return (
        <div className={styles.about}>
            <div className={styles.aboutContainer}>
                <h3 className={styles.title}>Связаться с нами</h3>
                <div className={styles.info}>
                    <h5 className={styles.heading}>Вы можете связаться с нами написав на эту почту</h5>
                    <a target='_blank' href='mailto:sonxtrio@yandex.ru' className={styles.text}>sonxtrio@yandex.ru</a>
                </div>
            </div>
        </div>
    )
}

export default ContactAbout