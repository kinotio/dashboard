import {
  CountryIso2 as ReactCountryIso2,
  PhoneInput as ReactPhoneInput
} from 'react-international-phone'

export type PhoneInputCountryType = ReactCountryIso2

const PhoneInput = ({
  label,
  name,
  value,
  className,
  placeholder,
  onChange
}: {
  label: string
  name: string
  value: string
  className: string
  placeholder: string
  onChange: (phone: string, country: ReactCountryIso2) => void
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className='block mb-2 text-sm font-medium text-gray-900'>
        {label}
      </label>
      <ReactPhoneInput
        defaultCountry='us'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default PhoneInput
