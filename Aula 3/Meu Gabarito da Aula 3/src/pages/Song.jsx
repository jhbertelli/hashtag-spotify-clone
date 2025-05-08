import Player from "../components/Player"
import { Link, useParams } from "react-router-dom"
import { songsArray } from "../assets/database/songs"
import { artistArray } from "../assets/database/artists"

const Song = () => {
    const { id } = useParams()

    const {
        image,
        name,
        duration,
        artist: artistName,
        audio,
    } = songsArray.filter((song) => song.id === Number(id))[0]

    const artist = artistArray.filter((artist) => artist.name === artistName)[0]

    const artistSongs = songsArray.filter((song) => song.artist === artistName)

    const randomIndex = Math.floor(Math.random() * (artistSongs.length - 1))

    const randomIndex2 = Math.floor(Math.random() * (artistSongs.length - 1))

    const randomIdFromArtist = artistSongs[randomIndex].id
    const randomId2FromArtist = artistSongs[randomIndex2].id

    return (
        <div className="song">
            <div className="song__container">
                <div className="song__image-container">
                    <img src={image} alt={`Imagem da música ${name}`} />
                </div>
            </div>

            <div className="song__bar">
                <Link
                    to={`/artist/${artist.id}`}
                    className="song__artist-image"
                >
                    <img
                        width={75}
                        height={75}
                        src={artist.image}
                        alt={`Imagem do Artista ${artistName}`}
                    />
                </Link>

                <Player
                    duration={duration}
                    randomIdFromArtist={randomIdFromArtist}
                    randomId2FromArtist={randomId2FromArtist}
                />

                <div>
                    <p className="song__name">{name}</p>
                    <p>{artistName}</p>
                </div>
            </div>
        </div>
    )
}

export default Song
