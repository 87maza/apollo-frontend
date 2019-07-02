import React, { Component } from 'react'
import { History } from 'history'
import Navbar from '../../components/navbar/Navbar.component'
import SignUp from '../../components/signUp/SignUp.component'

interface IProps {
  // authContainer: IAuthContainerContext
  history: History
}

class Rif extends Component<IProps> {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ marginTop: '50px' }}>
          {/* insert sign up component */}
        </div>
      </div>
    )
  }
}
export default Rif
