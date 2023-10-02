import { SignIn } from '@clerk/nextjs'

const Page = () => {
  return (
    <main className='container mx-auto flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='mx-auto'>
        <SignIn afterSignInUrl={'/'} />
      </div>
    </main>
  )
}

export default Page
