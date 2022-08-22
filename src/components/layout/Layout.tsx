import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faHouse,
  faListCheck,
  faMoneyBillTransfer,
  faShapes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <div className='container mx-auto h-screen w-screen px-8 pt-4 lg:px-0'>
        <div className='flex h-full flex-col justify-between lg:mx-auto lg:w-1/2'>
          {/* HEADER */}
          <div className='flex flex-row content-between border-b-2 border-solid border-black pb-2'>
            <div className='container font-bold'>
              <p className='border-0 text-xl text-gray-700'>HEIRRO.EU.ORG</p>
              <p className='border-0 text-xs text-gray-700'>
                <UnderlineLink href=''>
                  THINK, CODING, AND DEVELOP
                </UnderlineLink>
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
          <div className='flex flex-row justify-between'>
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
              <UnstyledLink href='/apps' className=''>
                <FontAwesomeIcon icon={faShapes} size='lg' className='mr-2' />
                Apps
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
            <p className='border-0 font-bold text-gray-700'>
              MADE WITH ❤️ FROM SUB 🇮🇩
            </p>
          </div>
          {/* FOOTER */}
        </div>
      </div>
    </>
  );
}
