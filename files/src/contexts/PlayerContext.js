import { createContext, useState } from "react";

export const PlayerContext = createContext()

export function PlayerProvider({children}) {

    const [dadosMusica, setDadosMusica] = useState({
        path_musica: "/music/red_hot_chilli_peppers/albums/stadium_arcadium/otherside.mp3"
    })

    return (
        <PlayerContext.Provider
            value={{
                dadosMusica,
                setDadosMusica
            }}
        >
            {children}
        </PlayerContext.Provider>
    )
}