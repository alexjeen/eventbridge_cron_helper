import { render } from '@redwoodjs/testing/web'

import CronPage from './CronPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CronPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CronPage />)
    }).not.toThrow()
  })
})
