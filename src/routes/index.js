import React from 'react'
import { Route, Switch } from 'react-router'
import Login from '../view/container/login'
import Deshboard from '../view/container/Deshboard'
import Des from '../view/container/Des'
import Semester from '../view/container/Semester'
import Learn from '../view/container/LearnManage'
import SubJect from '../view/container/Subject'
import Student from '../view/container/Student'
import Teacher from '../view/container/Teacher'

import Cart from '../view/container/Deshboard/statistics'

const routes = (
  <Switch>
            <Route exact  path="/" component={Deshboard}/>
            <Route  path="/deshboard" component={Des}/>
            <Route  path="/semester" component={Semester}/>
            <Route  path="/learnning_management" component={Learn}/>
            <Route  path="/sub" component={SubJect}/>
            <Route  path="/student" component={Student}/>
            <Route  path="/teacher" component={Teacher}/>
  </Switch>
)

export default routes



