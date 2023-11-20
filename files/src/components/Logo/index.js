import {Link} from 'react-router-dom'
import LogoConnectify from '../../layout/images/logo_connectify.png'
import styles from './index.css'

function Logo () {
    return (
       <Link to="/">
            <img src={LogoConnectify} className={styles.logo_connectify}/>
       </Link>
    )
}

export default Logo