import { currentUser } from '@clerk/nextjs'

const Page = async () => {
  const user = await currentUser()
  let fullname = 'Guest'

  if (user) {
    const { firstName, lastName } = user
    fullname = (firstName ? `${firstName} ` : '') + (lastName ? lastName : '')
    if (!fullname) fullname = 'User'
  }

  return (
    <main className='container mx-auto bg-white h-96'>
      <div className='container px-6 py-10 mx-auto'>
        <h1 className='text-2xl font-semibold text-gray-800 capitalize lg:text-3xl'>
          You are in, {fullname}
        </h1>
      </div>
    </main>
  )
}

export default Page
