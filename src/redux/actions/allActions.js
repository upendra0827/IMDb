import axios from "axios"

export const setDirector = (director) => {
    return {
        type: 'SET_DIRECTORS',
        payload: director,
    }
}

export const selectedDirector = (director) => {
    return {
        type: 'SELECTED_DIRECTOR',
        payload: director,
    }
}

export const removeSelectedDirector = () => {
    return {
        type: 'REMOVE_SELECTED_DIRECTOR',
    }
}

// TO GET ALL MOVIES 

export const allDirectedMovies = directors => {
    return {
        type: 'ALL_DIRECTED_MOVIES',
        payload: directors
    }
}

// TO GET EACH GENRE MOVIE 

export const genre = directors => {
    return {
        type: 'GENRE',
        payload: directors
    }
}

export const genreType = directors => {
    return {
        type: 'GENRETYPE',
        payload: directors
    }
}