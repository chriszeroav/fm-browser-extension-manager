import type { FC } from 'react'
import type { Extension } from '@/types'
import { CardExtension } from './src/card-extension'

interface ExtensionsProps {
  data: Extension[]
  toggleActive: (extensionID: number) => void
  deleteExtension: (extensionID: number) => void
}

export const Extensions: FC<ExtensionsProps> = ({
  data,
  toggleActive,
  deleteExtension,
}) => {
  return (
    <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
      {data.map((item) => (
        <CardExtension
          key={item.id}
          {...item}
          toggleActive={toggleActive}
          deleteExtension={deleteExtension}
        />
      ))}
    </ul>
  )
}
