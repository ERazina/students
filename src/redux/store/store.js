import { createStore } from 'redux'
import {studentsFunc} from './../reducers/students'
let store = createStore(studentsFunc);
import {
  addStudent,
  deleteStudent,
  changeStudent,
} from './actions/actions';


// function studentsReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'ADD_STUDENT':
//       return state.concat([action.payload])
//     default:
//       return state
//   }
// }

