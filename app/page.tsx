import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from './_components/Layout';
import Schema from './_lib/Schema';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>julianaijal.com</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* To-do:move to head */}
      <Schema/>
      <Layout />
    </>
  );
};

export default Home;
