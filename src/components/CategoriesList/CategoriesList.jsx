import Categorie from "../Categorie/Categorie";

const CategoriesList = (props) => {
    const {categories,title} = props;
  
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {categories?.map((categorie, index) => {
                    return <Categorie key={index} categorie={categorie} nameCategorie={title}/>
                })}
            </ul>
        </div>
    )
}

export default CategoriesList;