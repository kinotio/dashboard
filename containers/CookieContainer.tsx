'use client'

import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { getCookie, setCookie } from 'cookies-next'

import CookieComponent from '@components/common/CookieComponent'

const CookieContainer = () => {
  const [showCookieConsent, setShowCookieConsent] = useState<boolean>(false)

  const handleHideCookieBanner = () => {
    setShowCookieConsent(false)
    setCookie('closed_cookie', uuidv4())
  }

  useEffect(() => {
    if (getCookie('closed_cookie')) {
      setShowCookieConsent(false)
      return
    }

    const timeout = setTimeout(() => setShowCookieConsent(true), 0)

    return clearTimeout(timeout)
  }, [])

  return (
    <>
      {showCookieConsent ? (
        <CookieComponent handleHideCookieBanner={handleHideCookieBanner} />
      ) : null}
    </>
  )
}

export default CookieContainer
