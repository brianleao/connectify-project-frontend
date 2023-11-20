import NavBar from "./NavBar"
import styles from './Settings.module.css'
import BottomBar from './BottomBar'
import {Link} from 'react-router-dom'

function Settings() {
    return (
        <div>
            <NavBar/>
            
            <div className={styles.container_main}>
                <h1 className={styles.tittleH1}>Configurações</h1>
                <ul>
                    <li className={styles.styleLi}>Alterar Dados</li>
                    <li className={styles.styleLi}>Alterar Senha</li>
                    <li className={styles.styleLi}>Importar Playlists</li>
                    <li className={styles.styleLi}>Importar Configurações</li>
                    <li className={styles.styleLi}>Plano VIP</li>
                    <Link to='/' className={styles.button_logout}>
                    <li className={styles.styleLi}>Sair do App</li>
                    </Link>
                    
                </ul>
            </div>
            
            <BottomBar/>

        </div>
    )
}

export default Settings