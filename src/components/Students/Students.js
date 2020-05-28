import React from 'react';
import { connect } from "react-redux";
import {addStudent, deleteStudent}  from "./../../redux/actions/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Students.scss';
import ReactTooltip from "react-tooltip";

class Students extends React.Component {
    render() {

        let list = this.props.students.map((student) => {
            return (
                <li key={student}>{student}
                    <button>Change</button>
                    <FontAwesomeIcon data-tip="delete student" icon={faTrashAlt} className="icon" onClick={() => {this.props.deleteStudent(student)}} />
                </li>
            )
        });

        return (

            <div className="students">
                <ReactTooltip />
                <ol>
                    {list}
                </ol>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {
      students: state.students
    }
}

// const mapDispatchToProps = {deleteStudent};

export default connect(mapStateToProps, {deleteStudent})(Students);