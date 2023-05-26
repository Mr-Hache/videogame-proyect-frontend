import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGenres, getPlatforms } from '../../redux/actions';
import validateForm from '../../utils/validateForm';
import { sendVideogameAdd } from '../../utils/sendVideogame';
import FormTemplate from '../FormTemplate/FormTemplate';


const FormAddVideogame = () => {


    const dispatch = useDispatch();
    const { genres, platforms } = useSelector((state) => state);
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
        if (genres.length === 0 || platforms.length === 0) {
            dispatch(getGenres());
            dispatch(getPlatforms());
        }

    }, []);

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

    const handleSubmit = async (e) => {
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
        console.log(videogame)
        if (Object.keys(errors).length === 0) {
            try {
                const response = await sendVideogameAdd(videogame);
                window.alert(response);
            } catch (error) {
                window.alert(error);
            }
            setVideogame({
                name: "",
                description: "",
                released: "",
                rating: "",
                platforms: [],
                genres: [],
                image: "",
            });

        } else {

            const errorMessage = Object.values(errors).join("\n");
            window.alert(errorMessage);
        }
    };

    return (
        <div>
            <FormTemplate name="Add" handleSubmit={handleSubmit} handleInputChange={handleInputChange} handlePlatforms={handlePlatforms} handleGenres={handleGenres} videogame={videogame} genres={genres} platforms={platforms} handleDeleteGenre={handleDeleteGenre} handleDeletePlatform={handleDeletePlatform}></FormTemplate>
        </div>
    );
}

export default FormAddVideogame;