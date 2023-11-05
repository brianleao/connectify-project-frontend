import React from "react"
import Logo from '../layout/images/logo_connectify.png'
import {IoMailOutline} from "react-icons/io5";
import {IoLockClosedOutline} from 'react-icons/io5'
import {IoEyeOffOutline} from 'react-icons/io5'
import styles from './Login.module.css'

function Login() {
    return (
        
        <div className={styles.div_main}>
            
            <div className={styles.div_aside}>
                <img src={Logo}/>
                <span className={styles.div_aside_span}>Suas músicas, seus artistas, suas playlists e suas avaliações tudo em um só lugar!</span>
            </div>

            <div className={styles.container_main}>

                <h2>E-mail ou usuário</h2>
                <div className={styles.mail}>
                    <IoMailOutline className={styles.icons_form}/>
                    <input type="email" className={styles.email} placeholder="Digite seu e-mail ou usuário"/>
                </div>

                <h2>Senha</h2>
                <div className={styles.password}>
                        <IoLockClosedOutline className={styles.icons_form}/>
                        <input type="password" placeholder="Digite sua senha" className={styles.passwd}/>
                        <IoEyeOffOutline className={styles.icons_form}/>
                </div>

                <a href="#" className={styles.esqsen}>Esqueceu a senha?</a>
                <input type="button" className={styles.botao} value="Entrar"/>
                <span className={styles.not_sign}>Não possui conta? <br/> <a href="#">Clique aqui</a> e cadastre-se agora mesmo!</span>
            </div>

        </div>
    )
}

export default Login