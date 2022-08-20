import Head from 'next/head'
import Footer from '~/components/nav/footer'
import Header from '~/components/nav/header'
import Projects from '~/containers/projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bruce - A fullstack developer</title>
        <meta name="description" content="A personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Projects />
      <Footer />
    </>
  )
}
