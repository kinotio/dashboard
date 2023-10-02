import CountryDropdown from '@components/ui/form/CountryDropdown'
import RegionDropdown from '@components/ui/form/RegionDropdown'

interface CountryRegionDropdownProps {
  className: string

  countryLabel: string
  countryName: string
  countryValue: string
  countryOnChange: (val: string) => void

  regionLabel: string
  regionName: string
  regionValue: string
  regionOnChange: (val: string) => void
}

const CountryRegionDropdown = ({
  className,
  countryLabel,
  countryName,
  countryValue,
  countryOnChange,
  regionLabel,
  regionName,
  regionValue,
  regionOnChange
}: CountryRegionDropdownProps) => {
  return (
    <>
      <CountryDropdown
        className={className}
        label={countryLabel}
        name={countryName}
        value={countryValue}
        onChange={countryOnChange}
      />
      <RegionDropdown
        className={className}
        label={regionLabel}
        name={regionName}
        value={regionValue}
        onChange={regionOnChange}
        country={countryValue}
      />
    </>
  )
}

export default CountryRegionDropdown
