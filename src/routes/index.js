import React from 'react'
import { Route, Switch } from 'react-router'
import Login from '../view/container/login'
import Deshboard from '../view/container/Deshboard'
import Des from '../view/container/Des'
import Semester from '../view/container/Semester'
import Learn from '../view/container/LearnManage'
import SubJect from '../view/container/Subject'
import Student from '../view/container/Student/index1'
import Teacher from '../view/container/Teacher'
import Junior from '../view/container/Student/Junior'
import TableClass from '../view/container/Student/Junior/TableDetail'

import Cart from '../view/container/Deshboard/statistics'

const routes = (
  <Switch>
            <Route exact  path="/" component={Deshboard}/>
            <Route exact path="/deshboard" component={Des}/>
            <Route exact path="/semester" component={Semester}/>
            <Route exact path="/learnning_management" component={Learn}/>
            <Route exact path="/sub" component={SubJect}/>
            <Route exact path="/student" component={Student}/>
            <Route exact path="/student/junior" component={Junior}/>
            <Route exact path="/student/junior/:classNo" component={TableClass}/>
            <Route exact path="/teacher" component={Teacher}/>
  </Switch>
)

export default routes



