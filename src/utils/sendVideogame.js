export const sendVideogameAdd = async (videogame) => {
  videogame.rating = parseFloat(videogame.rating);
  videogame.genres = videogame.genres.map((genre) => parseInt(genre));
  videogame.platforms = videogame.platforms.map((platform) =>
    parseInt(platform)
  );
  try {
    const response = await fetch(
      "https://videogames-project-backend.vercel.app/videogames",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(videogame),
      }
    );

    if (response.ok) {
      return `Videogame with name ${videogame.name} successfully sent `;
    } else {
      return "Failed to send videogame";
    }
  } catch (error) {
    window.console.error(error)
  }
};

// export const sendVideogameUpdate = async (videogame, id) => {
//   videogame.rating = videogame.rating ? parseFloat(videogame.rating) : null;
//   videogame.genres =
//     videogame.genres.length > 0
//       ? videogame.genres.map((genre) => parseInt(genre))
//       : null;
//   videogame.platforms =
//     videogame.platforms.length > 0
//       ? videogame.platforms.map((platform) => parseInt(platform))
//       : null;

//   const videogameUpdate = {
//     name: videogame.name ? videogame.name : null,
//     description: videogame.description ? videogame.description : null,
//     released: videogame.released ? videogame.released : null,
//     rating: videogame.rating ? videogame.rating : null,
//     genres: videogame.genres ? videogame.genres : null,
//     platforms: videogame.platforms ? videogame.platforms : null,
//   };

//   try {
//     const response = await fetch(
//       `https://videogames-project-backend.vercel.app/videogames/${id}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(videogameUpdate),
//       }
//     );

//     if (response.ok) {
//       return "Videogame successfully updated";
//     } else {
//       return "not is possible update this videogame";
//     }
//   } catch (error) {
//   console.log(error);
//   }
// };



export const sendVideogameUpdate = async (videogame, id) => {
  try {
    videogame.rating = videogame.rating ? parseFloat(videogame.rating) : null;
    videogame.genres =
      videogame.genres.length > 0
        ? videogame.genres.map((genre) => parseInt(genre))
        : null;
    videogame.platforms =
      videogame.platforms.length > 0
        ? videogame.platforms.map((platform) => parseInt(platform))
        : null;

    const videogameUpdate = {
      name: videogame.name ? videogame.name : null,
      description: videogame.description ? videogame.description : null,
      released: videogame.released ? videogame.released : null,
      rating: videogame.rating ? videogame.rating : null,
      genres: videogame.genres ? videogame.genres : null,
      platforms: videogame.platforms ? videogame.platforms : null,
      image: videogame.image ? videogame.image : null,
    };

    const response = await fetch(
      `https://videogames-project-backend.vercel.app/videogames/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(videogameUpdate),
      }
    );

    if (response.ok) {
      return "Videogame successfully updated";
    } else {
      return "It is not possible to update this videogame";
    }
  } catch (error) {
    // Aquí puedes manejar el error como desees, por ejemplo, enviarlo a un servicio de registro de errores
    // o simplemente ignorarlo y no hacer nada
    console.log(error);
  }
}



