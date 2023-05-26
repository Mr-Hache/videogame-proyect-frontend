import style from './_FormTemplate.module.scss';

const FormTemplate = (props) => {

    const { handleSubmit, handleInputChange, handlePlatforms, handleGenres, videogame, platforms, genres, name, id, validateId, handleDeletePlatform, handleDeleteGenre } = props;
    let validateButton = false;
    if (id) {
        if (validateId) {
            validateButton = true;
        }
    } else {
        validateButton = true;
    }
    return (
        <div className={style.Container}>

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={videogame.name}
                    onChange={handleInputChange}
                />
                <label>Image</label>
                <input
                    type="text"
                    name="image"
                    value={videogame.image}
                    onChange={handleInputChange}
                />
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    value={videogame.description}
                    onChange={handleInputChange}
                />
                <label>Released</label>
                <input
                    type="date"
                    name="released"
                    value={videogame.released}
                    onChange={handleInputChange}
                />
                <label>Rating</label>
                <input
                    type="text"
                    name="rating"
                    value={videogame.rating}
                    onChange={handleInputChange}
                />
                <label>Platforms</label>
                <select name="platforms" onChange={handlePlatforms}>
                    {platforms.map((platform, index) => (
                        <option key={index} value={platform.name}>
                            {platform.name}
                        </option>
                    ))}
                </select>
                <label>List platforms select</label>
               {videogame.platforms.length>0? <ul>
                   {videogame.platforms.map((platform, index) => (
                        <li key={index}>{platform}<button value={platform} onClick={handleDeletePlatform}>x</button></li> 
                        
                    ))}
                </ul>: <span>Oops!, add platforms </span>}
            
                <label>Genres</label>
                <select name="genres" onChange={handleGenres}>
                    {genres.map((genre, index) => (
                        <option key={index} value={genre.name}>
                            {genre.name}
                        </option>
                    ))}
                </select>
                <label>List genres select</label>
                {videogame.genres.length>0? <ul>
                    {videogame.genres.map((genre, index) => (
                        <li key={index}>{genre}<button value={genre} onClick={handleDeleteGenre}>x</button></li>

                    ))}
                </ul>: <span>Oops!, add genres </span>}
               

                {validateButton ? <button type="submit" >{name}</button> : <span>this game cannot be updated </span>}

            </form>
        </div>
    )
}

export default FormTemplate;