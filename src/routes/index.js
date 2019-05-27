import React from 'react'
import { Route, Switch } from 'react-router'
import Login from '../view/container/login'
import Deshboard from '../view/container/Deshboard'
import Semester from '../view/container/Semester'
import Learn from '../view/container/LearnManage'
import SubJect from '../view/container/Subject'
import Student from '../view/container/Student'
import Teacher from '../view/container/Teacher'

import Cart from '../view/container/Deshboard/statistics'

const routes = (
  <Switch>
     <Route exact path="/deshboard" component={Deshboard}/>
     <Route  path="/deshboard/card" component={Cart}/>
     <Route  path="/deshboard/semester" component={Semester}/>
     <Route  path="/deshboard/learnning_management" component={Learn}/>
     <Route  path="/deshboard/sub" component={SubJect}/>
     <Route  path="/deshboard/student" component={Student}/>
     <Route  path="/deshboard/teacher" component={Teacher}/>
  </Switch>
)

export default routes



