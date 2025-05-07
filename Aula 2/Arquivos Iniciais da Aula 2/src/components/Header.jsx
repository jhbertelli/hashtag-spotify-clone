import logoSpotify from "../assets/logo/spotify-logo.png"

const Header = () => (
    <div className="header">
        <img src={logoSpotify} alt="" />

        <a className="header__link" href="/">
            <h1>Spotify</h1>
        </a>
    </div>
)

export default Header
