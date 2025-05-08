import SongItem from "./SongItem"
import { useState } from "react"

const SongList = ({ songsArray }) => {
    const [items, setItems] = useState(5)

    return (
        <div className="song-list">
            {songsArray
                .filter((_, i) => i < items)
                .map((song, i) => (
                    <SongItem {...song} index={i} key={i} />
                ))}
            <p
                className="song-list__see-more"
                onClick={() => setItems(items + 5)}
            >
                Ver mais
            </p>
        </div>
    )
}

export default SongList
