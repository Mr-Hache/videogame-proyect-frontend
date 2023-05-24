import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGenres, getPlatforms } from '../../redux/actions';
import validateForm from '../../utils/validateForm';
import { sendVideogameUpdate } from '../../utils/sendVideogame';
import FormTemplate from '../FormTemplate/FormTemplate';
import { useParams } from 'react-router-dom';
import { getVideogameDetail, cleanVideogameDetail } from '../../redux/actions';
import { validate as validateUUID } from 'uuid';


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
        setVideogame((prevVideogame) => ({
            ...prevVideogame,
            name: videogameDetail.name,
            description: videogameDetail.description,
            released: videogameDetail.released,
            rating: videogameDetail.rating,
            image: videogameDetail.image,
        }));
    }, [videogameDetail]);

    const handleInputChange = (e) => {
        setVideogame({
            ...videogame,
            [e.target.name]: e.target.value,
        });
    };

    const handlePlatforms = (e) => {
        if (e.target.checked) {
            setVideogame({
                ...videogame,
                platforms: [...videogame.platforms, e.target.value],
            });
        } else {
            setVideogame({
                ...videogame,
                platforms: videogame.platforms.filter(
                    (platform) => platform !== e.target.value
                ),
            });
        }

    };

    const handleGenres = (e) => {
        if (e.target.checked) {
            setVideogame({
                ...videogame,
                genres: [...videogame.genres, e.target.value],
            });
        } else {
            setVideogame({
                ...videogame,
                genres: videogame.genres.filter((genre) => genre !== e.target.value),
            });
        }
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const errors = validateForm(videogame);
            console.log(videogame)
            if (Object.keys(errors).length === 0) {

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

    return (
        <div>
            <h1>Update Videogame</h1>
            <FormTemplate name="Update" handleSubmit={handleSubmit} handleInputChange={handleInputChange} handlePlatforms={handlePlatforms} handleGenres={handleGenres} videogame={videogame} genres={genres} platforms={platforms} id={id} validateId={validateId}></FormTemplate>
        </div>
    );
}

export default FormUpdateVideogame;