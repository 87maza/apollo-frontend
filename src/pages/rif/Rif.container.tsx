import { compose } from 'recompose'
import { withRouter } from 'react-router'
import RifComponent from './Rif.component'
import { withApollo } from 'react-apollo'

const container = (component: any) =>
  compose<any, any>(
    withRouter,
    withApollo
  )(component)

const RifContainer = container(RifComponent)

export default RifContainer
