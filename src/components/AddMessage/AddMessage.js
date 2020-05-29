import React from 'react';
import {
    Route,
    Switch,
    Redirect,
    Link
  } from "react-router-dom";

class AddMessage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: '',
            submited: false
        }

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        alert(`Сообщение откравлено студенту ${this.state.value}`);
        e.preventDefault();
        this.setState({
            submited: !this.state.submited
        });
        // this.props.h
        //перейти на роут список студентов?
    }

    handleChange = (e) =>{
        this.setState({
            value: e.target.value
        })
    }



    render() {
        return (
            <div className="students">
                <h2>Write message to the student</h2>
                <form onSubmit={this.handleSubmit}>
                    <input className="input" type="text" value={this.state.value} onChange={this.handleChange}/><br />
                    <textarea></textarea><br />
                    <input type="submit" value="Submit form"></input>
                </form>
                <Switch>
                   {this.state.submited ? <Redirect from='/addmessage' to='/'></Redirect> : null} //тут не уверена
                </Switch>
            </div>
        );
    }
}

export default AddMessage;