import BottomBar from './BottomBar'
import styles from './Search.module.css'
import {IoSearchOutline} from 'react-icons/io5'

function Search() {
    return (
        <div className={styles.container_main}>
            <div className={styles.containerSearch}>
                <IoSearchOutline className={styles.icon}/>
                <input type='text' className={styles.inputBar} placeholder='O que você deseja ouvir?'/>
            </div>
            <BottomBar className={styles.containerBottom}/>
        </div>
    )
}

export default Search