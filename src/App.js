import React from 'react';
import Students from './components/Students/Students';
import AddMessage from './components/AddMessage/AddMessage';
import './App.scss';
import ReactTooltip from "react-tooltip";
import {connect} from "react-redux";
// import { addStudent } from './redux/actions/actions';
import AddStudent from './components/AddStudent/AddStudent';
import {visiibleAddForm} from './redux/actions/actions';

import {
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';


class App extends React.Component {
render() {
 
  const { history } = this.props;
  return(
    <div className="App">
      <h1>Students React App</h1>
      <div className="menu">
        <Link className='SectionNavigation-Item Section' to="/students">
          <span className='Section-Title'>Students list</span>
        </Link>
        <br />
        <Link className='SectionNavigation-Item Section' to="/addmessage">
          <span className='Section-Title'>Add message</span>
        </Link>
      </div>
      <ReactTooltip />
      {
        this.props.visible ? <AddStudent /> : null
      }
     <FontAwesomeIcon data-tip="add new student" className="icon" icon={faUserPlus} onClick={() => {
       this.props.visiibleAddForm(true)}}/>
      <Switch>
          <Route history={history} path='/students' component={Students} />
          <Route history={history} path='/addmessage' component={AddMessage} />
          <Redirect from='/' to='/students'/>
        </Switch>
    </div>
  )}

}
const mapStateToProps = function(state, ownProps){
  return{ visible: state.visible}
};


export default connect(mapStateToProps, {visiibleAddForm})(App);
