import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getGenres, getPlatforms, getVideogamesByGenre, getVideogamesByGenreAndPlatform, getVideogamesByPlatform, getVideogamesBySource, getVideogamesByGenreAndSource, getVideogamesByPlatformAndSource, getVideogamesByGenreAndPlatformAndSource, getVideogames, changePage, changeStateSearch } from "../../redux/actions";
import CategoriesList from "../CategoriesList/CategoriesList";
import style from "./_FilterBar.module.scss";

const FilterBar = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());

    }, [dispatch]);

    const genres = useSelector((state) => state.genres);
    const platforms = useSelector((state) => state.platforms);
    const sources = useSelector((state) => state.sources);
    const filter = useSelector((state) => state.filter);
    const page = useSelector((state) => state.page);

    const getVideogamesList = (page) => {
        const genreName = filter.filterByGenre.name;
        const platformName = filter.filterByPlatform.name;
        const sourceName = filter.filterBySource.name;
        if (genreName !== "all" && platformName !== "all" && sourceName !== "all") {
            dispatch(getVideogamesByGenreAndPlatformAndSource(genreName, platformName, sourceName, page));
        } else if (genreName !== "all" && platformName !== "all") {
            dispatch(getVideogamesByGenreAndPlatform(genreName, platformName, page));
        } else if (genreName !== "all" && sourceName !== "all") {
            dispatch(getVideogamesByGenreAndSource(genreName, sourceName, page));
        } else if (platformName !== "all" && sourceName !== "all") {
            dispatch(getVideogamesByPlatformAndSource(platformName, sourceName, page));
        } else if (genreName !== "all") {
            dispatch(getVideogamesByGenre(genreName, page));
        } else if (platformName !== "all") {
            dispatch(getVideogamesByPlatform(platformName, page));
        } else if (sourceName !== "all") {
            dispatch(getVideogamesBySource(sourceName, page));
        } else {
            dispatch(getVideogames(page));
        }
    }

    useEffect(() => {
        dispatch(changeStateSearch(false));
        dispatch(changePage(1));
        getVideogamesList(1);
    }, [filter, dispatch]);

    useEffect(() => {
        getVideogamesList(page);
    }, [page]);



    return (
        <aside className={style.Container} >
            <CategoriesList title="Genres" categories={genres} />
            <CategoriesList title="Platforms" categories={platforms} />
            <CategoriesList title="Sources" categories={sources} />
        </aside>



    )
}

export default FilterBar;