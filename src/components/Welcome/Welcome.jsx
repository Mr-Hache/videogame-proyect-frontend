import {Link}  from 'react-router-dom';
import style from './_Welcome.module.scss';
import buttonWelcome2Audio from './../../audios/buttonWelcome2.mp3';

const audioButton2 = new Audio (buttonWelcome2Audio);
audioButton2.volume = 0.1;


const playAudioButton2 = () => {
    audioButton2.play();
}
 
const Welcome = () => {
    return (
        <div className={style.Container}>
            <h1 className={style.title}>Welcome to Videogames App</h1>
            <Link to='/home'>
            <span className={style.link_left}>Videogames</span>
            </Link>
            <Link to='/about'>
                <span onClick={playAudioButton2} className={style.link_right}>About</span>
            </Link>

        
        </div>
    )
}

export default Welcome;