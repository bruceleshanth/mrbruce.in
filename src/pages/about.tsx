import Head from 'next/head';
import Footer from '~/components/nav/footer';
import Header from '~/components/nav/header';
import AboutMe from '~/containers/about';

export default function About() {
  return (
    <>
      <Head>
        <title>Bruce - About</title>
        <meta name="description" content="A personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <AboutMe />
      <Footer />
    </>
  );
}
