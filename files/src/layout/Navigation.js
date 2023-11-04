import {Link} from 'react-router-dom'
import styles from './Navigation.module.css'

function Navigation() {
    return (
        <ul className={styles.list}>
        <li className={styles.item}><Link to="/" className={styles.link_custom}>Home</Link></li>
        <li className={styles.item}><Link to="/empresa" className={styles.link_custom}>Empresa</Link></li>
        <li className={styles.item}><Link to="/contato" className={styles.link_custom}>Contato</Link></li>  
        </ul>
    )
}


export default Navigation