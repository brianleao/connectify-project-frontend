import styles from './MainPage.module.css'
import NavBar from './NavBar'
import imgRanking from './components_images/ImagemSeuRanking.png'
import imgPlaylists from './components_images/ImagemPlaylists.png'
import imgArtists from './components_images/ImagemArtistas.png'
import { Link } from 'react-router-dom'
import SPA_Options from './SPA_Options'

function MainPage() {

    return (
        <div>
            <NavBar/>
            
            <div className={styles.container_main}>
            <SPA_Options/>    
            </div>

        </div>
    )

}


export default MainPage