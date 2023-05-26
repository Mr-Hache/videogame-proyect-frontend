import {
  GET_VIDEOGAMES,
  GET_VIDEOGAME_DETAIL,
  GET_GENRES,
  GET_PLATFORMS,

  CLEAN_VIDEOGAME_DETAIL,
  CLEAN_VIDEOGAMES,
  CHANGE_FILTER,
    CHANGE_STATE_SEARCH,
    CHANGE_PAGE,
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
filter:{
    filterByGenre: { id: 0, name: "all" },
    filterByPlatform: { id: 0, name: "all" },
    filterBySource: { id: 0, name: "all"}
},
    stateSearch: false,
    page : 1,


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
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    
    case CHANGE_STATE_SEARCH:
        return {
            ...state,
            stateSearch: action.payload,
        };
    case CHANGE_PAGE:
        return {
            ...state,
            page: action.payload,
        };


    default:
      return state;
  }
};

export default rootReducer;
