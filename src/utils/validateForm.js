 const validateForm = (videogame) => {
    const errors = {};
  
    // Validar el campo "name"
    if (videogame.name.trim() === "") {
      errors.name = "Name field is required";
    }

       // Validar el campo "image"
       if (videogame.image.trim() === "") {
        errors.image = "Image field is required";
    }
  
    // Validar el campo "description"
    if (videogame.description.trim() === "") {
      errors.description = "Description field is required";
    }
  
    // Validar el campo "released"
    const releasedDate = new Date(videogame.released);
    if (isNaN(releasedDate.getTime())) {
      errors.released = "Released field must be a valid date";
    }
  
    // Validar el campo "rating"
    const rating = parseFloat(videogame.rating);
    if (isNaN(rating) || rating < 0 || rating > 5) {
      errors.rating = "Rating field must be a number between 0 and 5";
    }
  
    // Validar el campo "platforms"
    if (videogame.platforms.length === 0) {
      errors.platforms = "At least one platform must be selected";
    }
  
    // Validar el campo "genres"
    if (videogame.genres.length === 0) {
      errors.genres = "At least one genre must be selected";
    }
  
    // Validar el campo "image"
    if (videogame.image.trim() === "") {
      errors.image = "Image field is required";
    }
  
    return errors;
  }

export default validateForm;