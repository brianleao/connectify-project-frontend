import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'
import logo from './images/logo_connectify.png'

function Navigation() {
    return (
        
        <div>
            <ul className={styles.list}>
                <li>
                    <img src={logo}/>
                </li>
                <li className={styles.buttons}>
                    <p className={styles.cadastrar_button}>Cadastrar-se</p>
                    <button className={styles.login_button}>Entrar</button>
                </li>
            </ul>
        </div>
    )
}


export default Navigation