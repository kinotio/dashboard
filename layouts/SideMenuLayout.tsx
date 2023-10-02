import { currentUser, SignedIn } from '@clerk/nextjs'

import SideMenuComponent from '@components/common/SideMenuComponent'

const SideMenuLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser()

  return (
    <div className='sidemenu-container'>
      <div className='flex justify-center flex-1'>
        <SignedIn>
          <SideMenuComponent user={user} />
        </SignedIn>

        <main className='container overflow-y-auto mx-4 my-6'>{children}</main>
      </div>
    </div>
  )
}

export default SideMenuLayout
