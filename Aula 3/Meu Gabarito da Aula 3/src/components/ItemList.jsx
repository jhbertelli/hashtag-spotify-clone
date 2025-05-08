import { Link, useLocation } from "react-router-dom"
import { SingleItem } from "./SingleItem"

const ItemList = ({ title, maxItems, itemsArray, path, idPath }) => {
    const { pathname } = useLocation()

    const isHome = pathname === "/"
    const finalItems = isHome ? maxItems : Infinity

    return (
        <div className="item-list">
            <div className="item-list__header">
                <h2>{title} Populares</h2>
                {isHome && (
                    <Link className="item-list__link" to={path}>
                        Mostrar tudo
                    </Link>
                )}
            </div>

            <div className="item-list__container">
                {itemsArray
                    .filter((_, i) => i < finalItems)
                    .map((item, i) => (
                        <SingleItem
                            key={`${title}_${i}`}
                            {...item}
                            idPath={idPath}
                        />
                    ))}
                {/* {Array(items)
                    .fill()
                    .map((_, i) => (
                        <SingleItem key={`${title}_${i}`} />
                    ))} */}
            </div>
        </div>
    )
}

export default ItemList
