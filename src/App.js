import React from 'react';
import Students from './components/Students/Students';
import AddMessage from './components/AddMessage/AddMessage';
import './App.scss';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  Link
} from "react-router-dom";

class App extends React.Component {
render() {
  const { history } = this.props;
  return(
    <div className="App">
      <h1>Students React App</h1>
      <div className="menu">
        <Link className='SectionNavigation-Item Section' to="/students">
          <span className='Section-Title'>Students</span>
        </Link>
        <br />
        <Link className='SectionNavigation-Item Section' to="/addmessage">
          <span className='Section-Title'>Add message</span>
        </Link>
      </div>
      <Switch>
          <Route history={history} path='/students' component={Students} />
          <Route history={history} path='/addmessage' component={AddMessage} />
          <Redirect from='/' to='/students'/>
        </Switch>
    </div>
  )}
}

export default App;
