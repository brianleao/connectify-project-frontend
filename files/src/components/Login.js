import React, { useState } from "react"
import {IoMailOutline} from "react-icons/io5";
import {IoLockClosedOutline} from 'react-icons/io5'
import {IoEyeOffOutline} from 'react-icons/io5'
import {IoEyeOutline} from 'react-icons/io5'
import styles from './Login.module.css'
import Logo from './Logo'
import {Link} from 'react-router-dom'

function Login() {
    const [inputType, setInputType] = useState('password')

    function alterar() {
        if (inputType === 'password') {
            setInputType('text')
        } else {
            setInputType('password')
        }
    }

    return (
        
        <div className={styles.div_main}>
            
            <div className={styles.div_aside}>
                <Logo/>
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
                        <input type={inputType} placeholder="Digite sua senha" id="botao_senha" className={styles.passwd}/>
                        {inputType === 'password' ? (
                            <IoEyeOffOutline onClick={alterar} className={styles.icons_form}/>
                        ) : (
                            <IoEyeOutline onClick={alterar} className={styles.icons_form} />
                        )}
                 </div>

                <a href="#" className={styles.esqsen}>Esqueceu a senha?</a>
                {/* <input type="submit" className={styles.botao} value="Entrar"/> */}
                <Link to="/mainpage" className={styles.botao}>Entrar</Link>

                <span className={styles.not_sign}>Não possui conta? <br/> <a href="#">Clique aqui</a> e cadastre-se agora mesmo!</span>
            </form>

        </div>
    )
}

export default Login