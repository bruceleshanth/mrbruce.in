/* eslint-disable @next/next/no-img-element */
import Pill from '~/components/pill';

export default function Projects() {
  return (
    <>
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
          <h3 className="font-medium mt-4">Handmadelove</h3>
          <p className="text-gray-400 mt-2 text-sm font-light">
            Handmadelove is an ecommerce website built with Next.js +
            Typescript.
            <br />
            Users can customize and order various hand-made products listed.
          </p>
          <div className="mt-4 flex items-start flex-wrap gap-2">
            <Pill>Next.js</Pill>
            <Pill>Typescript</Pill>
            <Pill>Tailwind CSS</Pill>
            <Pill>Node.js</Pill>
            <Pill>Linux</Pill>
            <Pill>MongoDB</Pill>
            <Pill>Firebase</Pill>
          </div>
        </div>

        <div>
          <img
            alt="Visiblx"
            className="w-full h-auto object-cover hover:scale-105 transition-all hover:shadow-lg"
            src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?cs=srgb&dl=pexels-antoni-shkraba-4348401.jpg&fm=jpg"
          />
          <h3 className="font-medium mt-4">VisiblX</h3>
          <p className="text-gray-400 mt-2 text-sm font-light">
            VisiblX is a centralized product experience management system where
            brands, and distributors can manage and share their products details
            easily.
          </p>

          <div className="mt-4 flex items-start flex-wrap gap-2">
            <Pill>React</Pill>
            <Pill>Webpack</Pill>
            <Pill>Node.js</Pill>
            <Pill>Linux</Pill>
            <Pill>MongoDB</Pill>
            <Pill>Styled components</Pill>
          </div>
        </div>

        <div>
          <img
            alt="Popstream"
            className="w-full h-auto object-cover hover:scale-105 transition-all hover:shadow-lg"
            src="https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <h3 className="font-medium mt-4">Popstream</h3>
          <p className="text-gray-400 mt-2 text-sm font-light">
            Popstream is a social media platform built with React Native +
            Typescript.
            <br />
            Its unique following system helps you reach more audiences easily.
          </p>

          <div className="mt-4 flex items-start flex-wrap gap-2">
            <Pill>React Native</Pill>
            <Pill>Typescript</Pill>
            <Pill>Firebase</Pill>
            <Pill>Node.js</Pill>
            <Pill>MongoDB</Pill>
            <Pill>Prisma ORM</Pill>
            <Pill>Linux</Pill>
          </div>
        </div>

        <div>
          <img
            alt="React Boilerplate"
            className="w-full h-auto object-cover hover:scale-105 transition-all hover:shadow-lg"
            src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <h3 className="font-medium mt-4">React Webpack Boilerplate</h3>
          <p className="text-gray-400 mt-2 text-sm font-light">
            React webpack boilerplate is a custom webpack setup, allows you to
            build React apps without CRA limitations. It enables absolute
            imports and PWA.
          </p>

          <div className="mt-4 flex items-start flex-wrap gap-2">
            <Pill>React 18</Pill>
            <Pill>Webpack 5</Pill>
            <Pill>Babel 7</Pill>
            <Pill>Typescript</Pill>
            <Pill>PWA</Pill>
          </div>
        </div>

        <div>
          <img
            alt="Express starter"
            className="w-full h-auto object-cover hover:scale-105 transition-all hover:shadow-lg"
            src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <h3 className="font-medium mt-4">Express Typescript starter</h3>
          <p className="text-gray-400 mt-2 text-sm font-light">
            Express + Typescript starter is a minimial code setup to start
            building your Node.js back-end with Typescript. It supports absolute
            imports.
          </p>

          <div className="mt-4 flex items-start flex-wrap gap-2">
            <Pill>React 18</Pill>
            <Pill>Webpack 5</Pill>
            <Pill>Babel 7</Pill>
            <Pill>Typescript</Pill>
            <Pill>PWA</Pill>
          </div>
        </div>
      </div>
    </>
  );
}
