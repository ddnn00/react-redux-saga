import React from 'react'
import Music from './Music'


const Musics = ({ musics }) => {
    return (
        <ul>
            {musics.map((music) => <Music key={music.id} music={music} />)}
        </ul>
    )
}

export default Musics