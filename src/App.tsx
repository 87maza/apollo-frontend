import React from 'react'
import { HashRouter } from 'react-router-dom'
import Router from './routes/MainRouter.component'
import 'semantic-ui-css/semantic.min.css'

const App: React.FC = () => {
  return (
    <HashRouter>
      {/* insert all the providers and mainrouters before the app */}

      <div className="App">
        <Router />
        {/* <header className="App-header">TESTING</header> */}
      </div>
    </HashRouter>
  )
}

export default App
