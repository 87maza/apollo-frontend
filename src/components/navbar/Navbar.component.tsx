import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Form, Field, Formik } from 'formik'

import './Navbar.scss'
import { CustomField } from '../CustomField/CustomField'
import { client, signInMutation } from '../../graphql'
import { Mutation, ApolloConsumer } from 'react-apollo'
import gql from 'graphql-tag'

class Navbar extends Component {
  initialValues = {
    email: '',
    password: '',
  }

  handleSubmit = ({ email, password }: any) => {
    console.log('sign in ')
    // client
    //   .mutation({ mutation: signInMutation({ email, password }) })
    //   .then(res => {
    //     debugger
    //   })
  }

  render() {
    const SIGN_UP = gql`
      mutation SignUp(
        $email: String!
        $password: String!
        $role: String!
        $name: String!
      ) {
        signUp(
          input: {
            email: $email
            password: $password
            role: $role
            name: $name
          }
        ) {
          email
          role
        }
      }
    `

    return (
      <nav>
        <div className="unclassified-header">
          <h4>UNCLASSIFIED // FOUO</h4>
        </div>
        <Formik initialValues={this.initialValues} onSubmit={this.handleSubmit}>
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
            <Button size="medium" type="submit" className="sign-in-btn">
              SIGN IN
            </Button>
            <Button size="medium" className="sign-in-btn">
              LOG OUT
            </Button>
          </Form>
        </Formik>
      </nav>
    )
  }
}

export default Navbar
