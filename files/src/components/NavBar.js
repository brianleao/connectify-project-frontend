import styles from './NavBar.module.css'
import imgUsuario from './components_images/ImagemUsuario.png'
import {IoHomeOutline} from 'react-icons/io5'
import {IoSearchOutline} from 'react-icons/io5'
import {IoSettingsOutline} from 'react-icons/io5'
import {IoLogOutOutline} from 'react-icons/io5'

function NavBar() {
    return (
        <nav className={styles.nav_container}>
             
            <div className={styles.div_user}>
                <img src={imgUsuario}/>
                <p>@usuario</p>
            </div>
            

            <div className={styles.div_icons}>
                <IoHomeOutline className={styles.icons}/>
                <IoSearchOutline className={styles.icons}/>
                <IoSettingsOutline className={styles.icons}/>
                <IoLogOutOutline className={styles.icons}/>
            </div>
            
        </nav>
    )
}

export default NavBar