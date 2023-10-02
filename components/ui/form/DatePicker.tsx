import { SyntheticEvent } from 'react'
import ReactDatePicker from 'react-datepicker'

const DatePicker = ({
  label,
  name,
  value,
  className,
  onChange
}: {
  label: string
  name: string
  value: Date | null
  className: string
  onChange: (date: Date) => void
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className='block mb-2 text-sm font-medium text-gray-900'>
        {label}
      </label>
      <ReactDatePicker
        selected={value}
        onChange={onChange}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
      />
    </div>
  )
}

export default DatePicker
