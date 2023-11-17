import React from "react"
import styles from './Home.module.css'
import {Link} from 'react-router-dom'
import LogoBalv from '../layout/images/Logo BALV.png'
import LogoConnectify from '../layout/images/logo_connectify.png'

function Home() {
    return (
        <div className={styles.cont_main}>
            <ul className={styles.list}>
                <li className={styles.container_logo}>
                    <img src={LogoConnectify} className={styles.logo_connectify}/>
                </li> 
                <li className={styles.buttons}>
                    <Link to="/cadastrar" className={styles.custom_button}>Cadastrar-se</Link>
                    <Link to="/login" className={styles.custom_button}>Entrar</Link>
                </li>
            </ul>

            <div className={styles.main_home}>
                <div className={styles.background_image}></div>
                <p className={styles.description}>Ouça, avalie e compartilhe suas músicas e playlists favoritas de qualquer dispositivo.</p>
            </div>
            
            <footer className={styles.footer_d}>
            <img src={LogoBalv} alt="Logo BALV!" className={styles.footer_img}/>
            BALV Soluções de Software © • 2023
            </footer>

        </div>
    )
}

export default Home