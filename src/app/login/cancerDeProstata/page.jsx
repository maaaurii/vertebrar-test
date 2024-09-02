'use client'

import styles from '../cancerDeMama/cancerDeMama.module.css';

export default function CancerDeProstata() {
    return (
        <main className={styles.main}>
            <div className={styles.tabs}>
                <button 
                    className={`${styles.tabButton} ${styles.active}`} 
                >
                    Gleason
                </button>
            </div>
            <div 
                className={`${styles.tabContent} ${styles.active}`} 
                id="home-tab-pane"
            >
                <h2>Coming soon...</h2>
            </div>
        </main> 
    );
}
