import styles from './NavBar.module.css'
import imgUsuario from './components_images/ImagemUsuario.png'
import {IoHomeOutline} from 'react-icons/io5'
import {IoSearchOutline} from 'react-icons/io5'
import {IoSettingsOutline} from 'react-icons/io5'
import {IoLogOutOutline} from 'react-icons/io5'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <nav className={styles.nav_container}>
             
            <div className={styles.div_user}>
                <img src={imgUsuario}/>
                <p>@usuario</p>
            </div>
            

            <div className={styles.div_icons}>

                <Link to="/mainpage">
                    <IoHomeOutline className={styles.icons}/>
                </Link>

                <IoSearchOutline className={styles.icons}/>
                <IoSettingsOutline className={styles.icons}/>
                <Link to="/login">
                    <IoLogOutOutline className={styles.icons}/>
                </Link>
            </div>
            
        </nav>
    )
}

export default NavBar