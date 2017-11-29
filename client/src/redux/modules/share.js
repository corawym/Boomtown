// Action types
const SET_SELECTED_TAGS = 'SET_SELECTED_TAGS';
const SET_STEP_INDEX = 'SET_STEP_INDEX';
const SET_IMAGE_FILE = 'SET_IMAGE_FILE';
const SET_IMAGE_DATA = 'SET_IMAGE_DATA';
const RESET_SHARE = 'RESET_SHARE';

// Action
export const setSelectedTags = (selectedTags) => ({
  type:SET_SELECTED_TAGS,
  payload:selectedTags
});
export const setStepIndex = (stepIndex) => ({
  type:SET_STEP_INDEX,
  payload:stepIndex
})
export const setImageFile = (imageFile) => ({
  type:SET_IMAGE_FILE,
  payload:imageFile
})
export const setImageData = (imageData) => ({
  type:SET_IMAGE_DATA,
  payload:imageData
})
export const resetShare = () => ({
  type: RESET_SHARE,
})

// Reducer
const initialState = {
  selectedTags:[],
  stepIndex:0,
  imageFile:null,
  imageData:null,
  shareCreated:`${(new Date(Date.now() - ((new Date()).getTimezoneOffset() * 60000))).toISOString().slice(0, -1).replace('T', ' ')}-07`
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
    case SET_IMAGE_FILE:
      return{
        ...state,
        imageFile:action.payload
      }
    case SET_IMAGE_DATA:
      return {
        ...state,
        imageData:action.payload
      }
    case RESET_SHARE: 
      return {
        // ...state,
        selectedTags:[],
        stepIndex:0,
        imageFile:null,
        imageData:null,
        shareCreated:`${(new Date(Date.now() - ((new Date()).getTimezoneOffset() * 60000))).toISOString().slice(0, -1).replace('T', ' ')}-07`
      }
    default:
      return state
  }
}