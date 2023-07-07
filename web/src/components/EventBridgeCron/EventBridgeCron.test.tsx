import { render } from '@redwoodjs/testing/web'

import EventBridgeCron from './EventBridgeCron'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EventBridgeCron', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventBridgeCron />)
    }).not.toThrow()
  })
})
