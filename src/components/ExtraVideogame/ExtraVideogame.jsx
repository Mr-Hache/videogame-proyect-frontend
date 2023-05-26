import style from './_ExtraVideogame.module.scss';
const { useState } = require("react");


const ExtraVideogame = (props) => {
    const { genres, released, platforms } = props;
    const [genresOpen, setGenresOpen] = useState(false);
    const [platformsOpen, setPlatformsOpen] = useState(false);
    const handleGenres = () => {
        setGenresOpen(!genresOpen);
    };
    const handleMouseLeaveGenres = () => {
        setGenresOpen(false);
    }

    const handlePlatforms = () => {
        setPlatformsOpen(!platformsOpen);
    };
    const handleMouseLeavePlatforms = () => {
        setPlatformsOpen(false);
    }

    return (
        <div className={style.Container}>
            <hr className={style.Hr} />
            <div className={style.List}>
                <h2 onClick={handlePlatforms} className={style.Title} onMouseLeave={handleMouseLeavePlatforms}>Platforms</h2>
                <ul className={`${style.Ul} ${platformsOpen ? style.Open : ''}`}>
                    {platforms.map((platform, index) => {
                        return <li key={index}>{platform}</li>
                    })}
                </ul>
            </div>

            <hr className={style.Hr} />

            <div className={style.Released}>
                <h2>Released</h2>
                <p>{released}</p>
            </div>

            <hr className={style.Hr} />

            <div className={style.List}>
                <h2 onClick={handleGenres} className={style.Title} onMouseLeave={handleMouseLeaveGenres}>Genres</h2>
                <ul className={`${style.Ul} ${genresOpen ? style.Open : ''}`}>
                    {genres.map((genre, index) => {
                        return <li key={index}>{genre}</li>
                    }
                    )}
                </ul>
            </div>



        </div>
    )
}

export default ExtraVideogame;