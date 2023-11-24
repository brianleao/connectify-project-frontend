import styles from './Musics.module.css'
import NavBar from './NavBar'
import MusicMain from './music_images/image_main.png'
import {IoStarHalf} from "react-icons/io5"
import Player from './Player'
import {IoReorderThree} from 'react-icons/io5'
import BottomBar from './BottomBar'
import request from '../services/services'
import Search from './Search'


export default function Musics() {

    function adicionarMusicaPlayList() {
        alert('A música foi adicionada na playlist!')
    }

    return (
        <div>
            <NavBar/>
            <div className={styles.infos}>
                <h1>Música</h1>
                <span>Playlist Best of Rock - 2000</span>
            </div>
            
            <div className={styles.containerPrimary}>
                <div className={styles.container_main}>
                    {/* <div className={styles.avaliable}>
                        <IoStarHalf className={styles.icon_star}/>
                        <input type='button' value="Avalie esta música!" className={styles.button_avaliable}></input>
                    </div> */}
                    
                        <img src={MusicMain} className={styles.img_music}/>
                    
                    <div className={styles.music_infos}>
                        <h2 className={styles.music_name}>Otherside</h2>
                        <p className={styles.singer_name}>Red Hot Chili Peppers</p>
                    </div>
                </div>
                <div className={styles.playerMusic}>
                    <Player/>
                    <IoReorderThree className={styles.iconAddPlaylist} onClick={adicionarMusicaPlayList}/>
                </div>
            </div>
            <BottomBar/>
            <Search/>
        </div>
    )
}