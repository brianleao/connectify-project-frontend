import styles from './Ranking.module.css'
import SideBar from './SideBar'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'
import { IoRemoveCircleOutline } from "react-icons/io5";
import BottomBar from './BottomBar'

function Ranking() {
    return (
        <div>
            <NavBar/>
            <div className={styles.container_main}>
                <SideBar/>
                <div className={styles.musics}>
                    <h1 className={styles.tittle_main}>Seu Ranking</h1>
                    <h1>1. Otherside</h1>
                    <div className={styles.musicRanking}>
                        <div className={styles.capa}></div>
                        <IoRemoveCircleOutline className={styles.iconRemove}/>
                    </div>
                
                </div>
            </div>

            <div className={styles.bottom_bar}>
                <BottomBar/>
            </div>

        </div>
    )
}

export default Ranking