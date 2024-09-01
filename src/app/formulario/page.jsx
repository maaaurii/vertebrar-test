'use client'

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './formulario.module.css';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Formulario() {
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Use setTimeout to delay the alert
        const timer = setTimeout(() => {
            alert('Usuario: candidate, Password: 123456');
        }, 100); // 500 milliseconds delay to ensure the page is loaded

        // Clean up the timer on component unmount
        return () => clearTimeout(timer);
    }, []);


    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        if (username === 'candidate' && password === '123456') {
            window.location.href = '/login/cancerDeMama'; // Redirige al usuario
        } else {
            setErrorMessage('Usuario o contraseña incorrectos.');
        }
    };

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.h2}>Login</h2>
            <form id="login-form" className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor="username">Username:</label>
                <input className={styles.input} type="text" id="username" name="username" required />

                <div className={styles.passwordWrapper}>
                    <label className={styles.label} htmlFor="password">Password:</label>
                    <button
                        className={styles.passwordWrapperbutton}
                        type="button"
                        onClick={handlePasswordToggle}
                    >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className={styles.icon} />
                    </button>
                </div>
                <input
                    className={styles.input}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    required
                />

                <button className={styles.button} type="submit">Login</button>

                {errorMessage && <p style={{ color: 'red', marginTop: '2rem', marginBottom: '0', marginLeft:'4rem' }}>{errorMessage}</p>}
            </form>
        </div>
    );
}
