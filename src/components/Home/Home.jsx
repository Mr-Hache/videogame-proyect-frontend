import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getVideogames } from '../../redux/actions';
import VideogameList from '../VideogamesList/VideogamesList';
import style from './_Home.module.scss';


const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVideogames());
    }, [dispatch]);

    return (
        <div className={style.Container}>
            <VideogameList />
            <hr />

        </div>
    );
}; 

export default Home;