import React from "react"
import styles from "./Cadastrar.module.css"
import logo_connectify from "../layout/images/logo_connectify.png"
import {IoMailOutline} from "react-icons/io5"
import {IoLockClosedOutline} from "react-icons/io5"
import { useState } from "react"
import Logo from './Logo'

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

        else if(!name || !user || !email || !password || !confirmPassword){
            alert("ERRO: Faltam campos a serem preenchidos!")
        }

        else {
            alert(`O nome completo é ${name}, o usuário é ${user} o email é ${email} a senha é ${password} e a confirmação da senha é ${confirmPassword}`)
        }
    }
    //name é o que eu vou ler e setName o que eu vou alterar no name
    //no método useState() eu posso setar um valor que se inicia quando o componente for inicializado
    const [name, setName] = useState()
    const [user, setUser] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    return (
        <div className={styles.cadastrar_main}>

            <nav className={styles.nav_bar}>
                <Logo/>
                <input type="button" value="Entrar" className={styles.button_enter}/>
            </nav>

            <form onSubmit={cadastrarUsuario} className={styles.container_cadastrar}>
                <label htmlFor="name">Nome</label>
                <input type="text" id="nome" onChange={(e) => setName(e.target.value)} className={styles.input_custom}/>

                <label>Usuário</label>
                <input type="text" id="user" onChange={(e) => setUser(e.target.value)} className={styles.input_custom}/>
                
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

                <input type="submit" value="Cadastrar" className={styles.button_cadastrar} />
            </form>
        
        </div>
    )
}

export default Cadastrar