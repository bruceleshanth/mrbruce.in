import { Project } from '~/components/project-card'

const projects: Project[] = [
  {
    id: '1',
    name: 'Handmadelove',
    intro: `Handmadelove is an ecommerce website built with Next.js + Typescript.  Users can customize and order various hand-made products listed.`,
    link: 'https://handmadelovebytanya.com',
    cover: '/handmadelove.jpeg',
    techs: [
      'Next.js',
      'Typescript',
      'Tailwind CSS',
      'Node.js',
      'Linux',
      'MongoDB',
      'Firebase',
    ],
  },
  {
    id: '2',
    name: 'Popstream',
    intro:
      'Popstream is a social media platform built with React Native + Typescript.  Its unique following system helps you reach more audiences easily.',
    cover: '/popstream.jpeg',
    techs: [
      'React Native',
      'Typescript',
      'Firebase',
      'Node.js',
      'Postgres',
      'Prisma ORM',
      'Linux',
    ],
  },
  {
    id: '3',
    name: 'VisiblX',
    intro:
      'VisiblX is a centralized product experience management system where brands, and distributors can manage and share their products details easily.',
    cover: '/visiblx.jpeg',
    link: 'https://visiblx.in',
    techs: [
      'React',
      'Webpack',
      'Node.js',
      'Linux',
      'MongoDB',
      'Styled components',
    ],
  },
  // {
  //   id: '4',
  //   name: 'SG Adhav',
  //   intro: '',
  //   link: 'https://sgadhav.in',
  //   cover: '/sgadhav.png',
  //   techs: ['React', 'Typescript'],
  // },
  {
    id: '5',
    name: 'React Boilerplate',
    intro:
      ' React webpack boilerplate is a custom webpack setup, allows you to build React apps without CRA limitations. It enables absolute imports and PWA.',
    link: 'https://github.com/DevFromIN/react-webpack-boilerplate',
    cover: '/react-webpack-boilerplate.jpeg',
    techs: ['React 18', 'Webpack 5', 'Babel 7', 'Typescript', 'PWA'],
  },
  {
    id: '6',
    name: 'Express Typescript starter',
    intro:
      'Express + Typescript starter is a minimial code setup to start building your Node.js back-end with Typescript. It supports absolute imports.',
    link: 'https://github.com/DevFromIN/express-typescript-starter',
    cover: '/express-typescript-starter.jpeg',
    techs: ['Express', 'Node.js', 'Typescript'],
  },
]

export default projects
