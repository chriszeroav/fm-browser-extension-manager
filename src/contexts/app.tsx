import type { Extension, Tab } from '@/types'
import {
  createContext,
  useContext,
  useState,
  type FC,
  type PropsWithChildren,
} from 'react'

interface AppProviderProps extends PropsWithChildren {}

interface AppContextProps {
  currentTab: Tab
  updateCurrentTab: (a: Tab) => void
}

const AppContext = createContext<AppContextProps | null>(null)

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState<Tab>('All')

  return (
    <AppContext.Provider
      value={{
        currentTab,
        updateCurrentTab: (a) => setCurrentTab(a),
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useApp = (): {
  currentTab: Tab
  updateCurrentTab: (a: Tab) => void
} => {
  const context = useContext(AppContext)

  if (!context) throw new Error('No esta envuelto en un contexto')

  return context
}
