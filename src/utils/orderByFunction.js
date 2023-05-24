const orderByFunction = (videogamesCopy, orderBy) => {
    let videogamesOrdered = []
    if (orderBy === "ratingASC") {
        videogamesOrdered = videogamesCopy.sort((a, b) => a.rating - b.rating)
    }
    if (orderBy === "ratingDESC") {
        videogamesOrdered = videogamesCopy.sort((a, b) => b.rating - a.rating)
    }
    if (orderBy === "nameASC") {
        videogamesOrdered = videogamesCopy.sort((a, b) => a.name.localeCompare(b.name))
    }
    if (orderBy === "nameDESC") {
        videogamesOrdered = videogamesCopy.sort((a, b) => b.name.localeCompare(a.name))
    }

    return videogamesOrdered

}

export default orderByFunction