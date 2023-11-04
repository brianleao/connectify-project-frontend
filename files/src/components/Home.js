import React from "react"
import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles.main_home}>
            <div className={styles.background_image}></div>
            <p className={styles.description}>Ouça, avalie e compartilhe suas músicas e playlists favoritas de qualquer dispositivo.</p>
        </div>
    )
}

export default Home