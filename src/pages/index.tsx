import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bruce - A fullstack developer</title>
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
            <li>
              <Link href="/">
                <a>Work</a>
              </Link>
            </li>

            <li className="text-gray-400">
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <div className="py-12 px-1 flex justify-center items-center max-w-screen-lg mx-auto">
        <div className="text-center text-xl text-gray-600 leading-loose tracking-wide">
          Hey, I&apos;m Bruce, a full-stack developer.
          <br />I help startups to build their web and mobile apps.
        </div>
      </div>

      <div className="grid grid-cols-2 py-12 max-w-screen-lg mx-auto gap-x-12 gap-y-16">
        <div>
          <img
            alt="Handmadelove"
            className="w-full h-auto object-cover hover:scale-105 transition-all"
            src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <div className="font-medium mt-4">Handmadelove</div>
          <div className="text-gray-400 mt-2 text-sm font-light">
            Handmadelove is an ecommerce website built with Next.js +
            Typescript.
            <br />
            Users can customize and order various hand-made products listed.
          </div>
        </div>

        <div>
          <img
            className="w-full h-auto object-cover hover:scale-105 transition-all hover:shadow-lg"
            src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?cs=srgb&dl=pexels-antoni-shkraba-4348401.jpg&fm=jpg"
          />
          <div className="font-medium mt-4">VisiblX</div>
          <div className="text-gray-400 mt-2 text-sm font-light">
            VisiblX is a centralized product experience management system where
            brands, and distributors can manage and share their products details
            easily.
          </div>
        </div>

        <div>
          <img
            className="w-full h-auto object-cover hover:scale-105 transition-all hover:shadow-lg"
            src="https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <div className="font-medium mt-4">Popstream</div>
          <div className="text-gray-400 mt-2 text-sm font-light">
            Popstream is a social media platform built with React Native +
            Typescript.
            <br />
            Its unique following system helps you reach more audiences easily.
          </div>
        </div>
      </div>
    </>
  );
}
