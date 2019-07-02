import { compose } from 'recompose'
import { withRouter } from 'react-router'
import HomeComponent from './Home.component'
import { withApollo } from 'react-apollo'

const container = (component: any) =>
  compose<any, any>(
    withRouter,
    withApollo
  )(component)

const HomeContainer = container(HomeComponent)

export default HomeContainer
