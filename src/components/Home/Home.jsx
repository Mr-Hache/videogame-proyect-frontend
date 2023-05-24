import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, getVideogamesByGenre, getVideogamesByPlatform, getVideogamesByGenreAndPlatform, getVideogamesBySource, getVideogamesByPlatformAndSource, getVideogamesByGenreAndSource, getVideogamesByGenreAndPlatformAndSource, changeOrderBy, changeStateSearch, cleanVideogames } from '../../redux/actions';
import VideogameList from '../VideogamesList/VideogamesList';
import style from './_Home.module.scss';
import orderByFunction from '../../utils/orderByFunction'

const Home = () => {
    const dispatch = useDispatch();
    const videogames = useSelector((state) => state.videogames)
    const filterByGenre = useSelector((state) => state.filterByGenre)
    const filterByPlatform = useSelector((state) => state.filterByPlatform)
    const filterBySource = useSelector((state) => state.filterBySource)
    const stateSearch = useSelector((state) => state.stateSearch)

    const [orderBy, setOrderBy] = useState("")
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(changeStateSearch(false))

        if (filterByGenre && filterByPlatform && filterBySource) {
            dispatch(getVideogamesByGenreAndPlatformAndSource(filterByGenre, filterByPlatform, filterBySource, page));
            
        }
        else if (filterByGenre && filterByPlatform) {
            dispatch(getVideogamesByGenreAndPlatform(filterByGenre, filterByPlatform, page));
        }
        else if (filterByGenre && filterBySource) {
            dispatch(getVideogamesByGenreAndSource(filterByGenre, filterBySource, page));
        }
        else if (filterByPlatform && filterBySource) {
            dispatch(getVideogamesByPlatformAndSource(filterByPlatform, filterBySource, page));
        }
        else if (filterByGenre) {
            dispatch(getVideogamesByGenre(filterByGenre, page));
        }
        else if (filterByPlatform) {
            dispatch(getVideogamesByPlatform(filterByPlatform, page));
        }
        else if (filterBySource) {
            dispatch(getVideogamesBySource(filterBySource, page));
        }
        else {
            dispatch(getVideogames(page));
        }

        // if(orderBy){
        //     let videogamesCopyInit = [...videogames];
        //     const videogamesOrdered = orderByFunction(videogamesCopyInit, orderBy)
        //     dispatch(changeOrderBy(videogamesOrdered))
        // }
    }, [filterByGenre, filterByPlatform, filterBySource, page]);

    useEffect(() => {
        setPage(1)
    }, [filterByGenre, filterByPlatform, filterBySource]);

    const handlePage = (e) => {
        const { name } = e.target;
        if (videogames.length < 15 && name === "next") {
            return
        }

        if (name === "next") {
            setPage(page + 1)
        }
        if (name === "previous") {
            setPage(page - 1)
        }
    }

    useEffect(() => {
        let videogamesCopy = [...videogames];
        const videogamesOrdered = orderByFunction(videogamesCopy, orderBy)
        dispatch(changeOrderBy(videogamesOrdered))

        return () => {
            dispatch(cleanVideogames())
        }
    }, [orderBy]);

    const handleOrder = (e) => {
        const { name } = e.target;
        setOrderBy(name)

    }
    return (
        <div className={style.Container}>

            <button name="ratingASC" onClick={handleOrder} >Order by rating ASC</button>
            <button name="nameASC" onClick={handleOrder}>Order by name ASC</button>
            <button name="ratingDESC" onClick={handleOrder}>Order by rating DESC</button>
            <button name="nameDESC" onClick={handleOrder}  >Order by name DESC</button>

            <VideogameList videogames={videogames} />{

            }
            {!stateSearch ? <div>
                <button name="previous" onClick={handlePage}>Previous</button>
                <span>{page}</span>
                <button name="next" onClick={handlePage}>Next</button>
            </div> : null}

        </div>
    );
};

export default Home;