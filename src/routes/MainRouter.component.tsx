import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import HomeContainer from '../pages/home/Home.container'

const Router = () => (
  <div className="main-content-area">
    <Switch>
      {/* insert the login/signin authcontainer, todos display */}
      <Route path="/" component={HomeContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
)

export default Router
