import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Chip from '../components/Chip';
import Nav from '../components/Nav';
import Round from '../components/Round';
import Textarea from '../components/Textarea';
import Input from '../components/Input';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import { Icon } from '../components/Svg';
import generateRoundRobinPair, {
  WAIT,
} from '../algorithms/generateRoundRobinPair';

const Home: NextPage = () => {
  const initialNames = ['Jacky', 'Bec', 'Ben', 'Nirvana', 'Gowri'];
  const initialRounds = generateRoundRobinPair(initialNames).map((r) =>
    r.filter((name) => name !== WAIT)
  );
  const [roundTitle, setRoundTitle] = useState('Round');
  const [names, setNames] = useState(initialNames);
  const [rounds, setRounds] = useState(initialRounds);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const downloadAsCSV = () => {
    let csvTitle = 'data:text/csv;charset=utf-8,Title';
    let csvContent = '';

    for (let i = 0; i < rounds.length; i++) {
      const displayTitle = `${
        roundTitle.charAt(0).toUpperCase() + roundTitle.slice(1).toLowerCase()
      } ${i + 1}`;
      csvContent += displayTitle;
      for (let j = 0; j < rounds[i].length; j += 2) {
        if (i === 0) csvTitle += `,Pair ${j + 1} Name 1, Pair ${j + 1} Name 2`;
        csvContent += `,${rounds[i][j]},${
          rounds[i][j + 1] ? rounds[i][j + 1] : ''
        }`;
      }
      csvContent += '\n';
    }
    const encodedUri = encodeURI(csvTitle + '\n' + csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'pairs.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const generate = () => {
    const rounds = generateRoundRobinPair(names).map((r) =>
      r.filter((name) => name !== WAIT)
    );
    setRounds(rounds);
  };

  const filterOutWait = () => initialRounds;

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
              target='__blank'
              className='text-blue-400 rounded-lg focus:ring-4 focus:outline-none dark:focus:ring-blue-100 '
              href='https://en.wikipedia.org/wiki/Round-robin_tournament'
            >
              Pairs
            </a>
          </h1>
        </header>

        <div className='grid grid-cols-[minmax(0px,_1fr)_280px] w-full auto-rows-auto'>
          <div className='flex flex-wrap justify-center gap-5 mx-8 items-start'>
            {rounds.map((eachRoundNames, index) => (
              <Round
                key={roundTitle + index}
                title={roundTitle}
                number={index + 1}
                Chips={eachRoundNames.map((name, index) => (
                  <Chip key={name + index} name={name} />
                ))}
              />
            ))}
          </div>
          <section className='gap-4 flex flex-col'>
            <Input setValue={setRoundTitle} defaultValue={roundTitle} />
            <Textarea setValues={setNames} defaultValue={names.join('\n')} />
            <div className='flex mt-2 gap-4 justify-between'>
              <Button
                icon={Icon.LeftChervon}
                text={'Generate'}
                onClick={generate}
              />
              <Button
                icon={Icon.Download}
                text={'Download as CSV'}
                onClick={downloadAsCSV}
              />
            </div>
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
