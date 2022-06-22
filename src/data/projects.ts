import { Project } from '~/components/project-card';

const projects: Project[] = [
  {
    id: '1',
    name: 'Handmadelove',
    intro: `Handmadelove is an ecommerce website built with Next.js + Typescript.  Users can customize and order various hand-made products listed.`,
    link: 'https://handmadelovebytanya.com',
    cover:
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    cover:
      'https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    cover:
      'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?cs=srgb&dl=pexels-antoni-shkraba-4348401.jpg&fm=jpg',
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
  {
    id: '4',
    name: 'SG Adhav',
    intro: '',
    link: 'https://sgadhav.in',
    cover: '/sgadhav.png',
    techs: ['React', 'Typescript'],
  },
  {
    id: '5',
    name: 'React Boilerplate',
    intro:
      ' React webpack boilerplate is a custom webpack setup, allows you to build React apps without CRA limitations. It enables absolute imports and PWA.',
    link: 'https://github.com/DevFromIN/react-webpack-boilerplate',
    cover:
      'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    techs: ['React 18', 'Webpack 5', 'Babel 7', 'Typescript', 'PWA'],
  },
  {
    id: '6',
    name: 'Express Typescript starter',
    intro:
      'Express + Typescript starter is a minimial code setup to start building your Node.js back-end with Typescript. It supports absolute imports.',
    link: 'https://github.com/DevFromIN/express-typescript-starter',
    cover:
      'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    techs: ['Express', 'Node.js', 'Typescript'],
  },
];

export default projects;
