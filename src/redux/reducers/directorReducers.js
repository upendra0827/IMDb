const initialState = {
    directors: [],
}


export const directorReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_DIRECTORS':
            return { ...state, directors: payload }
        default:
            return state
    }
}

export const selectedDirectorReducer = (state = [], { type, payload }) => {
    switch (type) {
        case 'SELECTED_DIRECTOR':
            return { ...state, ...payload }
        case 'REMOVE_SELECTED_DIRECTOR':
            return {}
        default:
            return state
    }
}

export const allDirectedMoviesReducer = (state = [], { type, payload }) => {
    switch (type) {
        case 'ALL_DIRECTED_MOVIES':
            return { ...state, ...payload }
        default: 
            return state
    }
}

export const genreReducer = (state = [], { type, payload }) => {
    switch (type) {
        case 'GENRE':
            return { ...state, ...payload }
        default: 
            return state
    }
}

export const genreTypeReducer = (state = '', { type, payload }) => {
    switch (type) {
        case 'GENRETYPE':
            return  { payload }
        default: 
            return state
    }
}