import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faDiscord, faSlack, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const FooterComponent = () => {
  return (
    <footer className='bg-white relative inset-x-0 bottom-0'>
      <div className='container px-6 py-12 mx-auto'>
        <hr className='my-6 border-gray-700' />

        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Image
              className='h-8 w-auto pr-2'
              src='/assets/images/kinotio-logo-dark.png'
              alt='Kinotio Logo'
              width='50'
              height='50'
            />
          </Link>

          <div className='flex mx-2'>
            <Link href='https://github.com/kinotio' className='mx-2 text-black' aria-label='GitHub'>
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: 20 }} />
            </Link>

            <Link
              href='https://discord.gg/GrW4P9un'
              className='mx-2 text-black'
              aria-label='Discord'
            >
              <FontAwesomeIcon icon={faDiscord} style={{ fontSize: 20 }} />
            </Link>

            <Link
              href='https://join.slack.com/t/kinotio/shared_invite/zt-22iyj7thg-B3bFQMmn_6u76oLVgJiL_Q'
              className='mx-2 text-black'
              aria-label='Slack'
            >
              <FontAwesomeIcon icon={faSlack} style={{ fontSize: 20 }} />
            </Link>

            <Link
              href='https://www.linkedin.com/company/kinotio'
              className='mx-2 text-black'
              aria-label='LinkedIn'
            >
              <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: 20 }} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
