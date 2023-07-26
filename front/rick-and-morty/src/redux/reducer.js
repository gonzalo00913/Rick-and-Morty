export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";


const initialState = {
  myFavorites: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return { ...state, myFavorites: [...state.myFavorites, action.payload] };
    case REMOVE_FAVORITE:
      return { 
        ...state, 
        myFavorites: state.myFavorites.filter(charact => charact.id !== action.payload )};
    default:
      return { ...state };
  }
}

export default rootReducer;