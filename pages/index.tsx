import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Chip from '../components/Chip';
import Nav from '../components/Nav';
import Round from '../components/Round';
import Textarea from '../components/Textarea';
import Input from '../components/Input';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  let names = ['Jacky', 'Bec', 'Ben', 'Nirvana', 'Gowri'];
  let title = 'Round';
  let round = Array(5).fill(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.getElementById('__next')?.classList.add('dark');
    } else {
      document.getElementById('__next')?.classList.remove('dark');
    }
  }, [isDarkMode]);
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2 text-gray-600 dark:text-white dark:bg-gray-900'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Nav onToggle={setIsDarkMode} isChecked={isDarkMode} />

      <main className='flex w-full flex-1 flex-col items-center justify-center pl-10 pr-20'>
        <header className='pt-40 pb-10'>
          <h1 className='text-6xl font-bold'>
            Round Robin {''}
            <a
              className='text-blue-400'
              href='https://en.wikipedia.org/wiki/Round-robin_tournament'
            >
              Pairs
            </a>
          </h1>
        </header>

        <div className='grid grid-cols-[minmax(0px,_1fr)_250px] w-full auto-rows-auto'>
          <div className='flex flex-wrap justify-center gap-5 mx-8'>
            {round.map((_, index) => (
              <Round
                key={title + index}
                title={title}
                number={index + 1}
                Chips={names.map((name, index) => (
                  <Chip key={name + index} name={name} />
                ))}
              />
            ))}
          </div>
          <section className='gap-4 flex flex-col'>
            <Input />
            <Textarea />
          </section>
          <div className='mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full'>
            <a
              href='https://nextjs.org/docs'
              className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600'
            >
              <h3 className='text-2xl font-bold'>Documentation &rarr;</h3>
              <p className='mt-4 text-xl'>
                Find in-depth information about Next.js features and its API.
              </p>
            </a>
          </div>
        </div>
      </main>

      <footer className='flex h-24 w-full items-center justify-center border-t'>
        <a
          className='flex items-center justify-center gap-2'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Created by Jackytsheng{' '}
          <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
