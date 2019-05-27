import React from 'react'
import { Route, Switch } from 'react-router'
import Login from '../view/container/login'
import Deshboard from '../view/container/Deshboard'

import Cart from '../view/container/Deshboard/statistics'

const routes = (
  <Switch>
     <Route exact path="/" component={Login}/>
     <Route exact path="/login" component={Login}/>
     <Route exact path="/deshboard" component={Deshboard}/>
     <Route exact path="/deshboard/card" component={Cart}/>

  </Switch>
)

export default routes



