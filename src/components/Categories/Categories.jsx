import Categorie from "../Categorie/Categorie";


const CategoriesList = (props) => {
    const { genres, platforms, sources } = props;
  


    return (
        <div>
            <h1>Platform</h1>
            <ul>
                {platforms.map((platform, index) => {
                    return <Categorie key={index} name={platform.name} nameCategorie={"platform"} />
                })}
            </ul>
            <h1>Genres</h1>
            <ul>
                {genres.map((genre, index) => {
                    return <Categorie key={index} name={genre.name} nameCategorie={"genre"} />
                })}
            </ul>
            <h1>Sources</h1>
            <ul>
                {sources.map((source, index) => {
                    return <Categorie key={index} name={source.name} nameCategorie={"source"}/>
                })}
            </ul>

        </div>
    )
}

export default CategoriesList;