import styles from './MainPage.module.css'
import NavBar from './NavBar'
import imgRanking from './components_images/ImagemSeuRanking.png'
import imgPlaylists from './components_images/ImagemPlaylists.png'
import imgArtists from './components_images/ImagemArtistas.png'

function MainPage() {

    return (
        <div>
            <NavBar/>
            
            <div className={styles }>
                <h1>Seu Ranking</h1>
                <img src={imgRanking} className={styles.img_custom}/>
            

            <h1>Playlists</h1>
            <img src={imgPlaylists} className={styles.img_custom} />

            <h1>Artistas Favoritos</h1>
            <img src={imgArtists} className={styles.img_custom}/>
            </div>

        </div>
    )

}


export default MainPage