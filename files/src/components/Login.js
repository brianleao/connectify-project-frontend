import React, { useState } from "react"
import {IoMailOutline} from "react-icons/io5";
import {IoLockClosedOutline} from 'react-icons/io5'
import {IoEyeOffOutline} from 'react-icons/io5'
import {IoEyeOutline} from 'react-icons/io5'
import styles from './Login.module.css'
import Logo from './Logo'
import {Link} from 'react-router-dom'
import request from "../services/services";
import axios from "axios";

function Login() {
    const [inputType, setInputType] = useState('password')
    const [userEMail, setEmail] = useState()
    const [passwordUser, setPasswordUser] = useState()

    function alterar() {
        if (inputType === 'password') {
            setInputType('text')
        } else {
            setInputType('password')
        }
    }

    async function enterApp(event) {
            event.preventDefault();
            const params = {
                email: userEMail,
                senha: passwordUser,
            };
            console.log(params);
            try {
                const response = await request.login(params);
                // COLOCAR VALIDACAO DE DADOS RETORNADOS
                if(response.data[0].email === userEMail) {
                    window.location.href="/mainpage"
                }

            } catch (error) {
                console.log(error);
                alert("ERRO: Dados incorretos ou usuário não está cadastrado.");
            }
    }


    return (
        
        <div className={styles.div_main}>
            
            <div className={styles.div_aside}>
                <Logo/>
                <span className={styles.div_aside_span}>Suas músicas, seus artistas, suas playlists e suas avaliações tudo em um só lugar!</span>
            </div>

            <form onSubmit={enterApp} className={styles.container_main}>
                <h1 className={styles.tittle}>Entrar no Connectify</h1>

                <label>E-mail</label>
                <div className={styles.mail}>
                    <IoMailOutline className={styles.icons_form}/>
                    <input type="email" className={styles.email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail"/>
                </div>

                <label>Senha</label>
                <div className={styles.password}>
                        <IoLockClosedOutline className={styles.icons_form}/>
                        <input type={inputType} placeholder="Digite sua senha" id="botao_senha" onChange={(e) => setPasswordUser(e.target.value)} className={styles.passwd}/>
                        {inputType === 'password' ? (
                            <IoEyeOffOutline onClick={alterar} className={styles.icons_form}/>
                        ) : (
                            <IoEyeOutline onClick={alterar} className={styles.icons_form} />
                        )}
                 </div>

                <a href="#" className={styles.esqsen}>Esqueceu a senha?</a>

                <input type="submit" className={styles.botao} value="Entrar"/>
                
                <span className={styles.not_sign}>Não possui conta? <br/> <a href="./cadastrar">Clique aqui</a> e cadastre-se agora mesmo!</span>
            </form>
        </div>
    )
}

export default Login