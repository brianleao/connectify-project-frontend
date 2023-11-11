import styles from './Musics.module.css'
import NavBar from './NavBar'
import MusicMain from './music_images/image_main.png'
import {IoStarHalf} from "react-icons/io5"
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import Player from './Player'

function Musics() {

    return (
        <div className={styles.bodyPageMusic}>
            <NavBar/>

            <div className={styles.infos}>
                <h1>Música</h1>
                <span>Playlist Best of Rock - 2000</span>
            </div>
            
            <div className={styles.container_main}>
                
                <div className={styles.avaliable}>
                    <IoStarHalf className={styles.icon_star}/>
                    <input type='button' value="Avalie esta música!" className={styles.button_avaliable}></input>
                </div>
                
                    <img src={MusicMain}/>
                
                <div className={styles.music_infos}>
                    <h2 className={styles.music_name}>Otherside</h2>
                    <p className={styles.singer_name}>Red Hot Chili Peppers</p>
                </div>

                <Player/>

            </div>
        </div>
    )
}

export default Musics