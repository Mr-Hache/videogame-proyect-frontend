import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import style from './_NavBar.module.scss';
import iconVideogame from '../../images/iconVideogame.png'
import info from '../../images/info.png'
import addVideogame from '../../images/addVideogame.png'
import logo from '../../images/logo.png'
import { changeFilter } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const NavBar = () => {
    const dispatch = useDispatch();

   const handleOnClick = () => {
        dispatch(changeFilter(
            {
                filterByGenre:{id:0, name:"all"},
                filterByPlatform:{id:0, name:"all"},
                filterBySource:{id:0, name:"all"}

            }
        ))
    }
          
    return (
        <div className={style.Container}>
<img src={logo} alt="logo" className={style.Image_icon} />

            <SearchBar></SearchBar>
           
           
           <Link to="/home" style={{textDecoration: 'none'}}>
                <button  onClick={handleOnClick}
                className={style.button_1}
               
                ><img src={iconVideogame} className={style.button_1__image} alt="iconVideogame"/>List</button>
            </Link>
            <Link to="/about" style={{textDecoration: 'none'}}>
                <button  className={style.button_2}>{<img src={info} className={style.button_2__image} alt="iconInfo"/>}About</button>
            </Link>
            <Link to="/formAddVideogame" style={{textDecoration: 'none'}}>
                <button className={style.button_3}><img src={addVideogame} className={style.button_3__image} alt="iconAdd"/>Add</button>
            </Link>

           

           
       
        </div>
    )
}

export default NavBar;