import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {

return (
    <footer>
        <ul className={styles.social_list}>
            <li><FaFacebook/>Facebook</li>
            <li><FaInstagram/>Instagram</li>
            <li><FaLinkedin/>Linkedin</li>
        </ul>
        <p>Nosso rodapé</p>
    </footer>
)
}


export default Footer