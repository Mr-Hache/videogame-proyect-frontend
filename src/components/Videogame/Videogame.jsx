import { Link } from 'react-router-dom';
import ExtraVideogame from '../ExtraVideogame/ExtraVideogame';
import style from './_Videogame.module.scss';
import { useState } from 'react';

const Videogame = (props) => {
    const { id, name, platforms, genres, image, rating, released } = props;

    const [extraVideogameOpen, setExtraVideogameOpen] = useState(false);

    const handleMouseEnter = () => {
        setExtraVideogameOpen(true);
    }

    const handleMouseLeave = () => {
        setExtraVideogameOpen(false);
    }
    return (
        
        <div className={`${style.Container} ${extraVideogameOpen ? style.Active : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

            <img src={image} className={style.Image} />
            <Link to={`/detail/${id}`} style={{textDecoration:'none'}}>
                <h1 className={style.Name}>{name}</h1>
            </Link>
            <hr className={style.Hr} />
            <div className={style.Rating}>
                <h2>Rating</h2>
                <p className={style.Rating_numb}>{rating}</p>
            </div>

            {extraVideogameOpen && <ExtraVideogame genres={genres} released={released} platforms={platforms} />

            }
        </div>
    )
}

export default Videogame;