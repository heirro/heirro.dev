import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faBook,
  faHouse,
  faListCheck,
  faMoneyBillTransfer,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function Layout(props: { children: React.ReactNode }) {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const now = new Date();
  /* const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]; */

  return (
    <>
      <div className='container mx-auto h-screen w-screen px-8 pt-4 lg:px-0'>
        <div className='flex min-h-screen flex-col justify-between lg:mx-auto lg:w-1/2'>
          {/* HEADER */}
          <div className='flex flex-row content-between border-b-2 border-solid border-black pb-2'>
            <div className='container font-bold'>
              <p className='border-0 text-xl text-gray-700'>HEIRRO.EU.ORG</p>
              <p className='border-0 text-xs text-gray-700'>
                THINK, CODING, AND DEVELOP
              </p>
            </div>
            <div className='flex flex-row justify-between text-right'>
              <UnstyledLink href='https://github.com/heirro'>
                <FontAwesomeIcon
                  icon={faGithub}
                  size='lg'
                  className='text-4xl transition duration-150 hover:-translate-y-1'
                />
              </UnstyledLink>{' '}
              <div className='mr-5'></div>
              <UnstyledLink href='https://www.linkedin.com/in/heirro/'>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size='lg'
                  className='text-4xl transition duration-150 hover:-translate-y-1'
                />
              </UnstyledLink>
            </div>
          </div>
          <div className='mb-10 flex flex-row justify-between '>
            <div className='flex h-10 w-1/2 items-center justify-center border border-l-2 border-solid border-black text-center hover:bg-black hover:text-white'>
              <UnstyledLink href='/home' className=''>
                <FontAwesomeIcon icon={faHouse} size='lg' className='mr-2' />
                Home
              </UnstyledLink>
            </div>
            <div className='flex h-10 w-1/2 items-center justify-center border border-solid border-black text-center hover:bg-black hover:text-white'>
              <UnstyledLink href='/projects'>
                <FontAwesomeIcon
                  icon={faListCheck}
                  size='lg'
                  className='mr-2'
                />
                Projects
              </UnstyledLink>
            </div>
            <div className='flex h-10 w-1/2 items-center justify-center border border-solid border-black text-center hover:bg-black hover:text-white'>
              <UnstyledLink href='/blog' className=''>
                <FontAwesomeIcon icon={faBook} size='lg' className='mr-2' />
                Blog
              </UnstyledLink>
            </div>
            <div className='flex h-10 w-1/2 items-center justify-center border border-r-2 border-solid border-black text-center hover:bg-black hover:text-white'>
              <UnstyledLink href='/donate' className=''>
                <FontAwesomeIcon
                  icon={faMoneyBillTransfer}
                  size='lg'
                  className='mr-2'
                />
                Donate
              </UnstyledLink>
            </div>
          </div>
          {/* HEADER */}
          {/* MAIN */}
          <>{props.children}</>
          <div className='mt-2 mb-0 flex flex-row content-between items-center justify-center border-t-2 border-solid border-black py-8'>
            {/* <p className='border-0 text-center text-sm font-bold text-gray-700'>
              POWERED BY{' '}
              <div className='flex flex-row justify-center'>
                <div className='mr-2'></div>
                <NextImage
                  className='w-100 md:w-10'
                  src='/images/lightsail.png'
                  width='50'
                  height='50'
                  objectFit='contain'
                  alt='Lightsail'
                  title='Lightsail'
                />{' '}
                <div className='mr-2'></div>
                <NextImage
                  className='w-100 md:w-10'
                  src='/images/cloudflare.png'
                  width='100'
                  objectFit='contain'
                  height='100'
                  alt='Cloudflare'
                  title='Cloudflare'
                />{' '}
                <div className='mr-2'></div>
                <NextImage
                  className='w-100 md:w-10'
                  src='/images/github.png'
                  width='50'
                  height='50'
                  objectFit='contain'
                  alt='Github'
                  title='Github'
                />
              </div>
            </p> */}
          </div>
          {/* FOOTER */}
        </div>
      </div>
    </>
  );
}
