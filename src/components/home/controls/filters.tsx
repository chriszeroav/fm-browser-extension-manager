import { useApp } from '@/contexts'
import { cn } from '@/lib'
import type { OptionTab } from '@/types'
import type { FC } from 'react'

interface FiltersProps {}

const OPTIONS: OptionTab[] = [
  { label: 'All', value: 'All' },
  { label: 'Active', value: 'Active' },
  { label: 'Inactive', value: 'Inactive' },
]

export const Filters: FC<FiltersProps> = () => {
  const { currentTab, updateCurrentTab } = useApp()

  return (
    <section className='flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between'>
      <h1 className='text-center t-preset-1 text-custom-neutral-900 dark:text-custom-neutral-0'>
        Extensions List
      </h1>
      <div className='flex justify-center gap-3'>
        {OPTIONS.map((item) => {
          const isActive = currentTab === item.value

          return (
            <button
              key={item.value}
              onClick={() => updateCurrentTab(item.value)}
              className={cn(
                'px-5 pt-2 pb-2.5 rounded-full t-preset-3 transition-all',
                'cursor-pointer bg-custom-neutral-0 text-custom-neutral-900',
                'border border-custom-neutral-200 shadow-[0px_2px_3px_0px_#D9E5F4]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                'focus-visible:ring-custom-red-400 focus-visible:ring-offset-custom-neutral-200',
                'hover:bg-custom-neutral-0/80 dark:hover:bg-custom-neutral-600',
                'dark:bg-custom-neutral-700 dark:text-custom-neutral-0',
                'dark:shadow-none dark:border-custom-neutral-600',
                'dark:focus-visible:ring-offset-custom-neutral-900',
                'dark:focus-visible:border-custom-neutral-900',
                isActive && [
                  'bg-custom-red-700 text-custom-neutral-0 border-transparent',
                  'focus-visible:ring-offset-custom-neutral-0 focus-visible:border-custom-red-700',
                  'hover:bg-custom-red-500 dark:hover:bg-custom-red-500',
                  'dark:bg-custom-red-400 dark:border-custom-red-400 dark:text-custom-neutral-900',
                ],
              )}
            >
              {item.label}
            </button>
          )
        })}
      </div>
    </section>
  )
}
