import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { changeFilterByGenre, changeFilterByPlatform, changeFilterBySource } from "../../redux/actions";



const Categorie = (props) => {
    const { name, nameCategorie } = props;
    const {filterByPlatform, filterByGenre, filterBySource} = useSelector((state) => state);
    const dispatch = useDispatch();

    const [state, setState] = useState(false);

    const handleClick = () => {
        setState(!state);

    }

    useEffect(() => {
        if (state) {
            if (nameCategorie === "genre") {
                dispatch(changeFilterByGenre(name));
            }
            if (nameCategorie === "platform") {
                dispatch(changeFilterByPlatform(name));
            }
            if (nameCategorie === "source") {
                dispatch(changeFilterBySource(name));
            }
        } else{
            if (nameCategorie === "genre" && filterByGenre === name) {
                dispatch(changeFilterByGenre(""));
            }
            if (nameCategorie === "platform" && filterByPlatform === name) {
                dispatch(changeFilterByPlatform(""));
            }
            if (nameCategorie === "source" && filterBySource === name) {
                dispatch(changeFilterBySource(""));
            }
        }
    }, [state]);
    useEffect(() => {
        if( nameCategorie === "genre" && filterByGenre !== name && filterByGenre !== ""){
            setState(false);
        }

    }, [filterByGenre])

    useEffect(() => {
        if( nameCategorie === "platform" && filterByPlatform !== name && filterByPlatform !== ""){
            setState(false);
        }

    }, [filterByPlatform])

    useEffect(() => {
        if( nameCategorie === "source" && filterBySource !== name && filterBySource !== ""){
            setState(false);
        }

    }, [filterBySource])


    return (
        <div>
            <h1 onClick={handleClick}>{name}</h1>
        </div>
    )
}

export default Categorie;