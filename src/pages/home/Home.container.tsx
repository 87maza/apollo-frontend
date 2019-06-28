import { compose, lifecycle } from 'recompose'
import { withRouter } from 'react-router'
import HomeComponent from './Home.component'
// import withAuthHOC from '../../higher-order-components/withAuth'

const container = (component: any) =>
  compose<any, any>(
    withRouter
    // withAuthHOC,
  )(component)

const HomeContainer = container(HomeComponent)

export default HomeContainer
