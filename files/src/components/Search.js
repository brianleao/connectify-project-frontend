import BottomBar from './BottomBar'
import styles from './Search.module.css'
import {IoSearchOutline} from 'react-icons/io5'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import request from "../services/services.js";
import React, {Component} from "react";
import Musics from './Musics.js';
import { PlayerContext } from '../contexts/PlayerContext'


function Search() {

    const [searchMusic, setSearchMusic] = useState();
    const { setDadosMusica } = useContext(PlayerContext);

    async function CallMusic() {
        try {
            const response = await request.getMusica({
                nomeMusica: searchMusic
            });

            for(let i=0; i < response.data.length; i++) {
                if(response.data[i].nome_musica === searchMusic) {
                    setDadosMusica(response.data[i])
                }
            }

            //setDadosMusica(response.data[0])
        } catch (error) {
            alert("Erro, não foi possível encontrar a busca realizada.");
        }
    }

    return (
        <div className={styles.container_main}>
            <div className={styles.containerSearch}>
                <Link to="/musics">
                    <IoSearchOutline className={styles.icon} onClick={CallMusic}/>
                </Link>
                <input type='text' className={styles.inputBar} placeholder='O que você deseja ouvir?' onChange={(e) => setSearchMusic(e.target.value)}/>
            </div>
            <BottomBar className={styles.containerBottom}/>
        </div>
    )
}

export default Search