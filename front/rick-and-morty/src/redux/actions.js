const ADD_FAVORITE = "ADD_FAVORITE"
const REMOVE_FAVORITE = "REMOVE_FAVORITE"

export const addFavorite = (character) =>{
    return {type: ADD_FAVORITE, payload:character}
}

export const removeFavorite = (id) => {
    return {type: REMOVE_FAVORITE, payload: id}
}