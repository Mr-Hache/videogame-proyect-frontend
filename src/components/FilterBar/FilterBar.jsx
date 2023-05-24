import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getGenres, getPlatforms } from "../../redux/actions";
import Categories from "../Categories/Categories";
import { useDispatch } from "react-redux";


const FilterBar = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());

    }, [dispatch]);

    const genres = useSelector((state) => state.genres);
    const platforms = useSelector((state) => state.platforms);
    const sources = useSelector((state) => state.sources);

    return (
        <aside>
            
            <Categories genres={genres} platforms={platforms} sources={sources}></Categories>
        </aside>
    )
}

export default FilterBar;