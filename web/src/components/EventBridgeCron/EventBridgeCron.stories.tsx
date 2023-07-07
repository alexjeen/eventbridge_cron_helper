// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof EventBridgeCron> = (args) => {
//   return <EventBridgeCron {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import EventBridgeCron from './EventBridgeCron'

export const generated = () => {
  return <EventBridgeCron />
}

export default {
  title: 'Components/EventBridgeCron',
  component: EventBridgeCron,
} as ComponentMeta<typeof EventBridgeCron>
