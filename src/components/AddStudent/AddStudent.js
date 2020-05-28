import React from 'react';
import { connect } from "react-redux";
import {addStudent}  from "../../redux/actions/actions";

class AddStudent extends React.Component {

    render() {

        return (
            
            <div className="students">
               <form>
                   <input type="text"></input>
                   <input type="submit"></input>
               </form>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {
      student: state.student
    }
}

const mapDispatchToProps = {addStudent};

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);