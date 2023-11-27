// const axios = require('axios');
import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 1000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
  });


const request =   {
    /**
     * 
     * @returns todos os artistas no banco de dados
     */
    getArtistas: function () {
        return instance.get('/api/artistas');
    },
    /**
     * 
     * @param {Number} idAlbum 
     * @returns todos os albums, album por id
     * id_album e nome_album
     */
    getAlbum: function (idAlbum) {
        if(idAlbum) {
            return instance.get(`/api/albums/${idAlbum}`);

        }
        return instance.get('/api/albums');
    },
    /**
     * 
     * @param {JSON} params 
     * @returns musicas, o json de parametros serve como filtro para a consulta
     */
    getMusica: function (params) {
        const {idAlbum, idArtista, idMusica, nomeMusica} = params;
        let query = '/api/musicas?';
        if (idAlbum) {
            query += `id_album=${idAlbum}`;
        }
        if(idArtista) {
            query += `id_album=${idArtista}`;

        }
        if(idMusica) {
            query += `id_musica=${idMusica}`;
        }

        if(nomeMusica) {
            query += `nome_musica=${nomeMusica}`;
        }

        return instance.get(query);
    },
    /**
     * 
     * @param {Number} idUsuario 
     * @returns Nome e ID das playlists para determinado usuarios
     */
    getPlaylistByUser: function (idUsuario) {
        if(idUsuario) {
            return instance.get(`/api/playlist/usuario/${idUsuario}`);
        }
    },
    /**
     * 
     * @param {Number} idPlaylist 
     * @returns Musicas pertencentes a playlist com id selecionado
     */
    getPlaylist: function (idPlaylist) {
        if(idPlaylist) {
            return instance.get(`/api/playlist/usuario/${idPlaylist}`);
        }
    },
    /**
     * 
     * @param {Number} idUsuario 
     * @returns Informações do usuário, nome, id, email, senha. 
     */
    getUsuario: function (idUsuario) {
        if(idUsuario) {
            return instance.get(`/api/usuario/${idUsuario}`);
        }
    },
    /**
     * 
     * @returns Lista de todos os usuarios do sistema
     */
    getUsuarios: function () {
        return instance.get('/api/usuarios');
    },
    /**
     * 
     * @param {JSON} params
     * cadastra o novo usuario dentro do sistema
     * O JSON passado como parametro deve ter o seguinte formato
     * {
     *  nome: string,
     *  email: string,
     *  senha: string
     * } 
     */
    insertUsuario: function (params) {
        if(params) {
            instance.post('/api/insert/usuario', params);
        }

    },
    /**
     * 
     * @param {JSON} params
     * cadastra nova playlist dentro do sistema
     * O JSON passado como parametro deve ter o seguinte formato
     * {
     *  nome: string,
     *  idUsuario: number
     * } 
     */
    insertPlaylist: function (params) {
        if(params) {
            instance.post('/api/insert/playlist', params);
        }

    },
    /**
     * 
     * @param {JSON} params 
     * insere uma musica ja existente no banco dentro de uma playlist
     * {
     *  idMusica: number,
     *  idPlaylist: number,
     * }
     */
    insertMusica: function(params) {
        if(params) {
            instance.post('/api/insert/playlist/musica', params);
        }
    },
    /**
     * deleta uma musica de 
     * @param {JSON} params
     * {idMusica: number, idPlaylist: number} 
     */
    deleteMusica: function (params) {
        if(params) {
            instance.put('/api/delete/playlist/musica',params);

        }
    },
     /**
      * 
      * @param {JSON} params 
      * {email: string, senha: string}
      */
    login: function(params) {
        if(params) {
            return instance.post('/api/login', params);
        }
    }






};

export default request;