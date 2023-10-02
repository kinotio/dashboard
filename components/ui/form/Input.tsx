import { ChangeEventHandler } from 'react'
import { isEmpty } from 'lodash'
import classNames from 'classnames'

const Input = ({
  label,
  name,
  value,
  className,
  placeholder,
  onChange,
  required = false
}: {
  label: string
  name: string
  value: string
  className: string
  placeholder: string
  onChange: ChangeEventHandler<HTMLInputElement>
  required?: boolean
}) => {
  const inputClasses = classNames(
    'text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-50 border border-gray-300',
    { 'border-red-500': required && value && isEmpty(value) }
  )

  return (
    <div className={className}>
      <label htmlFor={name} className='block mb-2 text-sm font-medium text-gray-900'>
        {label}
      </label>
      <input
        type='text'
        name={name}
        id={name}
        className={inputClasses}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {required && value && isEmpty(value) ? (
        <span className='text-xs text-red-500'>This field is required</span>
      ) : null}
    </div>
  )
}

export default Input
