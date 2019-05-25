import React, { Component } from 'react';
import Login from '../src/view/container/login'
import Deshboard from '../src/view/container/Deshboard'
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
        // <Router  basename="/logical">
      <Router basename="/"> 
          <Switch>
          <Route exact path="/" component={Login}/>
            <Route exact path="/login" component={Login}/>
            <Route  path="/deshboard" component={Deshboard}/>
            {/* <Route path="/ipwan" component={IpWan}/>
            <Route path="/vlan" component={Vlan}/>
            <Route path="/vprn" component={Vprn}/>
            <Route path="/iplan" component={IpLan} />
            <Route path="/ipNms" component={IpNms} />
            <Route path="/ipsw" component={IpSW} /> */}
            {/* <Route component={NotFound}/> */}
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
