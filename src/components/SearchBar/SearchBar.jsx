import { useDispatch } from 'react-redux';
import { getVideogamesByName, changeStateSearch } from '../../redux/actions';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './_SearchBar.module.scss';
import searchWhite from '../../images/searchWhite.png';
const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleClick = () => {
        if (name) {
            dispatch(changeStateSearch(true));
            dispatch(getVideogamesByName(name));

            console.log(name);
            setName("");
        }
    }

    return (
        <div>

            <form action="" className={style.Search_bar}>
                <input type="text" placeholder="Search videogame..." value={name} onChange={handleChange} className={style.Search_bar__input} />
                <Link to="/home" ><button onClick={handleClick} className={style.Search_bar__button}><img className={style.Search_bar__button__icon} src={searchWhite} alt="SearchWithe" /></button> </Link>
            </form>

        </div>

    )
}

export default SearchBar;