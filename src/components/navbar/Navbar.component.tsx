import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Form, Field, Formik } from 'formik'
import gql from 'graphql-tag'

import './Navbar.scss'
import { CustomField } from '../CustomField/CustomField'
import { Mutation, ApolloConsumer, withApollo } from 'react-apollo'

interface IState {
  loggedIn: boolean
  user?: User
}
interface User {
  name: string
  role: string
  email: string
  jwt: string
}
class Navbar extends Component<any, IState> {
  initialValues = {
    email: '',
    password: '',
  }

  state: IState = {
    user: undefined,
    loggedIn: false,
  }

  logOut = () => {
    localStorage.removeItem('jwt')
    this.setState({ user: undefined, loggedIn: false })
  }

  render() {
    const { loggedIn, user } = this.state
    const LOG_IN = gql`
      mutation LogIn($email: String!, $password: String!) {
        logIn(input: { email: $email, password: $password }) {
          email
          name
          role
          jwt
        }
      }
    `
    console.log(this.state)

    const renderWelcome = () => {
      if (user !== undefined) {
        console.log('yo', user.name)
        return <div> Welcome {`${user.name}`}</div>
      }
    }
    return (
      <ApolloConsumer>
        {client => (
          <Mutation
            mutation={LOG_IN}
            onCompleted={async (res: any) => {
              console.log('yo im here res', res)
              // client.writeData({ data: { isLoggedIn: true } })
              // history.push to RIF component
              this.setState({ user: res.logIn, loggedIn: true })
              localStorage.setItem('jwt', res.logIn.jwt)
            }}
          >
            {(logIn: Function, res: any) => {
              const handleSubmit = ({ email, password }: any) => {
                logIn({ variables: { email, password } })
              }
              return (
                <nav>
                  <div className="unclassified-header">
                    <h4>UNCLASSIFIED // FOUO</h4>
                  </div>
                  {loggedIn && user ? (
                    <div style={{ display: 'flex', float: 'right' }}>
                      {/* <p>{`Welcome! ${}`}</p> */}
                      {renderWelcome()}
                      <Button
                        size="medium"
                        onClick={this.logOut}
                        className="sign-in-btn"
                      >
                        LOG OUT
                      </Button>
                    </div>
                  ) : (
                    <Formik
                      initialValues={this.initialValues}
                      onSubmit={handleSubmit}
                    >
                      <Form style={{ display: 'flex', float: 'right' }}>
                        <Field
                          name="email"
                          component={CustomField({
                            icon: 'mail',
                            type: 'text',
                            placeholder: 'Email',
                            iconPosition: 'left',
                            fluid: false,
                            disabled: false,
                          })}
                        />
                        <Field
                          name="password"
                          component={CustomField({
                            icon: 'lock',
                            type: 'password',
                            placeholder: 'Password',
                            iconPosition: 'left',
                            fluid: false,
                            disabled: false,
                          })}
                        />
                        <Button
                          size="medium"
                          type="submit"
                          className="sign-in-btn"
                        >
                          SIGN IN
                        </Button>
                      </Form>
                    </Formik>
                  )}
                </nav>
              )
            }}
          </Mutation>
        )}
      </ApolloConsumer>
    )
  }
}

export default withApollo(Navbar)
