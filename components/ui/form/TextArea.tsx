import { ChangeEventHandler } from 'react'

const TextArea = ({
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
  onChange: ChangeEventHandler<HTMLTextAreaElement>
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className='block mb-2 text-sm font-medium text-gray-900'>
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        rows={10}
      />
    </div>
  )
}

export default TextArea
