import styles from './SideBar.module.css'
import imgUser from './components_images/ImagemUsuario.png'
import SPA_SideBar from './SPA_SideBar'

function SideBar() {
    return(
        <aside className={styles.div_aside}>
            <SPA_SideBar/>
        </aside>
    )
}

export default SideBar