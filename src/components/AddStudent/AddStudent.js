import React from 'react';
import { connect } from "react-redux";
import {addStudent}  from "../../redux/actions/actions";

class AddStudent extends React.Component {

    state = {
        value: ""
    }

    // handleSubmit(event) {
    //     alert('Отправленное имя: ' + this.state.value);
    //     event.preventDefault();
    //     }

    handleChange = (event) => {
        // event.preventDefault();
        this.setState({value: event.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addStudent(this.state.value); //dispatch
        // addStudent(this.state.value)
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

// const mapStateToProps = function(state) {
//     console.log(this.state)
//     return {
//       student: state.student
//     }
// }

// const mapDispatchToProps = {addStudent};

export default connect(null, {addStudent})(AddStudent);