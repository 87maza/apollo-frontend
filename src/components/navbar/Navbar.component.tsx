import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Form, Field, Formik } from 'formik'

import './Navbar.scss'
import { CustomField } from '../CustomField/CustomField'

class Navbar extends Component {
  initialValues = {
    email: '',
    password: '',
  }

  handleSubmit = () => {
    console.log('sumbitting')
  }

  render() {
    return (
      <nav>
        <div className="unclassified-header">
          <h4>UNCLASSIFIED // FOUO</h4>
        </div>
        <Formik initialValues={this.initialValues} onSubmit={this.handleSubmit}>
          <Form style={{ display: 'flex', float: 'right' }}>
            {/* <Segment stacked> */}
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
            {/* </Segment> */}
          </Form>
        </Formik>
      </nav>
    )
  }
}

export default Navbar
