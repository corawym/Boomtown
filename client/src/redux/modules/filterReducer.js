const SET_FILTER_TAGS = 'SET_FILTER_TAGS';

export const setFilterTags = (tags) => ({
  type:SET_FILTER_TAGS,
  payload: tags
});

const initialState = {
  filteredTags:[]
}

export default (state=initialState, action) => {
  switch(action.type){
    case SET_FILTER_TAGS:
      return {
        ...state,
        filteredTags: action.payload
      }
    default:
      return state
  }
}