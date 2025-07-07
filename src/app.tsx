import type { FC } from 'react'
import { Extensions, Filters, Header } from '@/components/home'
import { AppProvider } from '@/contexts'
import { ThemeProvider } from './contexts/theme'

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <ThemeProvider>
      <div className='min-h-screen bg-gradient-to-b from-[#EBF2FC] to-[#EEFBF9] px-4 pt-5 pb-16 sm:px-8 sm:pt-6 lg:pt-10 dark:from-[#04091B] dark:to-[#091540]'>
        <div className='max-w-[1170px] mx-auto flex flex-col gap-10'>
          <Header />
          <AppProvider>
            <main className='flex flex-col gap-10'>
              <Filters />
              <Extensions />
            </main>
          </AppProvider>
        </div>
      </div>
    </ThemeProvider>
  )
}
