const ExtraVideogame = (props) => {
    const { genres, released, rating } = props;
    return (
        <div>
            <h2>Genres</h2>
            <ul>
                {genres.map((genre, index) => {
                    return <li key={index}>{genre}</li>
                }
                )}
            </ul>
            <h2>Released</h2>
            <p>{released}</p>
            <h2>Rating</h2>
            <p>{rating}</p>
        </div>
    )
}

export default ExtraVideogame;