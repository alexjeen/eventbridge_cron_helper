import type { ComponentMeta } from '@storybook/react'

import CronPage from './CronPage'

export const generated = () => {
  return <CronPage />
}

export default {
  title: 'Pages/CronPage',
  component: CronPage,
} as ComponentMeta<typeof CronPage>
