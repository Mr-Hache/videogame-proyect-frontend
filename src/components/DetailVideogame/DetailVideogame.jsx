import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cleanVideogameDetail, getVideogameDetail } from "../../redux/actions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { validate as validateUUID } from 'uuid'



const DetailVideogame = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const videogameDetail = useSelector((state) => state.videogameDetail);
    const validateId = validateUUID(id);

    useEffect(() => {
        dispatch(getVideogameDetail(id));
        return () => {
            dispatch(cleanVideogameDetail());
        }
    }, [dispatch, id]);

    const deleteVideogame = async () => {
        try {
            const response = await fetch(`https://videogame-proyect-backend-production.up.railway.app/videogames/${id}`, {
                method: "DELETE",

            });
            if (response.ok) {
                // El juego se borró correctamente
                window.alert('The videogame was deleted successfully');
            } else {
                // El juego no se borró correctamente
                window.alert('The videogame was not deleted successfully');
            }

        } catch (error) {
            window.alert({ message: 'The videogame was not deleted successfully' });
        }

    }

    return (
        <div>
            <h1>Detail Videogame</h1>
            <h2>{videogameDetail.name}</h2>
            {/* <img src={videogameDetail.image} /> */}
            <h3>Genres</h3>
            <ul>
                {videogameDetail.genres?.map((genre, index) => {
                    return <li key={index}>{genre}</li>
                })}
            </ul>
            <h3>Platforms</h3>
            <ul>
                {videogameDetail.platforms?.map((platform, index) => {
                    return <li key={index}>{platform}</li>
                })}
            </ul>
            <h3>Rating</h3>
            <p>{videogameDetail.rating}</p>
            <h3>Released</h3>
            <p>{videogameDetail.released}</p>
            <h3>Description</h3>
            <p>{videogameDetail.description}</p>

            {
                validateId ? <button onClick={deleteVideogame}>
                    Delete
                </button> : <span>This game cannot be deleted</span>
            }

            {validateId ? <Link to={`/edit/${id}`}>
                <button>
                    Edit
                </button>
            </Link> : <span>This videogame cannot be edited</span>}




        </div>
    )
}

export default DetailVideogame;