import styles from './FavoriteArtists.module.css'
import NavBar from './NavBar'
import imgRedHot from './music_images/redhot.png'

function FavoriteArtists() {
    return (
        <div>
            <NavBar/>
            <div className={styles.container_main}>
                <h1 className={styles.tittleH1}>Artistas Favoritos</h1>
                <div className={styles.capa}>Red Hot Chili Peppers </div>
            </div>
        </div>
    )
}

export default FavoriteArtists