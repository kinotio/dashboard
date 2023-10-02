import { currentUser } from '@clerk/nextjs'

import SideMenuComponent from '@components/common/SideMenuComponent'

const SideMenuLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser()

  return (
    <div className='sidemenu-container'>
      <div className='flex flex-col md:flex-row flex-1'>
        <SideMenuComponent user={user} />

        <main className='container flex-1 overflow-y-auto'>{children}</main>
      </div>
    </div>
  )
}

export default SideMenuLayout
