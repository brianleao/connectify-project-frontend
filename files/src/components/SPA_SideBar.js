import { Link } from 'react-router-dom'
import imgRanking from './components_images/images_SideBar/SeuRankingSideBar.png'
import imgPlaylists from './components_images/images_SideBar/PlaylistsSideBar.png'
import imgArtists from './components_images/images_SideBar/ArtistasSideBar.png'
import styles from './SPA_SideBar.module.css'

function SPA_Options() {
    return (
        <div>
            <h1>Seu Ranking</h1>
                <Link to="/ranking">
                    <img src={imgRanking} className={styles.img_custom}/>
                </Link>

            <h1>Playlists</h1>
                <Link to="/playlists">
                    <img src={imgPlaylists} className={styles.img_custom}/>
                </Link>

            <h1>Artistas Favoritos</h1>
                <Link to="/favoriteartists">
                    <img src={imgArtists} className={styles.img_custom}/>
                </Link>
        </div>
    )
}

export default SPA_Options