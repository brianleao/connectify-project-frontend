import styles from './BottomBar.module.css'
import {IoHomeOutline} from 'react-icons/io5'
import {IoSearchOutline} from 'react-icons/io5'
import {IoSettingsOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom'

function BottomBar() {
    return (
        <nav className={styles.bottom_bar}>
            
            <Link to="/mainpage">
                <IoHomeOutline className={styles.icons}/>
            </Link>

            <IoSearchOutline className={styles.icons}/>
            
            <Link to="/settings">
                <IoSettingsOutline className={styles.icons}/>
            </Link>
            
        </nav>
    )
}

export default BottomBar