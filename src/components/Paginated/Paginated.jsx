import {useSelector, useDispatch} from "react-redux";
import {changePage} from "../../redux/actions"
import style from './_Paginated.module.scss';
const  Paginated = () => {
        const page = useSelector((state) => state.page);
        const dispatch = useDispatch();
        const videogames = useSelector((state) => state.videogames);

const handlePrev = () => {
    if (page > 1){
        const pagePrev = page - 1;
        dispatch(changePage(pagePrev));       
}
}
const handleNext = () => {
    if(videogames.length >= 15){
        const pageNext = page + 1;
        dispatch(changePage(pageNext));
    }
    
}

    return (
        <div className={style.Container}>
            <button onClick={handlePrev} className={style.Button}>
                <span>Prev</span>
            </button>
            <span>{`-${page}-`}</span>
            <button onClick={handleNext} className={style.Button}>
                <span>Next</span>
            </button>
        </div>
    )

}

export default Paginated;