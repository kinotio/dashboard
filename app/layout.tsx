import '@styles/globals.css'

import type { Metadata } from 'next'

import DefaultLayout from '@layouts/DefaultLayout'

export const metadata: Metadata = {
  title: 'Kinotio | Dashboard',
  description:
    'Kinotio is collaborative digital space where software, applications, or projects are developed and shared openly.'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <DefaultLayout>{children}</DefaultLayout>
}

export default RootLayout
