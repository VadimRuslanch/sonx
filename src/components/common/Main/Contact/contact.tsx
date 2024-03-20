import styles from './contact.module.sass';
import ContactSubmit from "@/components/common/Main/Contact/ContactSubmit/contactSubmit";
import ContactAbout from "@/components/common/Main/Contact/ContactAbout/contactAbout";

function ContactComponent() {
    return (
        <section className={styles.contact}>

                <div className={styles.contactContainer}>
                    <ContactAbout/>
                    <ContactSubmit/>
                </div>

        </section>
    )
}

export default ContactComponent