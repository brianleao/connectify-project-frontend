import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'
import Logo from './images/logo_connectify.png'

function Navigation() {
    return (
        
        <div>
            <ul className={styles.list}>
                <li>
                    <img src={Logo}/>
                </li>
                <li className={styles.buttons}>
                    <Link to="/cadastrar" className={styles.cadastrar_button}>Cadastrar-se</Link>
                    <Link to="/login" className={styles.login_button}>Entrar</Link>
                </li>
            </ul>
        </div>
    )
}


export default Navigation