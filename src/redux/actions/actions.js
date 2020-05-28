/*
 * action types
 */

export const ADD_STUDENT = "ADD_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const CHANGE_STUDENT = "CHANGE_STUDENT";
export const VISIBILITY_ADD_FORM = "VISIBILITY_ADD_FORM";
// export const MESSAGE_FORM = "";

export function visiibleAddForm(flag){
    return {
        type: VISIBILITY_ADD_FORM,
        visible: flag
    }
}
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
    console.log(student);
    return {
        type: DELETE_STUDENT,
        student
    }
}

export function changeStudent(student){
    return {
        type: CHANGE_STUDENT,
        student
    }
}

export function addMessage(student, message){
    return {
        type: CHANGE_STUDENT,
        student
    }
}

