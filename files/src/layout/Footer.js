import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
import logo from './images/Logo BALV.png'

function Footer() {

return (
    <footer className={styles.footer_d}>
        <img src={logo} alt="Logo BALV!" className={styles.footer_img}/>
        BALV Soluções de Software © • 2023
    </footer>
)
}


export default Footer