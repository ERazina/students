/*
 * action types
 */

export const ADD_STUDENT = "ADD_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";


/*
* action generators
*/

export function addStudent(student){
    return {
        type: ADD_STUDENT,
        student
    }
}

export function deleteStudent(student){
    return {
        type: DELETE_STUDENT,
        student
    }
}
// dispatch(addStudent("Elina Razina"));

