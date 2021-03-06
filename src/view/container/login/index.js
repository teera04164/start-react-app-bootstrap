import React, { Component } from 'react';
import $ from "jquery";
import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  BrowserRouter,
  Switch
} from 'react-router-dom'
import { Button } from 'antd';


class Login extends Component {
    constructor() {
        super();
        this.state  = {
          redirectToReferrer : false
        };
        
    }
    componentDidUpdate() {
        
    }
    handleClickLogin = () => {
      this.setState({redirectToReferrer : true})
    }

    
    render() {
      const { redirectToReferrer } = this.state;
      if (redirectToReferrer === true) {
          return (<Redirect to='/deshboard' />);
      }

        return (
            <React.Fragment>


            <div class="container">
            <div class="row">
              <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                  <div class="card-body">
                    <h5 class="card-title text-center">Sign In</h5>
                    <form class="form-signin">
                      <div class="form-label-group">
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                        <label for="inputEmail">Email address</label>
                      </div>
        
                      <div class="form-label-group">
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                        <label for="inputPassword">Password</label>
                      </div>
        
                      <div class="custom-control custom-checkbox mb-3">
                        <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                        <label class="custom-control-label" for="customCheck1">Remember password</label>
                      </div>
                      <button onClick ={this.handleClickLogin} class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                      <hr class="my-4"/>
                      <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
                      <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </React.Fragment>
           
        )
    }
}
export default Login;
