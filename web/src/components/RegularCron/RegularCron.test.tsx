import { render } from '@redwoodjs/testing/web'

import RegularCron from './RegularCron'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RegularCron', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RegularCron />)
    }).not.toThrow()
  })
})
