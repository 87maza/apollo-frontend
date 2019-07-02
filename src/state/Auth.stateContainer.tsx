import React, { Component } from 'react'
import { withRouter } from 'react-router'

const ctxt = React.createContext<IAuthContainerContext | undefined>(undefined)

export const AuthContextProvider = ctxt.Provider

export const AuthContextConsumer = ctxt.Consumer

export interface userData {
  id: string
  name: string
  role: string
  email: string
}

export interface IAuthContainerContext {
  state: AuthContainerState
  signUp: Function
  logIn: Function
  signOut: Function
}

export type AuthContainerState = {
  name: string
  email: string
}

class AuthContainer extends Component<any, AuthContainerState> {
  state = {
    name: '',
    email: '',
  }

  signUp = (user: any) => {
    console.log('graphql call to signUp')
  }

  logIn = (user: any) => {
    console.log('graphql call to login')
  }

  signOut = (authDataState?: any) => {
    console.log('graphql call to logout')
  }

  render() {
    const { children } = this.props
    const { name, email } = this.state
    return (
      <AuthContextProvider
        value={{
          state: {
            name,
            email,
          },
          logIn: this.logIn,
          signUp: this.signUp,
          signOut: this.signOut,
        }}
      >
        {children}
      </AuthContextProvider>
    )
  }
}

export default withRouter(AuthContainer)
