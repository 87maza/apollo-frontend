import React from 'react'
import { HashRouter } from 'react-router-dom'
import Router from './routes/MainRouter.component'
import { ApolloProvider } from 'react-apollo'
import 'semantic-ui-css/semantic.min.css'
import { client } from './graphql'

const App: React.FC = (props: any) => (
  <HashRouter>
    {/* insert all the providers and mainrouters before the app */}
    <ApolloProvider client={client}>
      <div className="App">
        <Router />
        {/* <header className="App-header">TESTING</header> */}
      </div>
    </ApolloProvider>
  </HashRouter>
)

export default App
