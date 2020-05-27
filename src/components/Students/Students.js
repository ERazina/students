import React from 'react';
import { connect } from "react-redux";
import {addStudent}  from "./../../redux/actions/actions";

class Students extends React.Component {
    render() {

        let list = this.props.students.map((student) => {
        return <li key={student}>{student}<button>Change</button><button>Delete</button></li>});

        return (
            <div className="students">
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

export default connect(mapStateToProps)(Students);