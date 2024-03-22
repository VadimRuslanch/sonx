'use client'
import styles from './contactSubmit.module.sass';
import {useState} from 'react';

function ContactSubmit() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();


        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, message}),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Message sent:', data);
        } else {
            console.error('Send error:', data.error);
        }
    };

    return (
        <section className={styles.submit}>
            <form className={styles.form}>
                <label className={styles.inputContainer}>
                    <span className={styles.inputLabel}>Имя</span>
                    <input className={styles.input}
                           value={name}
                           onChange={(e) => setName(e.target.value)}/>
                </label>

                <label className={styles.inputContainer}>
                    <span className={styles.inputLabel}>Email</span>
                    <input className={styles.input}
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                </label>

                <label className={styles.inputContainer}>
                    <span className={styles.inputLabel}>Your message</span>
                    <textarea className={styles.input}
                              spellCheck={true}
                              rows={6}
                              autoComplete="off"
                              value={message} onChange={(e) => setMessage(e.target.value)}/>
                </label>

                <div className={styles.buttonContainer}>
                    <button className={styles.button}
                            type="submit"
                            onClick={handleSubmit}>
                        <span className={styles.buttonText}>
                            Отправить
                        </span>
                    </button>
                </div>
            </form>
        </section>
    )
}

export default ContactSubmit