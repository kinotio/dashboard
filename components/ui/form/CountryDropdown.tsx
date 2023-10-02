import { CountryDropdown as ReactcountryDropdown } from 'react-country-region-selector'

const CountryDropdown = ({
  label,
  name,
  value,
  className,
  onChange
}: {
  label: string
  name: string
  value: string
  className: string
  onChange: (val: string) => void
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className='block mb-2 text-sm font-medium text-gray-900'>
        {label}
      </label>
      <div className='select-wrapper'>
        <ReactcountryDropdown
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          valueType='short'
          classes='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
        />
      </div>
    </div>
  )
}

export default CountryDropdown
