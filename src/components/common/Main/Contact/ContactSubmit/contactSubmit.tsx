'use client'

import styles from './contactSubmit.module.sass';

import { useState } from 'react';

function ContactSubmit() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Обработчик отправки формы
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Отправляем данные формы на API-маршрут
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        const data = await response.json();
        if (response.ok) {
            // Обрабатываем успешную отправку
            console.log('Message sent:', data);
        } else {
            // Обрабатываем ошибку
            console.error('Send error:', data.error);
        }
    };

    return (
        <section  className={styles.submit}>
            <form className={styles.form}>
                <label className={styles.inputContainer}>
                    <span className={styles.inputLabel}>Имя</span>
                    <input className={styles.input} value={name} onChange={(e) => setName(e.target.value)}/>
                </label>

                <label className={styles.inputContainer}>
                    <span className={styles.inputLabel}>Email</span>
                    <input className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>

                <label className={styles.inputContainer}>
                    <span className={styles.inputLabel}>Your message</span>
                    <textarea className={styles.input} value={message} onChange={(e) => setMessage(e.target.value)}/>
                </label>

                <button type="submit">Отправить</button>
            </form>
        </section>
    )
}

export default ContactSubmit