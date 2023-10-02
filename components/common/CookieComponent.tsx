import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const CookieComponent = ({ handleHideCookieBanner }: { handleHideCookieBanner: any }) => {
  return (
    <div className='fixed bottom-0 w-full bg-gray-500 z-50'>
      <div className='max-w-5xl px-4 py-8 mx-auto md:flex md:items-center md:gap-x-6'>
        <div className='flex items-start md:items-center gap-x-2'>
          <p className='text-white'>
            We use cookies to enhance your user experience. By continuing to visit this site you
            agree to
            <a
              href='/cookie-policy'
              className='underline transition-colors duration-200 hover:text-black pl-1'
            >
              our use of cookies
            </a>
            .
          </p>
        </div>
        <button
          onClick={handleHideCookieBanner}
          className='items-center justify-center hidden text-white transition-colors duration-300 rounded-full md:flex w-7 h-7 focus:outline-none'
        >
          <FontAwesomeIcon icon={faXmark} style={{ fontSize: 24 }} />
        </button>
      </div>
    </div>
  )
}

export default CookieComponent
