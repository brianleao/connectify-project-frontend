import React from "react"
import Logo from '../layout/images/logo_connectify.png'
import {IoMailOutline} from "react-icons/io5";
import {IoLockClosedOutline} from 'react-icons/io5'
import {IoEyeOffOutline} from 'react-icons/io5'
import {IoEyeOutline} from 'react-icons/io5'
import styles from './Login.module.css'

function Login() {

    function alterar() {
        let tipo = document.getElementById("botao_senha");
        
        // alert(`Fora do if ele está como ${tipo.type}`)
        
        if (tipo.type == "password") {
        tipo.type = "text"
        }

        else {
            tipo.type = "password"
        }
    }

    return (
        
        <div className={styles.div_main}>
            
            <div className={styles.div_aside}>
                <img src={Logo} className={styles.logo_c}/>
                <span className={styles.div_aside_span}>Suas músicas, seus artistas, suas playlists e suas avaliações tudo em um só lugar!</span>
            </div>

            <form className={styles.container_main}>
                <h1>Entrar</h1>

                <label>E-mail ou usuário</label>
                <div className={styles.mail}>
                    <IoMailOutline className={styles.icons_form}/>
                    <input type="email" className={styles.email} placeholder="Digite seu e-mail ou usuário"/>
                </div>

                <label>Senha</label>
                <div className={styles.password}>
                        <IoLockClosedOutline className={styles.icons_form}/>
                        <input type="password" placeholder="Digite sua senha" id="botao_senha" className={styles.passwd}/>
                        <IoEyeOffOutline className={styles.icons_form} onClick={alterar}/>
                </div>

                <a href="#" className={styles.esqsen}>Esqueceu a senha?</a>
                <input type="submit" className={styles.botao} value="Entrar"/>
                <span className={styles.not_sign}>Não possui conta? <br/> <a href="#">Clique aqui</a> e cadastre-se agora mesmo!</span>
            </form>

        </div>
    )
}

export default Login