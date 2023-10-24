import { MoonIcon, SunIcon } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

import { useTheme } from '../contexts/theme-provider';
import Background from './background';
import { Button } from './ui/button';

export default function Layout() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <header className="flex-rowitems-center relative flex w-full max-w-5xl justify-between py-2">
        <h1 className="text-2xl font-extrabold">Anime Month</h1>
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex flex-row gap-3">
            <li>
              <Button variant="link" asChild>
                <Link to="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link to="/favorites">Favorites</Link>
              </Button>
            </li>
          </ul>
        </nav>
        <Button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          size="icon"
          variant="ghost"
          className="relative rounded-full"
        >
          <MoonIcon
            className="absolute left-1/2 top-1/2 transition-all duration-500"
            style={
              theme === 'dark'
                ? {
                    transform: `translate(-50%, -50%) rotate(-180deg)`,
                    opacity: 0,
                  }
                : {
                    transform: `translate(-50%, -50%)  rotate(0deg)`,
                    opacity: 1,
                  }
            }
          />
          <SunIcon
            className="absolute left-1/2 top-1/2 transition-all duration-500"
            style={
              theme === 'light'
                ? {
                    transform: `translate(-50%, -50%) rotate(180deg)`,
                    opacity: 0,
                  }
                : {
                    transform: `translate(-50%, -50%)  rotate(0deg)`,
                    opacity: 1,
                  }
            }
          />
        </Button>
      </header>
      <Outlet />
      <Background />
    </>
  );
}
