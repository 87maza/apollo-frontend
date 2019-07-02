import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import HomeContainer from '../pages/home/Home.container'
import RifContainer from '../pages/rif/Rif.container'

const Router = () => (
  <div className="main-content-area">
    <Switch>
      {/* insert the login/signin authcontainer, todos display */}
      <Route path="/" component={HomeContainer} />
      <Route path="/rif" component={RifContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
)

export default Router
