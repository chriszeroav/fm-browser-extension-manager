import type { FC } from 'react'

import { MoonIcon } from '@/components/ui'
import { cn } from '@/lib'
import { useTheme } from '@/contexts'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <header
      className={cn(
        'grid grid-cols-[1fr_auto] items-center',
        'bg-custom-neutral-0 px-3 py-2 rounded-[10px]',
        'border border-custom-neutral-200',
        'sm:px-4 sm:py-3 sm:rounded-[20px]',
        'dark:bg-custom-neutral-800',
        'shadow-[0px_2px_3px_0px_#D9E5F4]',
        'dark:shadow-none dark:border-none',
      )}
    >
      <picture className='flex items-center gap-3'>
        <img
          src='/logo.svg'
          alt='Logo de Extensions con ícono rojo entrelazado'
        />
        <h2 className='t-preset-4 text-custom-neutral-900 dark:text-custom-neutral-0'>
          Extensions
        </h2>
      </picture>
      <button
        onClick={toggleTheme}
        className={cn(
          'inline-flex items-center justify-center',
          'size-[50px] rounded-xl cursor-pointer',
          'bg-custom-neutral-100 hover:bg-custom-neutral-300',
          'shadow-[0px_2px_3px_0px_#D9E5F4] transition-all',
          'focus-visible:ring-2 focus-visible:ring-custom-red-400',
          'focus-visible:ring-offset-[3px] focus-visible:ring-offset-custom-neutral-0',
          'focus-visible:outline-none',
          'dark:bg-custom-neutral-700 dark:text-custom-neutral-0',
          'dark:shadow-none dark:hover:bg-custom-neutral-600',
          'dark:focus-visible:ring-offset-custom-neutral-800',
        )}
      >
        <MoonIcon className='size-6' />
      </button>
    </header>
  )
}
