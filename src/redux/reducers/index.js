import { combineReducers } from "redux"
import { directorReducer, selectedDirectorReducer,  allDirectedMoviesReducer} from "./directorReducers"
import { genreReducer, genreTypeReducer } from "./directorReducers"

export const reducers = combineReducers({
    allDirectors: directorReducer,
    director: selectedDirectorReducer,
    getAllMovies: allDirectedMoviesReducer,
    genreType: genreTypeReducer,
    genreMovie: genreReducer    
})