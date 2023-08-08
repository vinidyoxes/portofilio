'use client'

import { useTheme } from "next-themes";

export default function ThemeTest() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="py-0 px-8 dark:bg-slate-800">
      <div className="flex flex-col justify-center px-8 w-full dark:bg-slate-800">
        <nav className="relative flex items-center justify-between w-full max-w-2xl pt-8 pb-8 mx-auto text-gray-900 border-gray-200 dark:border-gray-700 sm:pb-16">
          <span className="text-gray dark:color-white p-1 sm:px-3 sm:py-2 ">
            <h1 className="text-gray dark:text-white">Current theme: {resolvedTheme} </h1> 
          </span>
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            selectedTheme={resolvedTheme}
          >Click me</button>
        </nav>
      </div>
    </div>
  );
}