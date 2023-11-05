import React from "react"
import styles from './Home.module.css'
import Navigation from '../layout/Navigation'
import Footer from '../layout/Footer';

function Home() {
    return (
        <div>
            <Navigation/>
            <div className={styles.main_home}>
            <div className={styles.background_image}></div>
            <p className={styles.description}>Ouça, avalie e compartilhe suas músicas e playlists favoritas de qualquer dispositivo.</p>
            </div>
            <Footer/>
        </div>
    )
}

export default Home