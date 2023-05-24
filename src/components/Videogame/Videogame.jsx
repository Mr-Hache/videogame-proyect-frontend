import { Link } from 'react-router-dom';
import ExtraVideogame from '../ExtraVideogame/ExtraVideogame';

const Videogame = (props) => {
    const { id, name, platforms, genres, image, rating, released } = props;
    return (
        <div>
            {/* <img src={image} /> */}

            <h2>Platforms</h2>
            <ul>
                {platforms.map((platform, index) => {
                    return <li key={index}>{platform}</li>
                })}
            </ul>
            <Link to={`/detail/${id}`
            }>
                <h1>{name}</h1>
            </Link>

            <ExtraVideogame genres={genres} released={released} rating={rating} />


        </div>
    )
}

export default Videogame;