import React, { Component } from 'react';
import Login from '../src/view/container/login'
import Deshboard from '../src/view/container/Deshboard'
import NotFound from '../src/view/container/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  BrowserRouter,
  Switch
} from 'react-router-dom'



class App extends Component {
  renderRouter(){
    return(
      <Router basename="/"> 
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/login" component={Login}/>
            <Route  path="/" component={Deshboard}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
    )
  }
  render() {
    return (
      <div>
        <BrowserRouter>{this.renderRouter()}</BrowserRouter>
      </div>
    );
  }
}

export default App;
