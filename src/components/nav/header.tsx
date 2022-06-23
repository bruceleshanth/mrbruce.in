import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

const menus = [
  { menu: 'Work', path: '/' },
  { menu: 'About', path: '/about' },
];

export default function Header() {
  const router = useRouter();

  return (
    <header className="text-base sm:text-lg p-8 sm:p-12">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
        <div>
          <Link href="/">
            <a
              href="#"
              className="text-3xl tracking-wide font-semibold"
              style={{ fontFamily: 'Allison' }}
            >
              Mr. Bruce
            </a>
          </Link>
        </div>

        <ul className="flex justify-center items-center gap-8">
          {menus.map(menu => (
            <li
              key={menu.menu}
              className={cn({ 'text-gray-400': menu.path !== router.pathname })}
            >
              <Link href={menu.path}>
                <a>{menu.menu}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
