import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export const SingleItem = ({ id, name, banner, image, artist, idPath }) => (
    <Link to={`${idPath}/${id}`} className="single-item">
        <div className="single-item__div-image-button">
            <div className="single-item__div-image">
                <img
                    src={image}
                    alt={`Imagem do Artista ${name}`}
                    className="single-item__image"
                />
            </div>

            <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
            />
        </div>

        <div className="single-item__texts">
            <div className="single-item__2lines">
                <p className="single-item__title">{name}</p>
            </div>
            <p className="single-item__type">{artist ?? "Artista"}</p>
        </div>
    </Link>
)
