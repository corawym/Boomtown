const SET_SELECTED_TAGS = 'SET_SELECTED_TAGS';
const SET_STEP_INDEX = 'SET_STEP_INDEX';

export const setSelectedTags = (selectedTags)=>({
  type:SET_SELECTED_TAGS,
  payload:selectedTags
});

export const setStepIndex = (stepIndex) =>({
  type:SET_STEP_INDEX,
  payload:stepIndex
})

const initialState ={
  selectedTags:[],
  stepIndex:0
}

export default (state=initialState, action) => {
  switch(action.type){
    case SET_SELECTED_TAGS:
      return{
        ...state,
        selectedTags: action.payload
      }
    case SET_STEP_INDEX:
      return{
        ...state,
        stepIndex:action.payload
      }
    default:
      return state
  }
}