import React from 'react';
import { connect } from "react-redux";
import {addStudent}  from "../../redux/actions/actions";

class AddStudent extends React.Component {

    state = {
        value: ""
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addStudent(this.state.value); //dispatch
        this.props.onSubmit();
    }

    render() {

        return (
            
            <div className="students">
               <form onSubmit={this.onSubmit}>
                   <input type="text" onChange={this.handleChange} value={this.state.value}></input>
                   <input type="submit"></input>
               </form>
            </div>
        );
    }
}

export default connect(null, {addStudent})(AddStudent);