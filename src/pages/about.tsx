import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>Bruce - About</title>
        <meta name="description" content="A personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-lg py-12">
        <div className="max-w-screen-lg mx-auto flex items-center justify-between">
          <div>
            <Link href="/">
              <a href="#" className="text-xl tracking-wide font-semibold">
                Mr. Bruce
              </a>
            </Link>
          </div>

          <ul className="flex justify-center items-center gap-8">
            <li className="text-gray-400">
              <Link href="/">
                <a>Work</a>
              </Link>
            </li>

            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <div className="py-12 px-1 flex justify-center items-center max-w-screen-lg mx-auto">
        <div className="text-center text-xl text-gray-600 leading-loose tracking-wide">
          Yep, that&apos;s me. <br />
          Nice to meet you 🙂
        </div>
      </div>

      <div className="grid grid-cols-[1fr_3fr] py-12 max-w-screen-lg mx-auto gap-x-12 gap-y-16">
        <h3 className="text-lg">About</h3>
        <p className="font-light text-lg leading-normal">
          My name is Bruce. I&apos;m a full stack developer with a strong focus
          on usability and user experience.
          <br />
          <br />
          My goal is to create usable and lovable products for people. I&apos;m
          good at solving problems, designing usable interfaces and creating
          delightful experiences. I&apos;m obsessed with quality, I do believe
          that the details are not the details, they make the product.
        </p>

        <h3 className="text-lg">Work</h3>
        <p className="font-light text-lg leading-loose">
          Systems Engineer @ Tata Consultancy Services
          <br />
          2019 - Now
          <br />
          <br />
        </p>
      </div>
    </>
  );
}
