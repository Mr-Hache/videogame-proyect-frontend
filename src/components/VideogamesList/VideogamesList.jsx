import Videogame from "../Videogame/Videogame";
import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useState} from "react";
import orderByFunction from "../../utils/orderByFunction";
import {orderBy} from '../../redux/actions';
import Paginated from '../Paginated/Paginated';
import style from './_VideogamesList.module.scss';


const VideogameList = ()=> {
const videogames = useSelector((state) => state.videogames);
const filter = useSelector((state) => state.filter);
const stateSearch = useSelector((state) => state.stateSearch);
const dispatch = useDispatch();
const [selectValue, setSelectValue] = useState("");

const handleOrder = (e) => {
    e.preventDefault();
    if(e.target.value === "") return 

    setSelectValue(e.target.value);
    const videogamesCopy = [...videogames];
    const videogamesOrdered = orderByFunction(videogamesCopy, e.target.value);
    dispatch(orderBy(videogamesOrdered));
}
useEffect (() => {
    setSelectValue("");
}, [filter]);
    return (
        
        <div className={style.Container}>
            <h1 className={style.Title}>VIDEOGAMES INFO APLICATION</h1>
            <h2 className={style.Order_by_title}>Order by</h2>
                <select value={selectValue} onChange={handleOrder} className={style.Select} >
                <option value="">Select an option</option>
            <option value="nameASC"> By name ASC </option>
            <option value="nameDESC"> By name DESC </option>
            <option value="ratingASC"> By rating ASC </option>
            <option value="ratingDESC"> By rating DESC </option>
        </select>
        <div className={style.Videogames}>
        {videogames.map((videogame, index) => {
                return <Videogame key={index} {...videogame} />
            })}
        </div>
       
            {stateSearch? null: <Paginated/>}
        </div>
    )
}

export default VideogameList;