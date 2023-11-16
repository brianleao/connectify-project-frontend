import NavBar from "./NavBar"
import styles from './Settings.module.css'

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
                </ul>
            </div>
            

        </div>
    )
}

export default Settings