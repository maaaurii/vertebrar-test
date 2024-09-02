'use client'

import { useState, useEffect } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import styles from './formulario.module.css'; 
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 

export default function Formulario() {
    const [showPassword, setShowPassword] = useState(false); // Estado para manejar la visibilidad de la contraseña
    const [errorMessage, setErrorMessage] = useState(''); // Estado para almacenar el mensaje de error

    useEffect(() => {
        // Usamos setTimeout para retrasar la alerta
        const timer = setTimeout(() => {
            alert('Usuario: candidate, Password: 123456'); // Alerta con credenciales de ejemplo
        }, 100); 

        // Limpiamos el temporizador cuando el componente se desmonte
        return () => clearTimeout(timer);
    }, []); 

    // Función para alternar la visibilidad de la contraseña
    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario

        const username = event.target.username.value; // Obtiene el valor del campo de usuario
        const password = event.target.password.value; // Obtiene el valor del campo de contraseña

        // Verifica si el usuario y la contraseña son correctos
        if (username === 'candidate' && password === '123456') {
            window.location.href = '/login/cancerDeMama'; // Redirige al usuario a la página de cancerDeMama
        } else {
            setErrorMessage('Usuario o contraseña incorrectos.'); // Muestra un mensaje de error si las credenciales son incorrectas
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

                {errorMessage && <p className={styles.mensaje}>{errorMessage}</p>}
            </form>
        </div>
    );
}

