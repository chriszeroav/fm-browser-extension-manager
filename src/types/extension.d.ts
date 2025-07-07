export interface Extension {
  id: number
  logo: string
  name: string
  description: string
  isActive: boolean
}

export type Tab = 'All' | 'Active' | 'Inactive'

export interface OptionTab {
  label: string
  value: Tab
}
