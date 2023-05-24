import Videogame from "../Videogame/Videogame";
import {useSelector} from 'react-redux';

const VideogameList = ()=> {
    const videogames = useSelector((state) => state.videogames)

    
    
    return (
        <div>
            {videogames.map((videogame, index) => {
                return <Videogame key={index} {...videogame} />
            })}

        </div>
    )
}

export default VideogameList;