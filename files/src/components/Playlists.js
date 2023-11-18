import NavBar from './NavBar'
import SideBar from './SideBar'
import styles from './Playlists.module.css'
import imgPlaylist from './music_images/img_playlist.png'
import {IoReorderThree} from 'react-icons/io5'
import {Link} from 'react-router-dom'
import BottomBar from './BottomBar'

function Playlists() {
    return (
        <>
            <NavBar/>
            <div className={styles.container_main}>
                <SideBar/>
                <div className={styles.container_m}>
                    <h1 className={styles.tittlePlaylist}>Playlists</h1>
                        <h1>Playlist 1</h1>
                        <div className={styles.infosPlaylist}>
                            <Link to='/playlist'>
                                <img src={imgPlaylist} className={styles.backgroundPlaylist}/>
                            </Link>
                            <div className={styles.quantPlaylist}>
                                <p>112 faixas</p>
                                <p>5h45min</p>    
                            </div>
                            <IoReorderThree className={styles.iconSettings}/>
                        </div>
                </div>
            </div>
            <BottomBar/>
        </>
    )
}

export default Playlists