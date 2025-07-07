import type { FC } from 'react'
import { Extensions as ExtensionsList } from '@/reports'
import { useGetExtensions } from '@/hooks'
import { useApp } from '@/contexts'

interface ExtensionsProps {}

export const Extensions: FC<ExtensionsProps> = () => {
  const { currentTab } = useApp()
  const { extensions, toggleActive, deleteExtension } = useGetExtensions({
    optionTab: currentTab,
  })

  if (extensions.length <= 0) {
    return (
      <section className='flex items-center justify-center text-center'>
        <p className='t-preset-5 text-custom-neutral-600'>No hay datos</p>
      </section>
    )
  }

  return (
    <section>
      <ExtensionsList
        data={extensions}
        toggleActive={toggleActive}
        deleteExtension={deleteExtension}
      />
    </section>
  )
}
