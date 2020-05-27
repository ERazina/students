import { createStore } from 'redux';
const initialState = {
    students: [ "Steve Jobs", "Bill Gates"]
}

function studentsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_STUDENT':
      return state.concat([action.payload])
    default:
      return state
  }
}


const store = createStore(studentsReducer)