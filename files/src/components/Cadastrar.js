import React from "react"
import styles from "./Cadastrar.module.css"
import logo_connectify from '../layout/images/logo_connectify.png'
import {IoMailOutline} from 'react-icons/io5'
import {IoLockClosedOutline} from 'react-icons/io5'

function Cadastrar() {
    return (
        <div className={styles.cadastrar_main}>

            <nav className={styles.nav_bar}>
                <img src={logo_connectify} className={styles.logo_style}/>
                <input type="button" value="Entrar" className={styles.button_enter}/>
            </nav>

            <form className={styles.container_cadastrar}>
                <label>Nome Completo</label>
                <input type="text" id="nome" className={styles.input_custom}/>

                <label>Usuário</label>
                <input type="text" id="user" className={styles.input_custom}/>
                
                <label>E-mail</label>
                <div className={styles.container_icon}>
                <IoMailOutline className={styles.icons}/>
                <input type="email" className={styles.input_custom}/>
                </div>

                <label>Senha</label>
                <div className={styles.container_icon}>
                <IoLockClosedOutline className={styles.icons}/>
                <input type="password" className={styles.input_custom}/>
                </div>

                <label>Confirmar Senha</label>
                <div className={styles.container_icon}>
                <IoLockClosedOutline className={styles.icons}/>
                <input type="password" className={styles.input_custom}/>
                </div>

                <input type="submit" value="Cadastrar" className={styles.button_cadastrar}/>
            </form>
        
        </div>
    )
}

export default Cadastrar