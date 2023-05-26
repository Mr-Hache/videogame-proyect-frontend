import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cleanVideogameDetail, getVideogameDetail } from "../../redux/actions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { validate as validateUUID } from 'uuid'
import style from "./_DetailVideogame.module.scss";


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
        <div className={style.Container}>
            <img src={videogameDetail.image} />
            <div className={style.Details}>
                <h1>Detail Videogame</h1>
                <h2>{videogameDetail.name}</h2>
                <div className={style.List}>
                    <h3>Platforms</h3>
                    <ul >
                        {videogameDetail.platforms?.map((platform, index) => {
                            return <li key={index}>{platform}</li>
                        })}
                    </ul>
                </div>
                <div className={style.List}>

                    <h3 >Genres</h3>
                    <ul >
                        {videogameDetail.genres?.map((genre, index) => {
                            return <li key={index}>{genre}</li>
                        })}
                    </ul>
                </div >

                <div className={style.Data}>
                    <h3 className={style.Title_data}>Rating</h3>
                    <p>{videogameDetail.rating}</p>
                </div>
                <div className={style.Data}>   
                <h3 className={style.Title_data}>Released</h3>
                <p>{videogameDetail.released}</p>
                </div>

                <h3>Description</h3>
                <p>{videogameDetail.description}</p>

                {
                    validateId ? <Link to="/home"> <button onClick={deleteVideogame}>
                        Delete
                    </button></Link> : <span>This game cannot be deleted</span>
                }

                {validateId ? <Link to={`/edit/${id}`}>
                    <button>
                        Edit
                    </button>
                </Link> : <span>This videogame cannot be edited</span>}
            </div>

        </div>
    )
}

export default DetailVideogame;