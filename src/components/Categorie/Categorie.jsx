import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { changeFilter } from "../../redux/actions";
import style from "./_Categorie.module.scss";

const Categorie = (props) => {
    const { categorie, nameCategorie } = props;
    const [state, setState] = useState(false);
    const { filter } = useSelector((state) => state);
    const dispatch = useDispatch();

    const filterBy = {
        filterByGenre: filter.filterByGenre,
        filterByPlatform: filter.filterByPlatform,
        filterBySource: filter.filterBySource,
    }


    const changeState = (nameCategorie) => {

        if (nameCategorie === "Genres") {
            if (filter.filterByGenre.name == categorie.name) {
                setState(!state ? true : state);
            } else {
                setState(false);
            }
        } else if (nameCategorie === "Platforms") {
            if (filter.filterByPlatform.name == categorie.name) {
                setState(!state ? true : state);
            } else {
                setState(false);
            }
        } else if (nameCategorie === "Sources") {
            if (filter.filterBySource.name == categorie.name) {
                setState(!state ? true : state);
            } else {
                setState(false);
            }
        }
    }
    useEffect(() => {
        changeState(nameCategorie);
    }, [filter]);

    useEffect(() => {
        changeState(nameCategorie);
    }, []);

    useEffect(() => {
        if (!state) {

            if (nameCategorie === "Genres") {
                if (categorie.name == filter.filterByGenre.name) {
                    filterBy.filterByGenre = { id: 0, name: "all" };
                    dispatch(changeFilter(filterBy));
                }

            } else if (nameCategorie === "Platforms") {
                if (categorie.name == filter.filterByPlatform.name) {
                    filterBy.filterByPlatform = { id: 0, name: "all" };
                    dispatch(changeFilter(filterBy));
                }
            }
            else if (nameCategorie === "Sources") {
                if (categorie.name == filter.filterBySource.name) {
                    filterBy.filterBySource = { id: 0, name: "all" };
                    dispatch(changeFilter(filterBy));
                }
            }

        } else {
            if (nameCategorie === "Genres") {
                if (filterBy.filterBySource.name !== categorie.name) {
                    filterBy.filterByGenre = categorie;
                    dispatch(changeFilter(filterBy));
                }
            } else if (nameCategorie === "Platforms") {
                if (filterBy.filterBySource.name !== categorie.name) {
                    filterBy.filterByPlatform = categorie;
                    dispatch(changeFilter(filterBy));
                }
            } else if (nameCategorie === "Sources") {
                if (filterBy.filterBySource.name !== categorie.name) {
                    filterBy.filterBySource = categorie;
                    dispatch(changeFilter(filterBy));
                }
            }
        }
    }, [state])


    const handleClick = () => {
        setState(!state);


    }

    return (
        <div>
            <h1 className={state? style.Categorie_white: style.Categorie_black} onClick={handleClick}>{categorie.name}</h1>
        </div>
    )
}

export default Categorie;