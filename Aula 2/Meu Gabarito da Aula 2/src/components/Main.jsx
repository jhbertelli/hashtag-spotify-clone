import { artistArray } from "../assets/database/artists"
import { songsArray } from "../assets/database/songs"
import ItemList from "./ItemList"

const Main = () => (
    <main className="main">
        <ItemList
            title="Artistas"
            maxItems={10}
            itemsArray={artistArray}
            path="/artists"
            idPath="/artist"
        />

        <ItemList
            title="Músicas"
            maxItems={20}
            itemsArray={songsArray}
            path="/songs"
            idPath="/song"
        />
    </main>
)

export default Main
