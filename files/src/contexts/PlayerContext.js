import { createContext, useState } from "react";

export const PlayerContext = createContext()

export function PlayerProvider({children}) {

    const [dadosMusica, setDadosMusica] = useState({
        path_musica: "/music/otherside.mp3"
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