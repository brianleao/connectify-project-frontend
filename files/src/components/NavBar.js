import styles from './NavBar.module.css'
import imgUsuario from './components_images/ImagemUsuario.png'
import {IoHomeOutline} from 'react-icons/io5'
import {IoSearchOutline} from 'react-icons/io5'
import {IoSettingsOutline} from 'react-icons/io5'
import {IoLogOutOutline} from 'react-icons/io5'
import {Link} from 'react-router-dom'
import React, { useState } from "react"

function NavBar() {

    function clicou() {
        alert('Clicou')
    }

    return (
        <nav className={styles.nav_container}>
             
            <div className={styles.div_user}>
                <img src={imgUsuario}/>
                <p>@usuario</p>
            </div>
            

            <div className={styles.div_icons}>

                <Link to="/mainpage">
                    <IoHomeOutline className={styles.icons}/>
                </Link>
                
                {/* <IoSearchOutline className={styles.icons}/> */}
                <div className={styles.searchBar}>
                    <input type='text' className={styles.inputSearch}/>
                    <IoSearchOutline className={styles.iconSearch} onClick={clicou}/>
                </div>
                
                <IoSettingsOutline className={styles.icons}/>
                <Link to="/login">
                    <IoLogOutOutline className={styles.icons}/>
                </Link>
            
            </div>
            
        </nav>
    )
}

export default NavBar