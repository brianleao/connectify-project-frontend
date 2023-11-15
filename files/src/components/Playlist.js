import NavBar from './NavBar'
import styles from './Playlist.module.css'
import {Link} from 'react-router-dom'

function Playlist() {
    return (
        <div>
            <NavBar/>
            <div className={styles.container_main}>
                <h1 className={styles.tittlePlaylist}>Playlist 1</h1>
                <Link to="/musics" className={styles.capa}>Otherside - Red Hot Chili Peppers</Link>
            </div>
        </div>
    )
}

export default Playlist