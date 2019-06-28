import React from 'react'
import { Grid, Header, Segment, Button, Dropdown } from 'semantic-ui-react'
import { Form, Field, Formik } from 'formik'
import * as Yup from 'yup'

import './SignUp.scss'
import { CustomField } from '../CustomField/CustomField'

const signupSchema = Yup.object().shape({
  name: Yup.string()
    .max(50, 'Must be under 50 characters')
    .required('First name is required'),
  email: Yup.string()
    .email('Not a valid e-mail address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must have at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must have at least one uppercase letter')
    .matches(/[0-9]/, 'Password must have at least one number')
    .matches(
      /\W|_/,
      'Password must have at least 1 special character (@,!,#,$,%,^,&,*,_, etc.).'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
    .required('Passwords do not match'),
})

const initialValues = {
  name: '',
  role: '',
  email: '',
  password: '',
}

const SignUp = (props: any) => {
  const { history, authContainer } = props
  const handleSubmit = ({ password, email, name, role }: any) => {
    const params = {
      email,
      password,
    }

    // authContainer
    //   .signUp(params)
    //   .catch((error: any) => {
    //     history.push({
    //       pathname: '/signIn',
    //       search: '?userExists=true',
    //     })
    //   })
    //   .then(
    //     history.push({
    //       pathname: '/signIn',
    //       search: '?verification=true',
    //     })
    //   )
  }

  return (
    <div className="sign-up-form">
      <Grid
        textAlign="center"
        className="form-grid-container"
        verticalAlign="middle"
      >
        <Grid.Column className="form-grid-column">
          <Header as="h2" textAlign="center">
            CREATE AN ACCOUNT
          </Header>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={signupSchema}
          >
            <Form className="ui form">
              <Segment stacked>
                <Field
                  name="name"
                  component={CustomField({
                    icon: 'address card outline',
                    type: 'text',
                    placeholder: 'Name',
                    iconPosition: 'left',
                    fluid: true,
                    disabled: false,
                  })}
                />
                <Field
                  name="role"
                  component={() => {
                    const options = [
                      {
                        key: 'member',
                        text: 'member',
                        value: 'member',
                      },
                      {
                        key: 'admin',
                        text: 'admin',
                        value: 'admin',
                      },
                    ]
                    return (
                      <Dropdown
                        placeholder="Role"
                        fluid
                        selection
                        options={options}
                        style={{ margin: '0 0 1em' }}
                      />
                    )
                  }}
                />
                <Field
                  name="email"
                  component={CustomField({
                    icon: 'mail',
                    type: 'text',
                    placeholder: 'Email',
                    iconPosition: 'left',
                    fluid: true,
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
                    fluid: true,
                    disabled: false,
                  })}
                />
                <Field
                  name="confirmPassword"
                  component={CustomField({
                    icon: 'lock',
                    type: 'password',
                    placeholder: 'Confirm Password',
                    iconPosition: 'left',
                    fluid: true,
                    disabled: false,
                  })}
                />
                <Button
                  color="blue"
                  fluid
                  size="large"
                  type="submit"
                  className="QA_sign-up-btn"
                >
                  SIGN UP
                </Button>
              </Segment>
            </Form>
          </Formik>
        </Grid.Column>
      </Grid>
    </div>
  )
}
export default SignUp
