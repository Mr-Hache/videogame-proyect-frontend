import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGenres, getPlatforms } from '../../redux/actions';
import validateForm from '../../utils/validateForm';
import {sendVideogameAdd} from '../../utils/sendVideogame';
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
        dispatch(getGenres());
        dispatch(getPlatforms());

    }, [dispatch]);

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

    const handleSubmit = async(e) => {
        e.preventDefault();
        const errors = validateForm(videogame);
        console.log(videogame)
        if (Object.keys(errors).length === 0) {
            try {
                const response = await sendVideogameAdd (videogame);
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
            <h1>Add Videogame</h1>
            <FormTemplate name="Add" handleSubmit={handleSubmit} handleInputChange={handleInputChange} handlePlatforms={handlePlatforms} handleGenres={handleGenres} videogame={videogame} genres={genres} platforms={platforms}></FormTemplate>
        </div>
    );
}

export default FormAddVideogame;