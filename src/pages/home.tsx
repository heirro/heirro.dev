import {
  faCloudArrowDown,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

const Home = () => {
  return (
    <>
      <div className='h-min-screen flex flex-col'>
        <div className='mt-5'>
          <p className='mb-3 border-b border-solid border-black text-lg font-bold uppercase'>
            Introduction:
          </p>
          <div className='prose'>
            <p className='mb-2 justify-start text-base'>
              Hello👋 My name is Vava Heirro. I software engineer and grew up in
              Indonesia, A graduated from{' '}
              <UnderlineLink
                href='https://narotama.ac.id'
                className='hover:translate-y-0.5'
              >
                Narotama University
              </UnderlineLink>{' '}
              study in Informatics Enginnering. Before, I worked as a Data
              Analyst, General Affair and Marketing Manager.
            </p>
            <p className='mb-2 justify-start text-base'>
              Then, i change my job to software engineer included game
              developer, web developer and mobile developer as freelancer, also
              full-time employee in company called{' '}
              <UnderlineLink
                href='https://www.marketjs.com/'
                className='hover:translate-y-0.5'
              >
                MarketJS
              </UnderlineLink>{' '}
              as a full-stack developer.
            </p>
          </div>
        </div>
        <div className='m-5 flex flex-row justify-center p-7'>
          <div className='mt-3 mb-4 flex h-10 w-1/2 items-center justify-center border border-solid border-black text-center hover:bg-black hover:text-white'>
            <UnstyledLink href='./files/cv.pdf' className=''>
              <FontAwesomeIcon
                icon={faCloudArrowDown}
                size='lg'
                className='mr-2'
              />
              Download CV
            </UnstyledLink>
          </div>
          <div className='mt-3 mb-4 flex h-10 w-1/2 items-center justify-center border border-solid border-black text-center hover:bg-black hover:text-white'>
            <UnstyledLink href='mailto://heirro@jadalak.com'>
              <FontAwesomeIcon icon={faEnvelope} size='lg' className='mr-2' />
              Send Email
            </UnstyledLink>
          </div>
        </div>
        <div className='mb-4'>
          <p className='mb-3 border-b border-solid border-black text-lg font-bold uppercase'>
            Working Experience:
          </p>
          <div className='mb-3 flex flex-row justify-between'>
            <div>
              Full-stack Developer at{' '}
              <UnderlineLink
                href='https://www.marketjs.com/'
                className='hover:translate-y-0.5'
              >
                MarketJS
              </UnderlineLink>{' '}
              <span className='mr-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900'>
                Full-time
              </span>
              <br />
              <ul className='ml-6 mt-1 list-disc text-sm font-semibold'>
                <li>
                  Python, NodeJS, VueJS, MongoDB, Android, iOS, App Engine.
                </li>
              </ul>
            </div>
            <div className='font-semibold'>2021{' - '}Present</div>
          </div>

          <div className='mb-3 flex flex-row justify-between'>
            <div>
              NOC Engineer at{' '}
              <UnderlineLink
                href='https://indosatooredoo.com/portal/id/bsbusiness'
                className='hover:translate-y-0.5'
              >
                Indosat Ooredoo Business
              </UnderlineLink>{' '}
              <span className='mr-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900'>
                Freelance
              </span>
              <br />
              <ul className='ml-6 mt-1 list-disc text-sm font-semibold'>
                <li>Network Engineering, Operations, Security, B2B.</li>
              </ul>
            </div>
            <div className='font-semibold'>2020</div>
          </div>
          <div className='mb-3 flex flex-row justify-between'>
            <div>
              Game Developer at{' '}
              <UnderlineLink
                href='https://azagatechnology.com/'
                className='hover:translate-y-0.5'
              >
                Azaga Creative Technology
              </UnderlineLink>{' '}
              <span className='mr-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900'>
                Freelance
              </span>
              <br />
              <ul className='ml-6 mt-1 list-disc text-sm font-semibold'>
                <li>
                  Unity3D, Arduino, MySQL, MongoDB, NodeJS, Blender, Android.
                </li>
              </ul>
            </div>
            <div className='font-semibold'>2019{' - '}Present</div>
          </div>
          <div className='mb-3 flex flex-row justify-between'>
            <div>
              Marketing Stylish at{' '}
              <UnderlineLink
                href='https://www.levi.co.id/'
                className='hover:translate-y-0.5'
              >
                Levi Strauss Indonesia.
              </UnderlineLink>{' '}
              <span className='mr-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900'>
                Full-time
              </span>
              <br />
              <ul className='ml-6 mt-1 list-disc text-sm font-semibold'>
                <li>Data Analyst, B2B Marketing, Retail Marketing.</li>
              </ul>
            </div>
            <div className='font-semibold'>2018{' - '}2019</div>
          </div>
          <div className='mb-3 flex flex-row justify-between'>
            <div>
              General Affair at{' '}
              <UnderlineLink
                href='http://sogo.co.id/'
                className='hover:translate-y-0.5'
              >
                Panen Lestari Internusa - SOGO
              </UnderlineLink>{' '}
              <span className='mr-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900'>
                Full-time
              </span>
              <br />
              <ul className='ml-6 mt-1 list-disc text-sm font-semibold'>
                <li>Supply Chain, Warehouse Management.</li>
              </ul>
            </div>
            <div className='font-semibold'>2014{' - '}2018</div>
          </div>
        </div>
        {/* <div className='mb-4'>
        <p className='mb-3 border-b border-solid border-black text-lg font-bold uppercase'>
          Education:
        </p>
        <div className='mb-3 flex flex-row justify-between'>
          <div>
            Informatics Engineering at{' '}
            <UnderlineLink
              href='https://narotama.ac.id'
              className='hover:translate-y-0.5'
            >
              Narotama University
            </UnderlineLink>{' '}
            <span className='mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800'>
              Bachelor
            </span>
          </div>
          <div className='font-semibold'>2015{' - '}2019</div>
        </div>
        <div className='mb-3 flex flex-row justify-between'>
          <div>
            Natural Sciences Major at{' '}
            <UnderlineLink
              href='https://www.smayadika13.sch.id/'
              className='hover:translate-y-0.5'
            >
              Yadika 13 - Bekasi
            </UnderlineLink>{' '}
            <span className='mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800'>
              Senior High School
            </span>
          </div>
          <div className='font-semibold'>2011{' - '}2014</div>
        </div>
      </div> */}
      </div>
    </>
  );
};
export default Home;
