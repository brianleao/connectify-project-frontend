import styles from './Musics.module.css'
import NavBar from './NavBar'
import MusicMain from './music_images/image_main.png'

function Musics() {
    return (
        <div>
            <NavBar/>
            <h1>Música</h1>
            <p>Playlist Best of Rock - 2000</p>
            
            <div className={styles.container_main}>
                <input type='button' value="Avalie esta música!"></input>
                <img src={MusicMain}/>
                <p>OtherSide</p>
            </div>


        </div>
    )
}

export default Musics