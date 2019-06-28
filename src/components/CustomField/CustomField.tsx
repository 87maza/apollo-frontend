import React from 'react'
import { Input } from 'semantic-ui-react'
import './CustomField.scss'

export interface ISUIProps {
  placeholder?: string
  icon?: string
  iconPosition?: string
  type: string
  fluid?: boolean
  disabled?: boolean
}

export const CustomField = (args: ISUIProps) => ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}: any) => (
  <div className="ui field custom-field">
    {/* <label className="field-label" htmlFor={`custom-field-${field.name}`}>
      {args.placeholder}
    </label> */}
    <Input
      id={`custom-field-${field.name}`}
      className={`ui input field ${touched[field.name] &&
        errors[field.name] &&
        'error'}`}
      type={args.type}
      fluid={args.fluid}
      icon={args.icon}
      disabled={args.disabled}
      iconPosition={args.iconPosition}
      placeholder={args.placeholder}
      {...field}
      {...props}
    />
    {touched[field.name] && errors[field.name] && (
      <div className="error field-error">{errors[field.name]}</div>
    )}
  </div>
)
