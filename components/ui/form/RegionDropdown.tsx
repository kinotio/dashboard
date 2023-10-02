import { RegionDropdown as ReactRegionDropdown } from 'react-country-region-selector'

const RegionDropdown = ({
  label,
  name,
  country,
  value,
  className,
  onChange
}: {
  label: string
  name: string
  country: string
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
        <ReactRegionDropdown
          id={name}
          name={name}
          disableWhenEmpty={true}
          country={country}
          value={value}
          onChange={onChange}
          countryValueType='short'
          classes='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
        />
      </div>
    </div>
  )
}

export default RegionDropdown
