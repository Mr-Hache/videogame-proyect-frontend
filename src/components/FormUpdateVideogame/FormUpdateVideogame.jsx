import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGenres, getPlatforms } from '../../redux/actions';
import validateForm from '../../utils/validateForm';
import { sendVideogameUpdate } from '../../utils/sendVideogame';
import FormTemplate from '../FormTemplate/FormTemplate';
import { useParams } from 'react-router-dom';
import { getVideogameDetail, cleanVideogameDetail } from '../../redux/actions';
import { validate as validateUUID } from 'uuid';
import style from './_FormUpdateVideogame.module.scss';


const FormUpdateVideogame = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { genres, platforms, videogameDetail } = useSelector((state) => state);
    const validateId = validateUUID(id);

    const [videogame, setVideogame] = useState({
        name: "",
        description: "",
        released: "",
        rating: "",
        platforms: [],
        genres: [],
        image: "",
    });

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
        dispatch(getVideogameDetail(id));
        return (
            () => dispatch(cleanVideogameDetail())
        )
    }, [dispatch]);

    useEffect(() => {
        const videogameCopy = {
            name: videogameDetail.name ? videogameDetail.name : "",
            description: videogameDetail.description ? videogameDetail.description : "",
            released: videogameDetail.released ? videogameDetail.released : "",
            rating: videogameDetail.rating ? videogameDetail.rating : "",
            image: videogameDetail.image ? videogameDetail.image : "",
            platforms: videogameDetail.platforms ? videogameDetail.platforms : [],
            genres: videogameDetail.genres ? videogameDetail.genres : [],
        }
        
        if (videogameDetail.name) {
            setVideogame(videogameCopy);
        }

    }, [videogameDetail]);



    const handleInputChange = (e) => {
        setVideogame({
            ...videogame,
            [e.target.name]: e.target.value,
        });
    };

    const handlePlatforms = (e) => {
        e.preventDefault();
        const platform = e.target.value;
        // cambiar a select
        if (videogame.platforms.includes(platform)) {
            return
        }
        else {
            setVideogame({
                ...videogame,
                platforms: [...videogame.platforms, platform],
            });
        }
    };

    const handleGenres = (e) => {
        e.preventDefault();
        const genre = e.target.value;
        // cambiar a select
        if (videogame.genres.includes(genre)) {
            return
        }
        else {
            setVideogame({
                ...videogame,
                genres: [...videogame.genres, genre],
            });
        }
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            let platformsId = [];
            let genresId = [];
            if (videogame.platforms.length > 0) {
                platformsId = platforms.filter((platform) => videogame.platforms.includes(platform.name))
                videogame.platforms = platformsId.map((platform) => platform.id)
            }
            if (videogame.genres.length > 0) {
                genresId = genres.filter((genre) => videogame.genres.includes(genre.name))
                videogame.genres = genresId.map((genre) => genre.id)
            }
           

            const errors = validateForm(videogame);
            if (Object.keys(errors).length === 0) {
              console.log(videogame)
                const response = await sendVideogameUpdate(videogame, id);
                window.alert(response);

            } else {

                const errorMessage = Object.values(errors).join("\n");
                window.alert(errorMessage);
            }
        } catch (error) {
            console.log(error)
        }
    };
    const handleDeletePlatform = (event) => {
        event.preventDefault();
        const value = event.target.value
        const newPlatforms = videogame.platforms.filter((platform) => platform !== value);
        setVideogame({
            ...videogame,
            platforms: newPlatforms,
        });

    }
    const handleDeleteGenre = (event) => {
        event.preventDefault();
        const value = event.target.value
        const newGenres = videogame.genres.filter((genre) => genre !== value);
        setVideogame({
            ...videogame,
            genres: newGenres,
        });

    }

    return (
        <div className={style.Container}>
            <FormTemplate name="Update" handleSubmit={handleSubmit} handleInputChange={handleInputChange} handlePlatforms={handlePlatforms} handleGenres={handleGenres} videogame={videogame} genres={genres} platforms={platforms} id={id} validateId={validateId} handleDeletePlatform={handleDeletePlatform} handleDeleteGenre={handleDeleteGenre}></FormTemplate>
        </div>
    );
}

export default FormUpdateVideogame;