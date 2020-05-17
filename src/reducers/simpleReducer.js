const initialState = {
  // showPage:"construction",
  showPage:"home",
  // test2:"hey"
  fname:"",
  lname:"",
  mail:"",
  subject:"",
  message:"",
  errMessage:""
}

export default (state = initialState, action) => {
  switch (action.type) {
   case 'UPDATE_STORE':
    return {
      ...state,
     [action.name]: action.value
    }
    case 'UPDATE_WITH_STATE':
      var oldState = {...state}
      var keys = Object.keys(action.newState)
      keys.forEach(key=>{
        oldState[key]=action.newState[key]
      })
      return oldState
   default:
    return state
  }
 }