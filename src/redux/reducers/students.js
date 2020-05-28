import {ADD_STUDENT, DELETE_STUDENT, CHANGE_STUDENT, VISIBILITY_ADD_FORM} from './../actions/actions';
const initialState = {
    students: ['Steve Jobs', 'Bill Gates', "New student"],
    visibilityAddForm: false
}
  
export default function studentsFunc(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }
    else{
        switch (action.type) {
            case ADD_STUDENT:
            return Object.assign({}, state, {
                students: state.students.concat([action.student])
            })
            case DELETE_STUDENT:
                return Object.assign({}, state, {
                    students: state.students.concat().filter((item) => item !== action.student)
            })
            case CHANGE_STUDENT:
                return Object.assign([], state, {
                    student: action.student
            })
            case VISIBILITY_ADD_FORM:
                return Object.assign({}, state,{
                    visible: action.visible
                })
            default:
            return state
            }
    }
}