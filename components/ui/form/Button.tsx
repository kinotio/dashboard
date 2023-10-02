import ButtonLoaderIcon from '@components/icons/ButtonLoaderIcon'

const Button = ({
  type,
  label,
  loading,
  className
}: {
  type: 'button' | 'submit' | 'reset' | undefined
  label: string
  loading: boolean
  className: string
}) => {
  return (
    <button
      type={type}
      className={`inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center rounded-full ${className}`}
    >
      {loading ? <ButtonLoaderIcon /> : label}
    </button>
  )
}

export default Button
