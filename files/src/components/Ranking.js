import styles from './Ranking.module.css'
import SideBar from './SideBar'
import NavBar from './NavBar'
import imgMusic from './music_images/ImagemMusica3.png'
import {Link} from 'react-router-dom'

function Ranking() {
    return (
        <div>
            <NavBar/>
            <div className={styles.container_main}>
                <SideBar/>
                <div className={styles.musics}>
                    <h1 className={styles.tittle_main}>Seu Ranking</h1>
            	    <h1>Música 1</h1>
                    <Link to="/musics">
                    <img src={imgMusic}/>
                    </Link>
                
                </div>
            </div>
        </div>
    )
}

export default Ranking