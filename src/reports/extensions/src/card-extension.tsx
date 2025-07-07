import { cn } from '@/lib'
import type { Extension } from '@/types'
import type { FC } from 'react'

interface CardExtensionProps extends Extension {
  toggleActive: (extensionID: number) => void
  deleteExtension: (extensionID: number) => void
}

export const CardExtension: FC<CardExtensionProps> = ({
  id,
  logo,
  name,
  description,
  isActive,
  toggleActive,
  deleteExtension,
}) => {
  return (
    <li
      className={cn(
        'h-[200px] p-5 rounded-[20px]',
        'flex flex-col justify-between gap-1',
        'bg-custom-neutral-0 border border-custom-neutral-200',
        'shadow-[0px_2px_3px_0px_#D9E5F4]',
        'dark:shadow-none dark:border-custom-neutral-600 dark:bg-custom-neutral-800',
      )}
    >
      {/* Arriba */}
      <div className='flex items-start gap-4'>
        <img src={logo} alt={name} loading='lazy' />
        <div className='flex flex-col gap-2'>
          <h3 className='t-preset-2 text-custom-neutral-900 dark:text-custom-neutral-0'>
            {name}
          </h3>
          <p className='t-preset-5 text-custom-neutral-600 dark:text-custom-neutral-300'>
            {description}
          </p>
        </div>
      </div>

      {/* Abajo */}
      <div className='flex items-center justify-between'>
        <button
          onClick={() => deleteExtension(id)}
          className={cn(
            'border border-custom-neutral-300 cursor-pointer',
            'px-4 py-2 rounded-full text-center',
            't-preset-6 text-custom-neutral-900',
            'focus-visible:outline-none transition-all',
            'hover:bg-custom-red-700 hover:text-custom-neutral-0 hover:border-transparent',
            'focus-visible:ring-offset-2 focus-visible:ring-offset-custom-neutral-0',
            'focus-visible:ring-2 focus-visible:ring-custom-red-700',
            'focus-visible:bg-custom-neutral-100 focus-visible:border-custom-neutral-0',
            'dark:border-custom-neutral-600 dark:text-custom-neutral-0',
            'dark:hover:bg-custom-red-400 dark:hover:text-custom-neutral-900',
            'dark:focus-visible:bg-custom-neutral-600',
            'dark:focus-visible:ring-custom-red-400',
            'dark:focus-visible:ring-offset-custom-neutral-900',
            'dark:focus-visible:border-custom-neutral-900',
          )}
        >
          Remove
        </button>

        {/* Switch */}
        <label className='w-9 h-5 cursor-pointer'>
          <input
            type='checkbox'
            checked={isActive}
            onChange={() => toggleActive(id)}
            className='peer sr-only'
          />
          <span
            className={cn(
              'inline-block w-9 h-5',
              'bg-custom-neutral-300 rounded-full relative transition-all',
              'after:inline-block after:size-4',
              'peer-hover:bg-custom-red-500',
              'after:bg-custom-neutral-0 after:rounded-full',
              'after:translate-x-0.5 after:transition-all',
              'peer-checked:bg-custom-red-700 peer-checked:after:translate-x-[18px]',
              'peer-focus-visible:ring-2 peer-focus-visible:ring-custom-red-400',
              'peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-custom-neutral-0',
              'dark:bg-custom-neutral-600 peer-checked:bg-custom-red-400',
              'dark:peer-focus-visible:ring-offset-custom-neutral-900',
            )}
          ></span>
        </label>
      </div>
    </li>
  )
}
