const initialState = {
  showPage:"construction",
  // showPage:"home",
  // test2:"hey"
}

export default (state = initialState, action) => {
  switch (action.type) {
   case 'UPDATE_STORE':
    return {
      ...state,
     [action.name]: action.value
    }
   default:
    return state
  }
 }