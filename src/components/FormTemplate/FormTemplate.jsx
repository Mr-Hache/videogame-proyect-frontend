

const FormTemplate = (props) => {

    const { handleSubmit, handleInputChange, handlePlatforms, handleGenres, videogame, platforms, genres, name, id, validateId } = props;
    let validateBoton = false;
    if(id){
        if(validateId){
            validateBoton = true;
        }
    }else {
        validateBoton = true;
    }
    return (
        <div>
        
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
            {platforms.map((platform, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        name={platform.name}
                        value={platform.id}
                        onChange={handlePlatforms}
                    />
                    <label>{platform.name}</label>
                </div>
            ))}
            <label>Genres</label>
            {genres.map((genre, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        name={genre.name}
                        value={genre.id}
                        onChange={handleGenres}
                    />
                    <label>{genre.name}</label>
                </div>
            ))}
            {validateBoton ? <button type="submit" >{name}</button> : <span>this game cannot be updated </span>}
            
        </form>
    </div>
    )
}

export default FormTemplate;