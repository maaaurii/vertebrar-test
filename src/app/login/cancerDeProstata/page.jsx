'use client'

import { useState } from 'react';
import styles from '../cancerDeMama/cancerDeMama.module.css';


export default function CancerDeProstata() {
    const [activeTab, setActiveTab] = useState('home-tab-pane');

    return (
        <main className={styles.main}>
                <div className={styles.tabs}>
                    <button className={`${styles.tabButton} ${activeTab === 'home-tab-pane' ? styles.active : ''}`} onClick={() => handleTabClick('home-tab-pane')}>Gleason</button>
                </div>
                <div className={`${styles.tabContent} ${activeTab === 'home-tab-pane' ? styles.active : ''}`} id="home-tab-pane">
                    <h2>Coming soon...</h2>
                </div>
            </main> 
    );
}