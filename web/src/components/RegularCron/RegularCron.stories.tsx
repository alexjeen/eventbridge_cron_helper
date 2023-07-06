// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof RegularCron> = (args) => {
//   return <RegularCron {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import RegularCron from './RegularCron'

export const generated = () => {
  return <RegularCron />
}

export default {
  title: 'Components/RegularCron',
  component: RegularCron,
} as ComponentMeta<typeof RegularCron>
