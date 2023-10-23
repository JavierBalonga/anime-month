import { MoonIcon, SunIcon } from 'lucide-react';
import { Outlet } from 'react-router-dom';

import { useTheme } from './theme-provider';
import { Button } from './ui/button';

export default function Layout() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <header className="flex-rowitems-center flex w-full max-w-5xl justify-between py-2">
        <h1>Anime Month</h1>
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
                    transform: `translate(-50%, -50%) rotate(30deg)`,
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
                    transform: `translate(-50%, -50%) rotate(30deg)`,
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
    </>
  );
}
