import styles from './Ranking.module.css'
import SideBar from './SideBar'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'
import { IoRemoveCircleOutline } from "react-icons/io5";

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
                        <Link to="/musics">
                        <div className={styles.capa}></div>
                        </Link>
                        <IoRemoveCircleOutline className={styles.iconRemove}/>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Ranking