'use client';

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Jobs Empower</Link>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>
        </nav>
      </div>
    </header>
  )
}