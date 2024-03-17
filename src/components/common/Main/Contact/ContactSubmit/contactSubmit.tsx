import styles from './contactSubmit.module.sass';

function ContactSubmit() {
    return (
        <section className={styles.submit}>

            <label className={styles.inputContainer}>
                <span className={styles.inputLabel}>Имя</span>
                <input className={styles.input}/>
            </label>

            <label className={styles.inputContainer}>
                <span className={styles.inputLabel}>Email</span>
                <input className={styles.input}/>
            </label>

            <label className={styles.inputContainer}>
                <span className={styles.inputLabel}>Your message</span>
                <textarea className={styles.input}/>
            </label>

        </section>
    )
}

export default ContactSubmit