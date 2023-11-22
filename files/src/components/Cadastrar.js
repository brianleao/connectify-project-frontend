import React from "react"
import styles from "./Cadastrar.module.css"
import logo_connectify from "../layout/images/logo_connectify.png"
import {IoMailOutline} from "react-icons/io5"
import {IoLockClosedOutline} from "react-icons/io5"
import { useState } from "react"
import Logo from './Logo'
import {Link} from 'react-router-dom'
import {IoPersonOutline} from "react-icons/io5"
import {IoPencilOutline} from "react-icons/io5"
import request from "../services/services";

function Cadastrar(props) {
    function cadastrarUsuario(e) {
        e.preventDefault()
        //posteriormente, esses dados de name, password, etc serão enviados para o back-end
        //o envio será feito pela rota
        
        if(password != confirmPassword) {
            alert("As senhas não conferem, digite novamente por gentileza.")
        }
        else if(!password || !confirmPassword){
            alert("Por favor, preencha o campo da senha")
        }

        else if(!name || !email || !password || !confirmPassword){
            alert("ERRO: Faltam campos a serem preenchidos!")
        }

        else {
            alert("Usuário cadastrado com sucesso!");
            window.location.href="/login"
        }
    }
    //name é o que eu vou ler e setName o que eu vou alterar no name
    //no método useState() eu posso setar um valor que se inicia quando o componente for inicializado
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    return (
        <div className={styles.cadastrar_main}>

            <nav className={styles.nav_bar}>
                <div className={styles.cointainerSecond}>
                    <Logo/>
                    <Link to="/login">
                        <input type="button" value="Entrar" className={styles.button_enter}/>
                    </Link>
                </div>
                
                <Link to="/" className={styles.cadastrarTittle}>
                <h1>Cadastrar</h1>
                </Link>
            </nav>

            <form onSubmit={cadastrarUsuario} className={styles.container_cadastrar}>
                <label htmlFor="name">Nome</label>

                <div className={styles.container_icon}>
                    <IoPencilOutline className={styles.icons}/>
                    <input type="text" id="nome" onChange={(e) => setName(e.target.value)} className={styles.input_custom}/>
                </div>
                
                <label htmlFor="email">E-mail</label>
                <div className={styles.container_icon}>
                    <IoMailOutline className={styles.icons}/>
                    <input type="email" id="mail" onChange={(e) => setEmail(e.target.value)} className={styles.input_custom}/>
                </div>

                <label>Senha</label>
                <div className={styles.container_icon}>
                    <IoLockClosedOutline className={styles.icons}/>
                    <input type="password" id="senha" onChange={(e) => setPassword(e.target.value)} className={styles.input_custom}/>
                </div>

                <label>Confirmar Senha</label>
                <div className={styles.container_icon}>
                    <IoLockClosedOutline className={styles.icons}/>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} className={styles.input_custom}/>
                </div>

                <input type="submit" value="Cadastrar" className={styles.button_cadastrar} onClick={() => {
                    const json = {
                        nome: name,
                        email: email,
                        senha: password
                    };
                    request.insertUsuario(json);


                }} />
            </form>
        
        </div>
    )
}

export default Cadastrar