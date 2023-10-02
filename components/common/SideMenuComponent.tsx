import Image from 'next/image'
import { SignedIn, UserButton } from '@clerk/nextjs'
import type { User } from '@clerk/nextjs/server'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableColumns } from '@fortawesome/free-solid-svg-icons'

const SideMenuComponent = ({ user }: { user: User | null }) => {
  const fullName = user
    ? (user.firstName ? `${user.firstName} ` : '') + (user.lastName ? user.lastName : '')
    : 'Guest'

  return (
    <aside className='sidemenu flex flex-col w-64 h-screen px-4 py-8 bg-white border-r rtl:border-r-0 rtl:border-l'>
      <a href='/' className='m-1.5 p-1.5 flex'>
        <span className='sr-only'>Kinotio</span>
        <Image
          className='h-8 w-auto pr-2'
          src='/assets/images/kinotio-logo-dark.png'
          alt='Kinotio Logo'
          width='50'
          height='50'
        />
      </a>

      <div className='flex flex-col justify-between flex-1 mt-6'>
        <nav>
          <a className='flex items-center px-4 py-2 text-black rounded-md my-4' href='#'>
            <FontAwesomeIcon icon={faTableColumns} style={{ fontSize: 16 }} />

            <span className='mx-4 font-medium'>Dashboard</span>
          </a>
        </nav>

        <SignedIn>
          <div className='flex items-center px-4 -mx-2'>
            <UserButton afterSignOutUrl='/' />

            <span className='pl-4'>{fullName}</span>
          </div>
        </SignedIn>
      </div>
    </aside>
  )
}

export default SideMenuComponent
