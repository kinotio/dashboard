import '@fortawesome/fontawesome-svg-core/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-international-phone/style.css'
import 'react-datepicker/dist/react-datepicker.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import { Poppins } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import { ClerkLoading, ClerkProvider, ClerkLoaded, SignedOut } from '@clerk/nextjs'

import HeaderComponent from '@components/common/HeaderComponent'
import FooterComponent from '@components/common/FooterComponent'
import LoaderComponent from '@components/common/LoaderComponent'

import CookieContainer from '@containers/CookieContainer'

import SideMenuLayout from '@layouts/SideMenuLayout'

config.autoAddCss = false

const inter = Poppins({ subsets: ['latin'], weight: '500' })

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <ClerkLoading>
            <LoaderComponent />
          </ClerkLoading>
          <ClerkLoaded>
            <ToastContainer
              hideProgressBar={true}
              icon={false}
              position='top-center'
              theme='colored'
            />
            <SignedOut>
              <HeaderComponent />
            </SignedOut>

            <SideMenuLayout>{children}</SideMenuLayout>

            <SignedOut>
              <FooterComponent />
            </SignedOut>

            <CookieContainer />
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default DefaultLayout
