import {
  GET_VIDEOGAMES,
  GET_VIDEOGAME_DETAIL,
  GET_GENRES,
  GET_PLATFORMS,

  CLEAN_VIDEOGAME_DETAIL,
  CLEAN_VIDEOGAMES,
  CHANGE_FILTER_BY_GENRE,
  CHANGE_FILTER_BY_PLATFORM,
  CHANGE_FILTER_BY_SOURCE,
    CHANGE_STATE_SEARCH,
} from "./actions";

const initialState = {
  videogames: [],
  videogameDetail: {},
  genres: [],
  platforms: [],
  sources: [
    { id: 1, name: "api" },
    { id: 2, name: "bd" },
  ],
    filterByGenre: "",
    filterByPlatform: "",
    filterBySource: "",
    stateSearch: false,


};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
      };
    case GET_VIDEOGAME_DETAIL:
      return {
        ...state,
        videogameDetail: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload,
      };
    case CLEAN_VIDEOGAME_DETAIL:
      return {
        ...state,
        videogameDetail: {},
      };
    case CLEAN_VIDEOGAMES:
      return {
        ...state,
        videogames: [],
      };
    case CHANGE_FILTER_BY_GENRE:
      return {
        ...state,
        filterByGenre: action.payload,
      };
    case CHANGE_FILTER_BY_PLATFORM:
      return {
        ...state,
        filterByPlatform: action.payload,
      };
    case CHANGE_FILTER_BY_SOURCE:
      return {
        ...state,
        filterBySource: action.payload,
    };
    case CHANGE_STATE_SEARCH:
        return {
            ...state,
            stateSearch: action.payload,
        };


    default:
      return state;
  }
};

export default rootReducer;
